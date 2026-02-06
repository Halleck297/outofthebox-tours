import heroImage from "../assets/hero-tuscany.jpg";

const HeroSection = () => {
  return (
    <section id="us" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          alt="Beautiful Tuscan landscape at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-32 right-10 w-64 h-64 bg-pop-yellow/40 blob blob-animate hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-pop-pink/40 blob blob-animate hidden lg:block" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slide-up">
            <span className="inline-block bg-pop-pink text-white font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6">
              Authentic Italian Experiences
            </span>
          </div>

          <h1 className="font-accent text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 animate-slide-up delay-100 leading-none">
            TRAVEL
            <span className="block text-pop-yellow text-stroke-dark">OUTSIDE</span>
            THE BOX
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-xl mx-auto animate-slide-up delay-200 font-medium">
            Discover Italy through the eyes of passionate locals.
            Unforgettable tours, authentic connections, unique adventures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300 justify-center">
            <a
              href="#tours"
              className="font-accent bg-pop-yellow text-foreground font-bold px-8 py-4 rounded-full shadow-pop hover:shadow-pop-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-center text-lg"
            >
              Explore Tours
            </a>
            <a
              href="#tailor-made"
              className="font-accent bg-pop-turquoise text-white font-bold px-8 py-4 rounded-full shadow-pop-yellow hover:shadow-pop-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide text-center text-lg"
            >
              Customize Yours
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-8 h-12 border-3 border-foreground rounded-full flex items-start justify-center pt-2">
          <div className="w-2 h-3 bg-pop-pink rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
