import ContactForm from '../components/contact/ContactForm';
import ContactHeroSection from '../components/contact/ContactHeroSection';
import ContactSection from '../components/contact/ContactSection';

const Contact = () => {
  return (
    <>
      <div
        style={{ fontFamily: 'Roboto Slab', fontWeight: 400 }}
        className="bg-slate-100 w-full h-auto"
      >
        <ContactHeroSection />
        <ContactSection />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
