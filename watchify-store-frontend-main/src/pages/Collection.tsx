import Navbar from '@/components/Navbar';
import WatchCard from '@/components/WatchCard';
import { watches } from '@/data/watches';

const Collection = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-muted-foreground text-lg">
            Explore our complete range of luxury timepieces
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map(watch => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
