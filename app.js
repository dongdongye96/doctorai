const express = require('express');
const cors = require('cors');
const url = require('url');
const app = express();
const fs = require('fs');
const puppeteer = require('puppeteer-core');

app.use(cors());
app.use(express.json());

var corsOptions = {
  origin: 'https://chat.openai.com',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post("/msd", async (req, res) => {
    const link = req.body.link;

    let browser;
    try {
        // Open a new browser instance
        browser = await puppeteer.launch({
          headless: true, 
          executablePath: '/usr/.cache/puppeteer/chrome', // Modify this path according to your system
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        // Open a new page
        const page = await browser.newPage();

        // Enable request interception
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            // Add the types of requests you do not need
            if(req.resourceType() === 'image' || req.resourceType() === 'stylesheet' || req.resourceType() === 'font'){
                req.abort();
            }
            else {
                req.continue();
            }
        });

        // Visit the specified URL
        await page.goto(link, {timeout: 60000}, { waitUntil: 'networkidle0' });
        await page.waitForSelector('#maincontent');

        // Use Puppeteer's evaluate method to execute JavaScript code on the page to get the content you need
        const data = await page.evaluate(() => {
            const title = document.querySelector('title').innerText;
            const contentNodes = document.querySelectorAll('article p, article a');
            let content = '';
            contentNodes.forEach((node) => {
                if (node.nodeName === 'P') {
                    content += node.innerText + ' ';
                }
                if (node.nodeName === 'A' && !node.href.includes('#') ){
                    content += node.href + ' ';
                }
            });

            return {
                "title": title,
                "content": content,
                "todo": null,
                "rules": [
                    "Use the language that the user previously used or the language requested by the user.",
                    "The content should include such as etiology, symptoms and signs, diagnosis, treatment, etc. If not, you need to visit the url by searched result.",
                    "Answer the user's question, which may include making appropriate diagnoses and providing targeted medical advice, based on the provided content.",
                    "Perform the following tasks: 1.As discreet and objective as a doctor; 2. Summarize the content into a brief and easily understandable paragraph; 3. Depending on the content, present a careful diagnosis and give Reasonable suggestion;4.remind users to accept professional help.",
                    "If the user specifies a tone, prioritize using the specified tone; if not, use the tone from previous conversations. If neither is available, use a humorous and concise tone. In all cases, ensure the output is easy to read."
                ],
                "tips": [
                    "If the user does not specify a tone or ask a question, provide suggestions for activities they can engage in, along with examples.",
                ]
            };
        });
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data from MSD Manuals' });
    } finally {
        if (browser) {
            // Close the browser instance
            await browser.close();
        }
    }
});


app.get("/logo.png", (req, res) => {
    fs.readFile("logo.png", 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to read logo.png');
            return;
        }
        res.type('json').send(data);
    });
  });


app.get("/.well-known/ai-plugin.json", (req, res) => {
  fs.readFile("./.well-known/ai-plugin.json", 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send('Failed to read ai-plugin.json');
          return;
      }
      res.type('json').send(data);
  });
});

app.get("/openapi.yaml", (req, res) => {
  fs.readFile("openapi.yaml", 'utf8', (err, data) => {
      if (err) {
          console.error(err);
          res.status(500).send('Failed to read openapi.yaml');
          return;
      }
      res.type('yaml').send(data);
  });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
