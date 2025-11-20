import { Watch } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface WatchCardProps {
  watch: Watch;
}

const WatchCard = ({ watch }: WatchCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(watch);
    toast.success(`${watch.name} added to cart!`);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-secondary/30">
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-xl mb-2">{watch.name}</CardTitle>
        <CardDescription className="text-sm mb-4">{watch.description}</CardDescription>
        <p className="text-2xl font-bold text-accent">₹{watch.price.toLocaleString('en-IN')}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WatchCard;
