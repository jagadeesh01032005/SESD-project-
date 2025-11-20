import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Watch, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const user = localStorage.getItem('watchify-user');

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSignOut = () => {
    localStorage.removeItem('watchify-user');
    navigate('/signin');
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Watch className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
            <div>
              <span className="text-2xl font-bold tracking-tight">Watchify</span>
              <p className="text-xs text-muted-foreground">Timeless Style</p>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/collection" className="text-sm font-medium hover:text-accent transition-colors">
              Collection
            </Link>
            
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {JSON.parse(user).name}
                </span>
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/signin">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
            )}

            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 transition-colors group-hover:text-accent" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
