📸 Imagify – AI Image Generator Web App

Imagify is a full-stack AI image generation platform where users can generate images using prompts, manage their credits, purchase new credit plans using Stripe or Razorpay, and store all data securely in MongoDB.

This app allows users to:

🔐 Sign up & Login

✏️ Enter a prompt and generate an AI image

🖼️ Download generated images

💳 Buy credits using Stripe or Razorpay

📊 Store users & transactions in MongoDB

❄️ Smooth UI built with modern UI components

🚀 Features
⭐ 1. AI Image Generation

Users can generate images by entering simple prompts

Example: “snack with man”

High-quality images returned instantly

👤 2. Authentication

Login / Signup with email

Securely stores user data in MongoDB

JWT authentication

🪙 3. Credit System

New users get free credits

Each image generation reduces credits

Credits shown in the navbar:
⭐ Credits left: 2

💳 4. Payment Integration

Supports two payment gateways:

Razorpay (India)

Stripe (International)

Users can choose plans such as:

₹10 / 100 credits

₹50 / 500 credits

₹250 / 5000 credits

🔄 5. Full Payment Flow

User selects plan

Redirects to checkout

Payment success adds credits

Stored in MongoDB transactions collection

📂 6. MongoDB Storage

Database structure:

users → user profiles, credits

transactions → all payment logs

🖼️ Screenshots
🔹 Home Page

Shows prompt input + generated image
(Images you uploaded)

🔹 Login Modal

Secure login UI

🔹 Result Page

Generated image + download button

🔹 Credit Purchase Page

Shows all pricing plans

🔹 Stripe Checkout

Test mode enabled

🔹 MongoDB Transactions

Stores all payments with fields like:

{
  userID: "...",
  plan: "Basic",
  amount: 10,
  credits: 100,
  payment: true,
  date: ...
}

🛠️ Tech Stack
🎨 Frontend

React (Vite)

Tailwind CSS

Axios

⚙️ Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

🤖 AI Provider

OpenAI / Stability / Any model you integrated

💳 Payment Gateways

Stripe

Razorpay

📦 Installation
1️⃣ Clone the repo:
git clone https://github.com/your-username/imagify.git
cd imagify

2️⃣ Install dependencies:
npm install

3️⃣ Setup environment variables:

Create .env file:

MONGO_URI = your_mongo_link
JWT_SECRET = your_secret
STRIPE_SECRET = key
RAZORPAY_KEY_ID = key
RAZORPAY_KEY_SECRET = secret
AI_API_KEY = key

4️⃣ Run frontend:
npm run dev

5️⃣ Run backend:
node server.js

🧪 Test Payments
Stripe:

Use test card:

4242 4242 4242 4242

💬 Author

Shivam Kumar Tiwari
