import { Heart, Users, MapPin, Sparkles, Globe } from "./Icons";

const highlights = [
  {
    icon: Users,
    title: "Direct Connection with Real Locals",
    description: "Every guide lives and breathes the destination. Connect directly, share your interests, and co-design a journey that feels personal and unforgettable.",
    color: "bg-pop-yellow",
  },
  {
    icon: Sparkles,
    title: "Authentic, Custom Experiences",
    description: "Creative, flexible experiences rooted in local insight - deep learning journeys tailored to your pace and passion.",
    color: "bg-pop-pink",
  },
  {
    icon: Heart,
    title: "Guide Empowerment & Sustainable Tourism",
    description: "We support guides to self-manage their offerings, maintain fair compensation, and build sustainable livelihoods. Local empowerment in action.",
    color: "bg-pop-turquoise",
  },
  {
    icon: MapPin,
    title: "Your Journey, Your Way",
    description: "From Tuscan vineyards to medieval architecture - shape every detail with someone who calls the place home.",
    color: "bg-pop-coral",
  },
  {
    icon: Globe,
    title: "Proven Quality, Personalised Support",
    description: "Years of on-the-ground experience with guides who deliver standout, five-star experiences. Confidence from first message to final step.",
    color: "bg-pop-purple",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="us-section" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-pop-pink/20 blob hidden lg:block" />
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-pop-yellow/20 blob hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-pop-coral text-white font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6">
            About Us
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">
            WHY <span className="text-pop-turquoise">OUT OF THE BOX</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A Local-Driven Portal Connecting Passionate Guides with Curious Travellers
          </p>
        </div>

        {/* Main Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-4xl p-8 md:p-10 shadow-pop-lg border-4 border-foreground">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-bold">Out of the Box.Tours</span> is the new adventure from Out of the Box Florence - born from years of experience in curating meaningful travel and working with exceptional local guides across Italy and beyond.
              </p>
              <p>
                We created this project with a simple but powerful purpose: <span className="text-pop-pink font-semibold">to bridge the gap between talented local guides and travellers who want authentic, personalised experiences.</span>
              </p>
              <p>
                Too many outstanding guides - custodians of deep cultural knowledge, hidden gems, and local stories - remain invisible to the people who would most value their insights. Meanwhile, travellers often find themselves stuck with generic tour options that follow the usual routes.
              </p>

              {/* Highlight Box */}
              <div className="bg-pop-yellow/20 rounded-2xl p-6 border-l-4 border-pop-yellow">
                <p className="text-foreground font-medium mb-2">
                  We are not a big corporation. We are not supported by hedge funds. We are based in Florence and our taxes are paid locally.
                </p>
                <p className="text-pop-pink font-display text-2xl">
                  One booking with us is a direct support to local communities.
                </p>
              </div>

              <p className="font-display text-3xl text-foreground text-center py-4">
                THIS IS HOW TOURISM <span className="text-pop-turquoise">SHOULD BE</span>
              </p>
            </div>
          </div>
        </div>

        {/* What Makes Us Stand Out */}
        <div className="mb-8">
          <h3 className="font-display text-3xl md:text-4xl text-foreground text-center mb-10">
            WHAT MAKES US <span className="text-pop-pink">STAND OUT</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`group rounded-3xl p-6 bg-card border-3 border-foreground shadow-pop hover:shadow-pop-lg transition-all duration-300 hover:-translate-y-2 ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <h4 className="font-display text-xl text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
