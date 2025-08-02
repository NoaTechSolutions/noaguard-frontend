# NoaGuard Frontend

Frontend for **NoaGuard**, a modern web application for daycare management.

This project is built with:

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/) (manual dark mode enabled)
- 🧱 Custom dashboard components from [Meraki UI](https://merakiui.com/) and [Mamba UI](https://mambaui.com/)

---

## 🚀 Installation

```bash
# Clone the repo and go to the frontend folder
git clone https://github.com/NoaTechSolutions/noaguard-frontend.git
cd noaguard/frontend/noaguard-frontend

# Switch to development branch
git checkout dev

# Install dependencies
npm install
```

---

## 🧪 Local development

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂 Project structure

```bash
noaguard-frontend-app/
├── public/
├── src/
│   ├── assets/              # Images, logos
│   ├── components/
│   │   └── layout/          # Sidebar, Topbar, DashboardLayout
│   ├── pages/
│   │   └── dashboard/       # Dashboard pages
│   ├── App.tsx              # Main routes
│   ├── main.tsx             # Entry point
│   ├── index.css            # TailwindCSS imports
│   └── theme.ts             # Dark mode config (coming soon)
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## 🌙 Dark Mode

Manual dark mode is enabled using Tailwind's `class` strategy.  
We’ll soon add a theme toggle button in the `Topbar`.

---

## ✨ UI Credits

- [Meraki UI](https://merakiui.com/)
- [Mamba UI](https://mambaui.com/)
- [Heroicons](https://heroicons.com/)

---

## 📌 Recommendations

- Use **Visual Studio Code** with these extensions:
  - Tailwind CSS IntelliSense
  - Prettier
  - ESLint

- Recommended Node.js version: `v20.x` or later
- Recommended browsers: Chrome, Edge, Firefox

---

## 📤 Deployment (coming soon)

This project will be built using `vite build` and deployed in production.  
It will be integrated with a Spring Boot backend.

---

## 🛠 Author

**Israel Esparza**  
[NoaTech Solutions](https://noatechsolutions.com/)

---

## 🏷 License

MIT