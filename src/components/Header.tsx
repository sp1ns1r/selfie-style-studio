
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';

interface HeaderProps {
  email?: string;
  showBackButton?: boolean;
}

export function Header({ email, showBackButton = false }: HeaderProps) {
  return (
    <header className="w-full border-b bg-white py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-studio-purple">
          Selfie Style Studio
        </Link>

        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link to="/" className="text-sm text-gray-600 flex items-center gap-1">
              <span>←</span> Back to Dashboard
            </Link>
          )}
          {email && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{email}</span>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
