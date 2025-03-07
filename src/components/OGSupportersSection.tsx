
import { useScrollReveal } from '../utils/animationUtils';
import { Heart, Quote } from 'lucide-react';

const OGSupportersSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  // Sample supporter testimonials
  const testimonials = [
    {
      id: 1,
      name: "Rohan Sharma",
      image: "https://placehold.co/100x100/121212/AF4FFE?text=RS&font=montserrat",
      location: "Mumbai, India",
      since: "2019",
      quote: "Been following RXS since day one. The dedication and passion they bring to every match keeps me coming back. True champions!"
    },
    {
      id: 2,
      name: "Priya Patel",
      image: "https://placehold.co/100x100/121212/AF4FFE?text=PP&font=montserrat",
      location: "Delhi, India",
      since: "2020",
      quote: "The way they came back in BGIS finals was incredible. I've never missed watching a single match since joining the fandom!"
    },
    {
      id: 3,
      name: "Amit Kumar",
      image: "https://placehold.co/100x100/121212/AF4FFE?text=AK&font=montserrat",
      location: "Bangalore, India",
      since: "2021",
      quote: "The community RXS has built is so welcoming. Meeting fellow fans at events feels like meeting family. #wolvenspark forever!"
    },
    {
      id: 4,
      name: "Divya Singh",
      image: "https://placehold.co/100x100/121212/AF4FFE?text=DS&font=montserrat",
      location: "Kolkata, India",
      since: "2019",
      quote: "I remember watching their first tournament together. The growth they've shown is phenomenal. So proud to be an OG supporter!"
    }
  ];
  
  // Fan art showcase (placeholder data)
  const fanArt = [
    { id: 1, image: "https://placehold.co/300x300/121212/AF4FFE?text=FanArt1&font=montserrat", artist: "Vikram_Art" },
    { id: 2, image: "https://placehold.co/300x300/121212/FFF700?text=FanArt2&font=montserrat", artist: "CreativeMind22" },
    { id: 3, image: "https://placehold.co/300x300/121212/AF4FFE?text=FanArt3&font=montserrat", artist: "GamerDesign" },
    { id: 4, image: "https://placehold.co/300x300/121212/FFF700?text=FanArt4&font=montserrat", artist: "DigitalCanvas" },
  ];
  
  return (
    <section id="supporters" className="py-24 bg-revenant-dark">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Fan Community</span>
          </div>
          <h2 className="heading-lg">OG <span className="neon-text">Supporters</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Our loyal fans who have been with us through thick and thin. The backbone of our community.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 neon-text text-center">Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="glass-card p-6 relative">
                  <Quote className="absolute top-6 right-6 text-revenant-purple/20" size={40} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-revenant-purple/30">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.location}</p>
                      <p className="text-xs text-revenant-purple-light flex items-center gap-1 mt-1">
                        <Heart size={12} className="fill-revenant-purple text-revenant-purple" />
                        Supporter since {testimonial.since}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-8 neon-text text-center">Fan Art Showcase</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {fanArt.map((art) => (
                <div key={art.id} className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={art.image} 
                      alt={`Fan art by ${art.artist}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="text-sm font-medium">@{art.artist}</p>
                    <button className="text-revenant-purple hover:text-revenant-purple-light transition-colors">
                      <Heart size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Show your love and get featured in our fan art showcase.</p>
              <button className="px-6 py-3 rounded-lg bg-revenant-purple hover:bg-revenant-purple-dark text-white font-medium transition-all duration-300 neon-glow hover:shadow-[0_0_20px_rgba(175,79,254,0.5),0_0_40px_rgba(175,79,254,0.2)]">
                Submit Your Artwork
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OGSupportersSection;
