# 🎮 GameHub - Video Game Discovery App

A sleek and responsive web application for discovering and searching for video games, built with **React**, **TypeScript**, and **Chakra UI**.

---

## 🚀 [View Live Demo](https://game-database-mu.vercel.app/)

---

## 🌟 Features

- **Dynamic Game Search:** Instantly search for any game in the RAWG API database.  
- **Smart Filtering:** Filter the game catalog by:
  - Genre (e.g., Action, RPG, Strategy)
  - Platform (e.g., PC, PlayStation, Xbox)
- **Powerful Sorting:** Sort games by various criteria, including:
  - Relevance
  - Popularity
  - Release Date
  - Average Rating
- **Sleek UI:** A modern, responsive interface built with Chakra UI.
- **Critic Scores:** See Metacritic scores at a glance, color-coded for quality.
- **Dark & Light Mode:** Seamlessly toggle between dark and light themes.
- **Loading & Skeletons:** Smooth user experience with skeleton loading screens while data is fetched.

---

## 💻 Tech Stack

This project showcases a modern frontend stack and best practices:

| Category | Technology |
|-----------|-------------|
| **Core** | React & TypeScript |
| **UI Library** | Chakra UI |
| **Data Fetching** | Axios |
| **State Management** | React Hooks (`useState`, `useContext`) |
| **Custom Hooks** | Encapsulated and reusable logic (`useData`, `useGames`) |
| **Build Tool** | Vite |
| **Deployment** | Vercel |

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone git@github.com:khurramaleee/game-database.git
cd game-database
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your API Key

- Sign up for a free API key at [rawg.io/apikey](https://rawg.io/apikey).  
- Create a `.env.local` file in the root of the project.  
- Add your API key to it (Vite requires the `VITE_` prefix):

```env
VITE_API_KEY="YOUR_API_KEY_HERE"
```

### 4. Update the API Client

Modify `src/services/api-client.tsx` to use your environment variable instead of a hard-coded key:

```tsx
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY, // Use the environment variable
  },
});
```

### 5. Run the development server

```bash
npm run dev
```

Your app will be available at [http://localhost:5173/](http://localhost:5173/).

---

## 🙏 Acknowledgements

- Powered by the **[RAWG Video Games Database API](https://rawg.io/apidocs)**.  
- Project structure and concepts are inspired by the **React course by Mosh Hamedani**.

---
