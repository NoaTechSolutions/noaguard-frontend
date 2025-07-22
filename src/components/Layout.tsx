import React, { type ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">NoaGuard</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Dashboard</a></li>
              <li><a href="#" className="hover:underline">Students</a></li>
              <li><a href="#" className="hover:underline">Parents</a></li>
              <li><a href="#" className="hover:underline">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-6">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
        &copy; 2025 NoaGuard - All rights reserved
      </footer>
    </div>
  );
};

export default Layout;
