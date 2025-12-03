// Firebase Configuration
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// OpenAI Configuration
const OPENAI_CONFIG = {
  useUserApiKey: true,
  useCloudFunction: false,
  cloudFunctionUrl: ""
};

// Stripe Configuration
const STRIPE_CONFIG = {
  publishableKey: "pk_test_YOUR_KEY",
  plans: {
    free: { name: "Free", priceId: null, price: 0 },
    pro: { name: "Pro", priceId: "price_xxx", price: 29 },
    business: { name: "Business", priceId: "price_yyy", price: 99 }
  }
};

// App Configuration
const APP_CONFIG = {
  appName: "AI Chatbot Builder",
  supportEmail: "support@yourplatform.com",
  maxBotsPerUser: { free: 1, pro: 5, business: 999 },
  maxMessagesPerMonth: { free: 100, pro: 10000, business: 50000 }
};