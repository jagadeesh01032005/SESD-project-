import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import WatchCard from '@/components/WatchCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { watches } from '@/data/watches';
import heroWatch from '@/assets/hero-watch.jpg';

const Home = () => {
  const featuredWatches = watches.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroWatch} 
          alt="Featured Watch" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 z-20 relative">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Timeless <span className="text-accent">Elegance</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our curated collection of luxury timepieces that define sophistication
            </p>
            <Link to="/collection">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground text-lg">
              Handpicked timepieces that embody luxury and precision
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredWatches.map(watch => (
              <WatchCard key={watch.id} watch={watch} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/collection">
              <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                View All Watches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Watchify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
