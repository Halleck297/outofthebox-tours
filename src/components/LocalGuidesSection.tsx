import guide1 from "../assets/guide-1.jpg";
import guide2 from "../assets/guide-2.jpg";
import guide3 from "../assets/guide-3.jpg";

interface Guide {
  name: string;
  role: string;
  region: string;
  image: ImageMetadata;
  accentColor: string;
}

const guides: Guide[] = [
  { name: "Sofia", role: "Cultural Expert", region: "Tuscany", image: guide1, accentColor: "bg-pop-turquoise" },
  { name: "Marco", role: "Food & Wine", region: "Emilia-Romagna", image: guide2, accentColor: "bg-pop-yellow" },
  { name: "Giulia", role: "Adventure Guide", region: "Cinque Terre", image: guide3, accentColor: "bg-pop-pink" },
  { name: "Luca", role: "Art Historian", region: "Florence", image: guide1, accentColor: "bg-pop-coral" },
  { name: "Elena", role: "Wine Sommelier", region: "Chianti", image: guide2, accentColor: "bg-pop-purple" },
  { name: "Alessandro", role: "Bike Expert", region: "Umbria", image: guide3, accentColor: "bg-pop-orange" },
  { name: "Francesca", role: "Chef & Cook", region: "Bologna", image: guide1, accentColor: "bg-pop-teal" },
  { name: "Giovanni", role: "History Buff", region: "Rome", image: guide2, accentColor: "bg-pop-turquoise" },
  { name: "Chiara", role: "Nature Guide", region: "Dolomites", image: guide3, accentColor: "bg-pop-yellow" },
  { name: "Matteo", role: "Photography Pro", region: "Venice", image: guide1, accentColor: "bg-pop-pink" },
  { name: "Valentina", role: "Local Foodie", region: "Naples", image: guide2, accentColor: "bg-pop-coral" },
  { name: "Roberto", role: "Truffle Hunter", region: "Piedmont", image: guide3, accentColor: "bg-pop-purple" },
];

const GuideCard = ({ guide }: { guide: Guide }) => {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-xl overflow-hidden shadow-pop hover:shadow-pop-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2 border-foreground">
        {/* Photo Section */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={guide.image.src}
            alt={guide.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute top-2 right-2 ${guide.accentColor} w-5 h-5 rounded-full border-2 border-white`} />
        </div>

        {/* Colored Info Section */}
        <div className={`${guide.accentColor} p-3`}>
          <h4 className="font-display text-lg text-foreground leading-tight">{guide.name}</h4>
          <p className="text-xs text-foreground/80 font-medium uppercase tracking-wide">{guide.role}</p>
          <span className="inline-block mt-1 bg-white/90 text-foreground text-xs font-bold px-2 py-0.5 rounded-full">
            {guide.region}
          </span>
        </div>
      </div>
    </div>
  );
};

const LocalGuidesSection = () => {
  return (
    <section id="guides" className="py-16 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-pop-yellow/30 blob hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-pop-pink/30 blob hidden lg:block" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-pop-turquoise text-white font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4">
            Meet Our Team
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-3">
            LOCAL <span className="text-pop-pink">GUIDES</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Passionate locals who'll show you the real Italy.
          </p>
        </div>

        {/* Guides Grid - 4 columns with colored info sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {guides.map((guide) => (
            <GuideCard key={guide.name} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalGuidesSection;
