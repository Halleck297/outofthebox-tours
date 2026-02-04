import { Sparkles, Heart, Map, MessageCircle } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Tell Us Your Dream",
    description: "Share your interests, travel style, and must-sees",
    color: "bg-pop-yellow",
  },
  {
    icon: Map,
    title: "We Design It",
    description: "Our experts craft your perfect Italian journey",
    color: "bg-pop-pink",
  },
  {
    icon: Heart,
    title: "You Live It",
    description: "Experience Italy your way, with local guidance",
    color: "bg-pop-turquoise",
  },
];

const TailorMadeSection = () => {
  return (
    <section id="tailor-made" className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-pop-pink/20 blob hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pop-yellow/20 blob hidden lg:block" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pop-turquoise/10 blob hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-pop-yellow text-foreground font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            Create Your Adventure
          </span>
          <h2 className="font-display text-5xl md:text-7xl mb-4">
            TAILOR-MADE
            <span className="block text-pop-pink">EXPERIENCE</span>
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Can't find what you're looking for? Let us create a completely
            personalized Italian adventure just for you.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group">
              <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-pop group-hover:shadow-pop-lg transition-all duration-300 group-hover:-translate-y-2`}>
                <feature.icon className="w-10 h-10 text-foreground" />
              </div>
              <div className="text-pop-pink font-display text-6xl mb-2">0{index + 1}</div>
              <h3 className="font-display text-2xl mb-2">{feature.title}</h3>
              <p className="text-background/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-background text-foreground rounded-4xl p-8 md:p-12 shadow-pop-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-4xl mb-4">
                Ready to go <span className="text-pop-pink">OUT OF THE BOX</span>?
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill out our quick form and we'll get back to you within 24 hours
                with personalized recommendations.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pop-yellow rounded-full" />
                  Free consultation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pop-pink rounded-full" />
                  No commitment required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pop-turquoise rounded-full" />
                  100% personalized itinerary
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-6 py-4 rounded-full border-2 border-border focus:border-pop-pink outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your dream trip..."
                rows={4}
                className="w-full px-6 py-4 rounded-3xl border-2 border-border focus:border-pop-pink outline-none transition-colors resize-none"
              />
              <button className="w-full bg-pop-yellow text-foreground font-bold py-4 rounded-full shadow-pop hover:shadow-pop-lg hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide">
                Start My Adventure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailorMadeSection;
