import { ArrowRight, Calendar } from "./Icons";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  color: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "10 Hidden Gems in Florence Even Locals Don't Know",
    excerpt: "Discover secret spots, quiet piazzas, and authentic trattorias away from the crowds.",
    date: "Jan 15, 2026",
    category: "Travel Tips",
    color: "bg-pop-yellow",
  },
  {
    title: "The Art of Slow Travel: Why Less is More",
    excerpt: "How taking your time in one region beats rushing through ten cities.",
    date: "Jan 10, 2026",
    category: "Philosophy",
    color: "bg-pop-pink",
  },
  {
    title: "Tuscan Wine Guide: Beyond Chianti",
    excerpt: "Explore Brunello, Vino Nobile, and lesser-known varietals from hidden wineries.",
    date: "Jan 5, 2026",
    category: "Food & Wine",
    color: "bg-pop-turquoise",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="group bg-card rounded-3xl overflow-hidden shadow-pop hover:shadow-pop-lg transition-all duration-300 hover:-translate-y-2">
      {/* Category Banner */}
      <div className={`${post.color} px-6 py-3`}>
        <span className="font-bold text-foreground uppercase tracking-wider text-sm">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{post.date}</span>
        </div>

        <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-pop-pink transition-colors leading-tight">
          {post.title}
        </h3>

        <p className="text-muted-foreground mb-6 line-clamp-2">
          {post.excerpt}
        </p>

        <a
          href="#blog"
          className="inline-flex items-center gap-2 text-foreground font-bold hover:text-pop-pink transition-colors group/link"
        >
          Read More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
        </a>
      </div>
    </article>
  );
};

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-pop-coral/30 blob hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-pop-purple/20 blob hidden lg:block" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="inline-block bg-pop-coral text-white font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-6">
              Stories & Tips
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-foreground">
              FROM THE <span className="text-pop-pink">BLOG</span>
            </h2>
          </div>
          <a
            href="#blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-foreground font-bold hover:text-pop-pink transition-colors group"
          >
            View All Posts
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
