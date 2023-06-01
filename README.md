# DoctorAI - ChatGPT Plugin

## Overview
The DoctorAI is a Plugin for ChatGPT developed by OpenAI. This plugin enhances ChatGPT to function as a virtual physician, enabling it to inquire about a user's current physical condition and offer diagnostic and treatment advice based on professional medical knowledge. This plugin is ideal for preliminary diagnosis and providing general medical advice. 

> **Disclaimer:** The advice provided by this AI should not replace professional medical advice. Always consult with a healthcare professional for medical concerns. The ChatGPT Plugin DoctorAI is not a replacement for professional medical advice or treatment. It should be used for informational purposes only.

## Features
- **User Interaction**: The plugin allows ChatGPT to interact with users in a responsible and patient manner, similar to a real-life physician. It can ask about users' current physical condition and other relevant medical information.
- **MSD Manual Integration**: The plugin integrates with the [MSD Manual](https://www.msdmanuals.com/professional), a widely respected source of medical information. It uses this resource to provide the AI with accurate and current medical knowledge.
- **Search Capability**: In case a direct link to the MSD Manual doesn't yield the required information, the plugin has the ability to search the manual using a search engine. This feature allows the plugin to provide information on a wide variety of physical symptoms and illnesses.

## Usage
To use the ChatGPT AI Doctor Plugin, you should engage in a conversation with the AI, similar to how you would with a typical physician. Provide as much relevant information about your physical condition as you can. The plugin will interact with ChatGPT to provide diagnostic and treatment advice, using the medical knowledge contained within the MSD Manual.

## Quickstart

Follow these steps to quickly set up and start using the ChatGPT AI Doctor Plugin:

### Prerequisites
- You need Node.js installed on your machine. You can download it from [here](https://nodejs.org).
- Ensure that you have a working installation of ChatGPT.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/dongdongye96/doctorai.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ~/doctorai
    ```
3. Install the dependencies:
    ```bash
    npm install 
    ```

### Usage
1. Modify Chrome's path according to your system
    ```bash
    browser = await puppeteer.launch({
              headless: true, 
              executablePath: '/usr/.cache/puppeteer/chrome', // Modify this path according to your system
              args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
    ```
    Tip: If you haven't installed Chrome, you can find it at the path 'usr/.cache/puppeteer'. Replace the path in the code with this.

2. Start the plugin with the following command:
    ```bash
    node app.js
    ```
Once the local server is running:
1. Navigate to https://chat.openai.com.
2. In the Model drop down, select "Plugins" (note, if you don't see it there, you don't have access yet).
3. Select "Plugin store"
4. Select "Develop your own plugin"
5. Enter in localhost:8080 since this is the URL the server is running on locally, then select "Find manifest file".

The plugin should now be installed and enabled! You can start with a question like "I have headache, what should I do?" and then try adding something to it as well!

## Contribution
Contributions to the ChatGPT Plugin DoctorAI are welcome. Please submit a pull request or issue on the repository page.

## License
This project is licensed under the [GNU Affero General Public License (GAGP)](LICENSE).

## Contact
For questions and support regarding installation or usage issues, please contact the project team at [dong5655@outlook.com].

## Disclaimer
The ChatGPT Plugin DoctorAI is not a replacement for professional medical advice or treatment. It should be used for informational purposes only. Always seek the advice of a healthcare professional with any questions regarding a medical condition.
