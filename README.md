# 🤖 Personal AI Assistant - Rudolph Scott

> **A React + Express + OpenAI application that creates a personalized AI assistant representing Rudolph Scott. Visitors can chat with an AI version trained on his resume and personal summary.**

## 🎯 What This Project Does

This is a **personal AI website** that allows visitors to have natural conversations with an AI version of Rudolph Scott. The AI has been trained on his actual resume and personal summary, so it can answer questions about his career, experience, and achievements as if it were him.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🗣️ **AI Chat Interface** | Natural conversations with an AI version of Rudolph |
| 📄 **Resume Integration** | AI knows specific metrics and achievements from PDF resume |
| 👨‍👩‍👧‍👦 **Personal Summary** | AI includes personal details and family information |
| 📊 **Professional Metrics** | Displays specific KPIs and percentages (30%→90% automation, 20% regression reduction, etc.) |
| ✅ **No Fabrication** | AI only uses provided information, no made-up details |

## 🏗️ How It Works

### 🖥️ Frontend (React + Vite)
- **React app** running on `http://localhost:5175/`
- **Three main tabs:**
  1. 📄 **Resume** - Displays PDF resume content
  2. 🤖 **Chat with AI Version of myself** - The AI chat interface
  3. 📚 **Related Resources** - Additional information

### ⚙️ Backend (Express)
- **Express server** running on `http://localhost:3001/`
- **API endpoints:**
  - 🗣️ `/api/chat` - Handles OpenAI chat requests
  - 📄 `/api/pdf-text` - Extracts text from PDF resume
  - 👤 `/api/summary` - Serves personal summary
  - 📖 `/api/readme` - Serves project documentation

## 🤖 What the AI Knows

The AI has been trained on Rudolph's actual data and can discuss:

### 💼 Professional Background
- **Role**: Sr. Manager, Software Quality Engineering
- **Experience**: 25+ years in quality engineering
- **Current**: ServiceNow (Jul 2019 – Present)

### 📊 Specific Achievements & Metrics
| Metric | Achievement |
|--------|-------------|
| 🚀 **Automation Coverage** | 30% → 90% |
| ⏱️ **Regression Cycle Time** | 10 days → 5 days |
| 🐛 **Customer Regressions** | 20% reduction |
| 🔧 **Flakiness** | 30% reduction |
| ♿ **WCAG Compliance** | 95% |
| 📈 **Throughput** | 25% increase |

### 👨‍👩‍👧‍👦 Personal Details
- **Family**: Wife Jessika (teacher), daughter Khelani (8), son (12), dog Max (cavapoo)
- **Education**: B.S. Computer Science, San Diego State University (2004)
- **Location**: San Diego, CA

### 🏢 Companies & Industries
**ServiceNow** → **GoFundMe** → **Xifin** → **DivX** → **Intuit** → **Leadfusion** → **ID Analytics** → **ActiveNetwork** → **Digital Deluxe Studio**

## 🌐 Live Demo

🔗 **Live Site**: [https://rjscott619.github.io/rj-portfolio/](https://rjscott619.github.io/rj-portfolio/)

## 🚀 Quick Start

### 📋 Prerequisites
- **Node.js** and npm installed
- **OpenAI API key** in environment variables
- **poppler** installed for PDF parsing (`brew install poppler` on macOS)

### ⚡ Setup Steps

#### 1️⃣ Start the Backend Server
```bash
cd server
npm install
npm run dev            # runs on http://localhost:3001
```

#### 2️⃣ Start the Frontend Client
```bash
cd client
npm install
npm run dev            # opens http://localhost:5173
```

#### 3️⃣ Alternative: Run Both (Optional)
```bash
cd ..
npm install
npm run dev
```

### 🎯 How to Use
1. **Open** `http://localhost:5173/` in your browser
2. **Click** "Chat with AI Version of myself" tab
3. **Type** a question and click **Send**
4. **Watch** the AI respond as Rudolph Scott!

## 📤 Deploy to GitHub Pages

To deploy your site to GitHub Pages:

```bash
cd client
npm run deploy
```

This will:
1. Build the production version of your app
2. Deploy to the `gh-pages` branch
3. Make your site available at `https://YOUR_USERNAME.github.io/rj-portfolio/`

## 💬 Example Questions to Ask

Try asking the AI these questions:

### 🏢 Professional Questions
- *"What KPIs do you track?"*
- *"Tell me about your work at ServiceNow"*
- *"What's your experience with automation?"*
- *"How did you improve automation coverage from 30% to 90%?"*

### 👨‍👩‍👧‍👦 Personal Questions
- *"Tell me about your family"*
- *"What's your educational background?"*
- *"Where did you go to school?"*

### 🏢 Company Questions
- *"What companies have you worked for?"*
- *"Tell me about your experience at GoFundMe"*
- *"What industries have you worked in?"*

## 📁 Project Structure

```
my-react-express-app/
├── 📁 client/                 # React frontend
│   ├── src/App.jsx            # Main React component
│   └── src/features/profile/  # Personal data
├── 📁 server/                 # Express backend
│   ├── index.js              # API endpoints
│   └── assets/               # Resume PDF
└── 📄 README.md              # This file
```

## 🛠️ Technical Stack

### 🖥️ Frontend
- **React** - UI framework
- **Vite** - Build tool
- **Modern JavaScript** - ES6+ features

### ⚙️ Backend
- **Express.js** - Web server
- **OpenAI API** - AI chat functionality
- **pdf-text-extract** - PDF parsing
- **poppler** - System dependency for PDF parsing

## 🎯 Perfect For

| Use Case | Description |
|----------|-------------|
| 🌐 **Personal Website** | Showcase AI expertise and technical skills |
| 👔 **Recruiter Interactions** | Let recruiters ask questions about experience |
| 💼 **Portfolio Demo** | Demonstrate React, Express, and AI integration |
| 🤖 **AI/ML Project** | Show OpenAI API integration and prompt engineering |

## 🔧 Development Features

- ✅ **PDF parsing** using `pdf-text-extract` library
- ✅ **OpenAI GPT-4 integration** for natural conversations
- ✅ **Automatic data loading** - resume and summary load on startup
- ✅ **Clean formatting** - no Markdown symbols in responses
- ✅ **Professional persona** - AI acts as Rudolph with specific metrics
- ✅ **README display** - View project documentation in the chat interface
