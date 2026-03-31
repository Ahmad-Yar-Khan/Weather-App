# React Weather Dashboard (API Integration Practice)

A full-stack weather application built to practice **REST API integration**, asynchronous data fetching, and connecting a React frontend with a Node.js backend.

## 🎯 Project Goal
The primary objective of this project was to master the "Request-Response" cycle between a client, a custom server, and a third-party weather service.

## 🚀 Features
* **Real-time Search:** Enter any city name to retrieve current weather data.
* **Dynamic Backgrounds:** UI updates based on weather conditions (e.g., Sunny, Cloudy, Rainy).
* **Secure API Handling:** Backend proxying to keep API keys hidden from the frontend.
* **Unit Conversions:** Displays temperature in Celsius/Fahrenheit with wind speed and humidity.

## 🛠️ Technical Stack
* **Frontend:** React.js, CSS3 (Flexbox/Grid), Axios.
* **Backend:** Node.js, Express.
* **External API:** OpenWeatherMap API.

---

## 🧠 Key Technical Learnings
Building this "basic" app helped me solidify several core web development concepts:

1. **Asynchronous JavaScript:** Using `async/await` with Axios to handle API calls and manage loading/error states.
2. **Backend Proxying:** Instead of calling the API from the browser, I routed requests through a Node.js server to prevent API key exposure in the network tab.
3. **State Management:** Using React `useState` and `useEffect` to trigger re-renders when the user searches for a new city.
4. **Environment Variables:** Implementing `.env` files to manage sensitive configuration data.

---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ahmad-Yar-Khan/weather-app-practice.git](https://github.com/Ahmad-Yar-Khan/weather-app-practice.git)
