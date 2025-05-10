
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { FilePenLine, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-background border-b py-4 shadow-sm">
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-resume-primary flex items-center gap-2">
          <FilePenLine className="h-6 w-6" />
          ResumeBuilder
        </Link>
        <nav className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/builder">
            <Button variant="outline">Create Resume</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
