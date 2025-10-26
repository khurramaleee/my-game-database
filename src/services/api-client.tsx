// src/services/api-client.tsx

import axios from "axios";

// Use the env variable for the base URL.
// import.meta.env.VITE_API_BASE_URL will be "https://api.rawg.io/api" in production
// and (if you set up a .env.development file) "/api/api" in development.
// Or, you can just use the full URL for both.
const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://api.rawg.io/api';

export default axios.create({
  baseURL: baseURL,
  params: {
    // Use the env variable for your API key
    key: import.meta.env.VITE_API_KEY,
  },
});