// src/components/layout/DashboardLayout.tsx
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

type Props = {
  children?: ReactNode; // Esto es opcional si usas <Outlet />
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto p-4">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
