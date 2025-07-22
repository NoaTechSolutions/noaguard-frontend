# NoaGuard Frontend

Frontend web application for **NoaGuard**, a SaaS platform for managing daycare operations. This frontend is built with **React.js** and communicates with a Spring Boot backend using secure JWT authentication.

## 📦 Tech Stack

- React 18+
- React Router DOM
- Axios
- Tailwind CSS
- Vite
- ESLint + Prettier
- JWT Authentication (via `Authorization` header)
- LocalStorage for session management

## 📁 Project Structure

```
src/
│
├── api/             # Axios config and API service functions
├── auth/            # Authentication context and hooks
├── components/      # Reusable components (buttons, layout, etc.)
├── pages/           # Page views (Login, Dashboard, etc.)
├── routes/          # Protected & public route logic
├── utils/           # Helper functions
└── main.jsx         # App entry point
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NoaTechSolutions/noaguard-frontend.git
cd noaguard-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the root and set your backend URL:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

### 4. Run the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🔐 Authentication

JWT tokens are stored in `localStorage` for session persistence. On login, the token is saved and attached automatically to every request using Axios interceptors.

## ✅ Available Features

- Login for `SUPER_ADMIN` and `DAYCARE_ADMIN`
- JWT storage and header auth
- Protected routes with role-based access
- Responsive UI with Tailwind CSS

## 🧪 Coming Soon

- User management dashboard
- Student & Parent registration
- Attendance and calendar features

## 🤝 License

This project is licensed under the MIT License.