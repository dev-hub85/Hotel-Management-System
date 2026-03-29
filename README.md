# 🏨 Hotel Management System

> A modern React-based hotel management web application with Firebase integration — featuring room booking, food services, attractions, and team management.

---

## 🌟 Features

- 🛏️ **Room Browsing** — View available rooms with images and details
- 🍽️ **Food & Dining** — Explore hotel restaurant and menu
- 🏛️ **Attractions** — Nearby attractions and activities
- 👥 **Team** — Meet the hotel staff and management
- 📞 **Contact** — Get in touch and make enquiries
- ℹ️ **About** — Hotel story and overview
- 🔥 **Firebase Integration** — Backend services via Firebase

---

## 📁 Project Structure

```
hotel-management-system/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── Assets/                     # All images (rooms, hotel, team, about)
│   ├── Components/
│   │   ├── home.jsx                # Landing / hero section
│   │   ├── room.jsx                # Room listings & details
│   │   ├── food.jsx                # Food & dining section
│   │   ├── atraction.jsx           # Nearby attractions
│   │   ├── about.jsx               # About the hotel
│   │   ├── contact.jsx             # Contact form
│   │   ├── services.jsx            # Hotel services
│   │   └── Navbar.jsx              # Navigation bar
│   ├── lib/                        # Third-party libraries
│   │   ├── animate/                # Animate.css
│   │   ├── owlcarousel/            # Owl Carousel slider
│   │   ├── tempusdominus/          # Date/time picker
│   │   ├── waypoints/              # Scroll waypoints
│   │   └── wow/                    # WOW.js scroll animations
│   ├── firebase.js                 # Firebase config & initialization
│   ├── App.js
│   ├── index.js
│   └── style.css
├── .env                            # 🔑 Firebase credentials (see below)
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 16+ |
| npm | 8+ |
| Firebase Account | [console.firebase.google.com](https://console.firebase.google.com) |

---

## 🔑 Firebase Setup — `.env` File Required

> ⚠️ **This project requires a `.env` file in the root directory to connect to Firebase. The app will not run without it.**

### Step 1 — Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add Project"** and follow the setup steps
3. In your project, go to **Project Settings → General**
4. Under **"Your apps"**, click the **`</>`** (Web) icon to register a web app
5. Copy your Firebase config credentials

### Step 2 — Create the `.env` File

Create a file named **`.env`** in the root of the project and add your Firebase credentials:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

> 🔒 **Never commit your `.env` file to version control.** It is already listed in `.gitignore`.

---

## 🚀 Getting Started

### Step 1 — Clone the Repository

```bash
git clone <repository-url>
cd hotel-management-system
```

### Step 2 — Install Dependencies

```bash
npm install
```

### Step 3 — Add Your `.env` File

Create the `.env` file in the root directory as described in the [Firebase Setup](#-firebase-setup--env-file-required) section above.

### Step 4 — Start the Development Server

```bash
npm start
```

> ✅ The app should now be running at **`http://localhost:3000`**

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI framework |
| Firebase | Backend services (DB, Auth, Hosting) |
| Bootstrap | Responsive styling |
| Owl Carousel | Image sliders & carousels |
| WOW.js + Animate.css | Scroll-triggered animations |
| Tempus Dominus | Date & time picker for bookings |
| jQuery | DOM utilities & plugin support |

---

## 🛠️ Troubleshooting

**App not connecting to Firebase?**
- Ensure your `.env` file exists in the root directory (not inside `src/`)
- All variable names must start with `REACT_APP_`
- Restart the dev server after creating or editing `.env`: `npm start`

**Styles or animations not loading?**
- Run `npm install` to ensure all dependencies are installed
- Check the browser console for any missing library errors

**Blank page on startup?**
- Verify your Firebase credentials in `.env` are correct
- Check the browser console for Firebase initialization errors
