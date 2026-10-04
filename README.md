# ⚡ GenWeb.ai — AI Website Builder

> Build modern, responsive websites from a simple natural-language prompt using AI.

GenWeb.ai is a full-stack AI-powered website builder that lets users describe a website in plain English and generate a complete responsive website automatically.

Users can generate websites, edit them through AI-powered iterations, save their projects, manage credits, purchase additional credits through Stripe, and publish generated websites through shareable URLs.

---

## 🌐 Live Demo

[GenWeb.ai](https://ai-website-builder-frontend-96ao.onrender.com)

---

## ✨ Features

### 🤖 AI Website Generation
- Generate complete websites from natural-language prompts
- AI-generated HTML, CSS and JavaScript
- Responsive layouts for mobile, tablet and desktop
- AI-generated animations and interactions
- Business-ready content without placeholder text
- Multi-section / SPA-style website output
- Automatic validation and JSON parsing of AI responses

### ✏️ AI-Powered Website Editing
- Edit an existing website using natural-language instructions
- AI receives the current website code and generates an updated version
- Preserve the existing project while applying requested changes
- Iterative website improvement through multiple prompts

### 🧑‍💻 Online Code Editor
- Integrated Monaco Editor
- View and work with generated website code
- Preview generated websites inside the application
- Live website rendering using iframe-based previews

### 👤 Authentication
- Google authentication using Firebase
- JWT-based backend authentication
- Protected application routes
- Secure authenticated API requests

### 💳 Credit-Based Usage
- Free plan with starter credits
- Credit deduction for website generation
- Separate credit cost for AI-powered updates
- Pro and Enterprise plans

### 💰 Stripe Payments
- Stripe Checkout integration
- Sandbox/test payment support
- Credit purchase flow
- Checkout session metadata for user, plan and credits
- Stripe webhook verification
- Automatic credit updates after successful checkout

### 🌍 Website Publishing
- Publish generated websites
- Generate unique website slugs
- Open published websites through shareable URLs
- Render generated HTML directly through a secure preview

### 📁 Project Management
- Save generated websites to the database
- View previously created websites
- Open projects for further editing
- Store AI conversation history for each website

### 🎨 Modern UI
- Responsive interface
- Tailwind CSS styling
- Motion-based animations and transitions
- Dark modern SaaS-style design
- Responsive layouts for different screen sizes

---

## 🧠 How It Works

```text
User Prompt
     │
     ▼
React Frontend
     │
     ▼
Node.js + Express API
     │
     ▼
OpenRouter API
     │
     ▼
DeepSeek Model
     │
     ▼
Structured AI Response
     │
     ▼
HTML/CSS/JS Website
     │
     ├──────────────► MongoDB
     │
     ▼
Live Preview
     │
     ▼
Edit / Update / Publish
```

### Payment Flow

```text
User selects plan
       │
       ▼
Backend creates Stripe Checkout Session
       │
       ▼
Stripe Checkout
       │
       ▼
Successful Payment
       │
       ▼
Stripe Webhook
       │
       ▼
Verify Webhook Signature
       │
       ▼
Update User Credits in MongoDB
```

---

## 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │      React UI       │
                         │   Vite + Tailwind   │
                         └──────────┬──────────┘
                                    │
                         Axios / API Requests
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │  Node.js + Express  │
                         │      REST APIs      │
                         └───────┬─────┬───────┘
                                 │     │
                  ┌──────────────┘     └──────────────┐
                  ▼                                     ▼
        ┌──────────────────┐                   ┌──────────────────┐
        │    MongoDB       │                   │   OpenRouter     │
        │    + Mongoose    │                   │    + DeepSeek    │
        └──────────────────┘                   └──────────────────┘
                  │
                  │
                  ▼
        ┌──────────────────┐
        │      Stripe      │
        │ Checkout + Hooks │
        └──────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Firebase Authentication
- Monaco Editor
- Motion
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- CORS
- Dotenv

### AI

- OpenRouter API
- DeepSeek model
- Prompt-based website generation
- Structured JSON response parsing

### Payments

- Stripe Checkout
- Stripe Webhooks
- Credit-based billing system

### Deployment

- Render
- MongoDB Atlas

---

## 📁 Project Structure

```text
ai-website-builder/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── firebase.js
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key

FRONTEND_URL=your_frontend_url

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

> Never commit your `.env` file or expose API keys, database credentials, Stripe secrets, or JWT secrets in a public repository.

---

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Minkal2908/ai-website-builder.git

cd ai-website-builder
```

### 2. Setup Backend

```bash
cd server
npm install
npm run dev
```

Backend will run on:

```text
http://localhost:8000
```

### 3. Setup Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 💳 Stripe Testing

The project uses Stripe Checkout in test/sandbox mode.

For local testing:

1. Create a Stripe Sandbox account
2. Create a test secret key
3. Configure the Stripe webhook endpoint
4. Add the webhook signing secret to `.env`
5. Use Stripe test payment details

### Webhook Endpoint

```text
POST /api/stripe/webhook
```

The webhook verifies the Stripe signature before processing successful checkout events.

---

## ⚙️ Credit System

The platform uses credits to control AI usage.

Example plans:

```text
Free       → 100 credits
Pro        → 500 credits
Enterprise → 1000 credits
```

Website generation consumes credits and AI-powered updates consume additional credits.

---

## 🔄 AI Generation Flow

```text
1. User enters website idea
              ↓
2. Frontend sends prompt to backend
              ↓
3. Backend checks authentication
              ↓
4. Backend checks available credits
              ↓
5. Prompt is sent to OpenRouter
              ↓
6. DeepSeek generates website code
              ↓
7. Backend parses structured response
              ↓
8. Website is stored in MongoDB
              ↓
9. Credits are deducted
              ↓
10. User is redirected to editor
```

---

## ✏️ AI Editing Flow

```text
Existing Website
      ↓
User enters change request
      ↓
Backend loads existing HTML
      ↓
AI receives current code + requested change
      ↓
AI generates updated HTML
      ↓
Updated code saved to MongoDB
      ↓
Credits deducted
      ↓
Updated preview shown to user
```

---

## 🗄️ Data Storage

MongoDB stores application data such as:

- User information
- Authentication-related data
- Credit balance
- Subscription/plan information
- Website projects
- Generated website code
- Website slugs
- AI conversation history

---

## 🔒 Security Considerations

- JWT-based authentication
- Protected backend routes
- Server-side authentication checks
- Stripe webhook signature verification
- Environment variables for secrets
- User-specific website access control
- MongoDB-backed persistent project ownership

---

## ☁️ Deployment

### Frontend

Deployed as a static frontend application on Render.

### Backend

Deployed as a Node.js web service on Render.

### Database

MongoDB Atlas is used for cloud database storage.

### Payment Processing

Stripe Sandbox is used for payment testing and webhook-based credit updates.

---

## 📸 Screenshots

### Home Page

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/9d70fb7b-1fe6-4755-a965-b6c59d18d270" />

<img width="1280" height="800" alt="Screenshot 2026-10-04 at 5 54 57 PM" src="https://github.com/user-attachments/assets/534deb98-795d-4e48-9712-257f39cbdae9" />

### Dashboard

<img width="1280" height="800" alt="Screenshot 2026-10-04 at 5 55 54 PM" src="https://github.com/user-attachments/assets/29e48c72-7afc-4afc-9998-8859c2231823" />

### AI Website Generation

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/5558ce38-4a4a-439f-9a94-bde86cc7869c" />

### Live Website Editor

<img width="1280" height="800" alt="Screenshot 2026-10-04 at 5 56 57 PM" src="https://github.com/user-attachments/assets/4f9d8ed6-e6df-4b2a-8f00-4cf2bfb02da5" />

### Generated Code

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/16ea9e26-6700-4685-b68b-c6d23c2c5f42" />

### Pricing & Checkout

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/4c1b5da0-a25b-4e79-b4c6-d5c8971783f2" />

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/5a19fd9e-18d0-4773-876e-41eaf94d27ff" />

### Published Website

<img width="1280" height="800" alt="image" src="https://github.com/user-attachments/assets/34b0b4c3-b0ff-497f-8fb6-6e0a60bf9b61" />

---

## 🎯 What This Project Demonstrates

- Full-stack MERN development
- REST API design
- Authentication and authorization
- AI API integration
- Prompt engineering
- AI-generated code processing
- MongoDB data modeling
- Credit-based SaaS architecture
- Payment gateway integration
- Stripe webhooks
- Frontend state management
- Online code editing
- Responsive UI development
- Cloud deployment
- Production configuration

---

## 🔮 Future Improvements

- Version history for website projects
- Website templates and reusable components
- Drag-and-drop visual editor
- Custom domains for published websites
- AI-assisted debugging
- AI image generation
- GitHub export
- Advanced project collaboration
- Usage analytics
- Team workspaces
- More payment/subscription options

---

## 👨‍💻 Author

**Minkal Kumar**

GitHub:  
https://github.com/Minkal2908

---

## 📄 License

This project is intended for educational and portfolio purposes.
