import AboutHeroSection from '../components/about/AboutHeroSection';
import AboutSection from '../components/about/AboutSection';
import AboutVideo from '../components/about/AboutVideo';
import Features from '../components/features/Features';
import NewsLetter from '../components/newsLetter/NewsLetter';

const About = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-100 w-full h-auto"
      >
        <AboutHeroSection />
        <AboutSection />
        <AboutVideo />
        <Features />
        <br />
        <NewsLetter />
      </div>
    </>
  );
};

export default About;
