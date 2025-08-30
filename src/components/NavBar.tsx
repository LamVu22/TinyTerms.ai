import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Home, Brain } from 'lucide-react';
import { topics } from '@/data/terms';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export const NavBar = () => {
  const location = useLocation();
  const [isTopicsOpen, setIsTopicsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Brain className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="brand-title text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            TinyTerms.ai
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-1">
          {/* Home */}
          <Button
            variant={isActive('/') ? 'secondary' : 'ghost'}
            asChild
            className="transition-smooth"
          >
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>

          {/* Topics Dropdown */}
          <DropdownMenu open={isTopicsOpen} onOpenChange={setIsTopicsOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className="transition-smooth data-[state=open]:bg-secondary"
              >
                Topics
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isTopicsOpen ? 'rotate-180' : ''}`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-56 bg-popover border shadow-lg"
            >
              {topics.map((topic) => (
                <DropdownMenuItem key={topic.id} asChild>
                  <Link 
                    to={`/topic/${topic.id}`}
                    className="flex items-center space-x-3 px-3 py-2 hover:bg-muted transition-fast cursor-pointer"
                    onClick={() => setIsTopicsOpen(false)}
                  >
                    <span className="text-lg">{topic.emoji}</span>
                    <div>
                      <div className="font-medium">{topic.name}</div>
                      <div className="text-xs text-muted-foreground">{topic.description}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};