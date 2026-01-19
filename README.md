## 🛠️ Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?logo=nodedotjs&logoColor=white) ![Google GenAI](https://img.shields.io/badge/Google_GenAI-SDK-4285F4?logo=google&logoColor=white) ![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?logo=github&logoColor=white)

# Gemini API Quickstart (Node.js)

A simple proof-of-concept for integrating Google's Gemini API (Model: `gemini-2.5-flash`) using Node.js. 

This project demonstrates how to securely authenticate via API keys and generate text content using the `@google/genai` SDK.

## 📋 Prerequisites

* **Node.js**: Version 20.6.0 or higher (required for native `.env` file support).
* **Google AI Studio API Key**: Get one [here](https://aistudio.google.com/).

## 🚀 Installation & Setup

1.  **Clone the repository** (or download the files):
    ```bash
    git clone <your-repo-url>
    cd gemini_api_starter
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a file named `.env` in the root directory and add your API key.
    
    *Note: The `.env` file is ignored by git to protect your credentials.*

    ```bash
    # .env
    GEMINI_API_KEY=your_actual_api_key_here
    ```

## 💻 Usage & Output Example

Run the script using Node.js with the environment file flag:

    ```bash
    node --env-file=.env test.mjs
    ```

**Expected Output:** The script will print a generated explanation of how Gemini API can help users.

    ```bash
    Codeuser@Maria:~$ node --env-file=.env test.mjs You can use the Gemini API to build intelligent applications that automate tasks, personalize experiences, and provide instant insights. It can summarize complex information, answer questions, generate creative content, and even understand images and videos. This streamlines workflows, reduces manual effort, and offers on-demand assistance, making daily life significantly easier by saving time and improving decision-making.
    ```

## 📂Project Structure
```bash
/gemini_api_starter
│── test.mjs          # Main entry point containing the API logic (ES Modules)
│── .env              # Stores the API key (DO NOT COMMIT THIS FILE)
│── package.json      # Manages dependencies and project metadata
│── package-lock.json # Locks exact dependency versions (Auto-generated)
└── .gitignore        # Specifies files to be ignored by Git (e.g., node_modules)
```

## 📝 License
ISC