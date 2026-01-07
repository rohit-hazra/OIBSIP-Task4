# OIBSIP-Task4
# 🔐 Login Authentication System

A modern Login & Registration Authentication System built using HTML, CSS, and JavaScript.
Users can sign up, log in securely, and access a protected learning dashboard only after authentication.

This project demonstrates client-side authentication flow, clean UI design, and structured front-end logic.

## ✨ Features

✅ User Registration with validation

✅ Strong password rules enforcement

✅ Login authentication using localStorage

✅ Secured dashboard access

✅ Logout functionality

✅ Responsive & modern UI

✅ Password show/hide toggle 👁

✅ Smooth tab switching animations


## 🧠 How Authentication Works

1. User Registration

    - User enters name, email, and password

    - Password strength is validated

    - User data is stored in localStorage

2. Login

    - Entered credentials are matched with stored data

    - On success, an auth flag is saved in localStorage

    - Protected Dashboard

    - Dashboard checks authentication on page load

    - Unauthorized users are redirected to login page

3. Logout

    - Clears authentication state

    - Redirects back to login page

## 📂 Project Structure
```
📁 learning-portal-auth
│
├── index.html        # Login & Registration UI
├── styles.css        # Authentication page styling
├── script.js         # Login & Register logic
│
├── dashboard.html    # Secured dashboard page
├── dashboard.css     # Dashboard styling
│
└── README.md         # Project documentation
```

## 🖥️ Technologies Used

- 🌐 HTML5 – Structure

- 🎨 CSS3 – Styling & responsiveness

- ⚙️ JavaScript (ES6) – Authentication logic

- 💾 LocalStorage API – Session simulation


## 🎯 Learning Outcomes

- Understand authentication flow

- Work with localStorage

- Build protected routes

- Improve UI/UX design

- Write clean front-end logic
