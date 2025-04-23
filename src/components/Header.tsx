import { Link } from 'react-router-dom';
import { LogOut, ChevronLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  email?: string;
  showBackButton?: boolean;
}

export function Header({ email, showBackButton = false }: HeaderProps) {
  return (
    <header className="w-full border-b bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#6E41C0] to-[#3A7BD5] flex items-center justify-center text-white mr-2">
              <span role="img" aria-label="camera" className="opacity-80">🕹️</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">
              Portro
            </span>
          </Link>
          
          {showBackButton && (
            <Link 
              to="/" 
              className="text-sm text-gray-500 hover:text-gray-900 pl-4 border-l flex items-center gap-1 ml-2 transition-colors"
            >
              <ChevronLeft className="h-3 w-3" /> Back
            </Link>
          )}
        </div>

        {email && (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 border-r pr-4">
              <div className="h-7 w-7 rounded-full bg-gray-100 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <span>{email}</span>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
