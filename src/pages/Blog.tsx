import BlogHeroSection from '../components/Blog/BlogHeroSection';
import BlogShowCase from '../components/Blog/BlogShowCase';
import NewsLetter from '../components/newsLetter/NewsLetter';

const Blog = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-100 w-full h-auto"
      >
        <BlogHeroSection />
        <BlogShowCase />
        <NewsLetter />
      </div>
    </>
  );
};

export default Blog;
