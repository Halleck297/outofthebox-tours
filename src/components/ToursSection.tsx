import { useState } from "react";
import tour1 from "../assets/tour-1.jpg";
import tour2 from "../assets/tour-2.jpg";
import tour3 from "../assets/tour-3.jpg";
import { Clock, Users, Star, MapPin, ChevronDown, ChevronUp } from "./Icons";

interface Tour {
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  rating: number;
  price: string;
  image: ImageMetadata;
  accentColor: string;
}

const allTours: Tour[] = [
  { title: "Hidden Streets & Local Stories", location: "Florence", duration: "4h", groupSize: "Max 8", rating: 4.9, price: "€89", image: tour1, accentColor: "bg-pop-yellow" },
  { title: "Food & Wine Tasting Journey", location: "Chianti", duration: "Full day", groupSize: "Max 6", rating: 5.0, price: "€149", image: tour2, accentColor: "bg-pop-pink" },
  { title: "Art & Architecture Deep Dive", location: "Siena", duration: "6h", groupSize: "Max 10", rating: 4.8, price: "€119", image: tour3, accentColor: "bg-pop-turquoise" },
  { title: "Truffle Hunting Adventure", location: "Umbria", duration: "5h", groupSize: "Max 6", rating: 4.9, price: "€135", image: tour1, accentColor: "bg-pop-coral" },
  { title: "Gravel Bike Exploration", location: "Val d'Orcia", duration: "Full day", groupSize: "Max 8", rating: 4.7, price: "€159", image: tour2, accentColor: "bg-pop-purple" },
  { title: "Medieval Village Walk", location: "San Gimignano", duration: "3h", groupSize: "Max 12", rating: 4.8, price: "€69", image: tour3, accentColor: "bg-pop-orange" },
  { title: "Sunset Wine Trekking", location: "Montalcino", duration: "4h", groupSize: "Max 8", rating: 5.0, price: "€125", image: tour1, accentColor: "bg-pop-teal" },
  { title: "Artisan Workshop Tour", location: "Florence", duration: "3h", groupSize: "Max 6", rating: 4.9, price: "€95", image: tour2, accentColor: "bg-pop-yellow" },
  { title: "Coastal Path Discovery", location: "Cinque Terre", duration: "Full day", groupSize: "Max 10", rating: 4.8, price: "€145", image: tour3, accentColor: "bg-pop-pink" },
  { title: "Secret Gardens Tour", location: "Lucca", duration: "3h", groupSize: "Max 8", rating: 4.7, price: "€79", image: tour1, accentColor: "bg-pop-turquoise" },
  { title: "Olive Oil Experience", location: "Tuscany Hills", duration: "4h", groupSize: "Max 8", rating: 4.9, price: "€99", image: tour2, accentColor: "bg-pop-coral" },
  { title: "Photography Walk", location: "Venice", duration: "5h", groupSize: "Max 6", rating: 5.0, price: "€139", image: tour3, accentColor: "bg-pop-purple" },
];

const TourCard = ({ tour }: { tour: Tour }) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden border-2 border-foreground shadow-pop hover:shadow-pop-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <img
          src={tour.image.src}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-2 left-2 ${tour.accentColor} text-foreground font-bold px-3 py-1 rounded-full text-xs`}>
          {tour.price}
        </div>
        <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm text-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-pop-yellow text-pop-yellow" />
          <span className="font-bold text-xs">{tour.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
          <MapPin className="w-3 h-3" />
          <span>{tour.location}</span>
        </div>

        <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-pop-pink transition-colors leading-tight">
          {tour.title}
        </h3>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{tour.groupSize}</span>
          </div>
        </div>

        <a
          href="#tailor-made"
          className={`block text-center ${tour.accentColor} text-foreground font-bold py-2 rounded-full hover:shadow-pop transition-all duration-300 uppercase tracking-wide text-xs`}
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

const ToursSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTours = showAll ? allTours : allTours.slice(0, 8);

  return (
    <section id="tours" className="py-16 bg-pop-yellow/10 relative overflow-hidden">
      {/* Decorative Wave Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V0H0V30Z"
            fill="var(--color-background)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-pop-pink text-white font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4">
            Our Experiences
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-3">
            DISCOVER <span className="text-pop-turquoise">TOURS</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Carefully curated experiences that go beyond the ordinary.
          </p>
        </div>

        {/* Tours Grid - 8 tours initially, 4 per row on large screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedTours.map((tour, index) => (
            <TourCard key={`${tour.title}-${index}`} tour={tour} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-foreground text-background font-bold px-6 py-3 rounded-full hover:bg-pop-pink hover:text-white transition-all duration-300 uppercase tracking-wide text-sm"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View All Tours <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
