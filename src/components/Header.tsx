
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">NoaGuard</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/daycares" className="hover:underline">Daycares</Link>
          <Link to="/students" className="hover:underline">Students</Link>
        </div>
      </nav>
    </header>
  );
}
