# DoctorAI - ChatGPT Plugin

## Overview
The ChatGPT AI Doctor Plugin is a JavaScript-based extension to the ChatGPT model developed by OpenAI. This plugin enables ChatGPT to take on the role of a virtual physician, attentively asking about a user's current physical condition and providing diagnostic and treatment advice based on professional medical knowledge.

## Features
- **User Interaction**: The plugin enables ChatGPT to interact with users in a responsible and patient manner, similar to a real-life physician. It can ask about users' current physical condition and other relevant medical information.
- **MSD Manual Integration**: The plugin integrates with the [MSD Manual](https://www.msdmanuals.com/professional), a widely respected source of medical information. It uses this resource to provide the AI with accurate and current medical knowledge.
- **Search Capability**: In the event that a direct link to the MSD Manual fails, the plugin has the ability to search the manual using a search engine. This feature allows the plugin to provide information on a wide variety of physical symptoms and illnesses.

## Usage
To use the ChatGPT AI Doctor Plugin, simply engage in a conversation with the AI as you would with a typical physician. Provide as much relevant information about your physical condition as you can. Based on your input, the AI will provide diagnostic and treatment advice, drawing upon the medical knowledge contained within the MSD Manual.

Please note: The advice provided by this AI should not replace professional medical advice. Always consult with a healthcare professional for medical concerns.

## Quickstart

Follow these steps to quickly set up and start using the ChatGPT AI Doctor Plugin:

### Prerequisites

- You need Node.js installed on your machine. You can download it from [here](https://nodejs.org).
- Ensure that you have a working installation of ChatGPT.

### Installation

1. Clone the repository:
```bash
git git@github.com:dongdongye96/doctorai.git
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
1.Modify Chrome's path according to your system
```bash
browser = await puppeteer.launch({
          headless: true, 
          executablePath: '/usr/.cache/puppeteer/chrome', // Modify this path according to your system
          args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
```

2.Start the plugin with the following command:
```bash
node app.js
```



## Contribution
Contributions to the ChatGPT AI Doctor Plugin are welcome. Please submit a pull request or issue on the repository page.

## License
This project is licensed under the [GAGP](LICENSE).

## Contact
For questions and support, please contact the project team at [email address].

## Disclaimer
The ChatGPT Plugin DoctorAI is not a replacement for professional medical advice or treatment. It should be used for informational purposes only. Always seek the advice of a healthcare professional with any questions regarding a medical condition.

