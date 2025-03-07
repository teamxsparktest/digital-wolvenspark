
import { Instagram, Twitter, Youtube, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../utils/animationUtils';

const CareerSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollReveal(0.1);
  const { ref: socialRef, isVisible: socialVisible } = useScrollReveal(0.2);
  
  // Career achievements data
  const achievements = [
    { title: "A-Tier Tournaments", stats: "2 1st, 1 2nd, 3 Top3, 15 Total" },
    { title: "B-Tier Tournaments", stats: "1 1st, 1 2nd, 2 Top3, 38 Total" },
    { title: "BGIS 2024", stats: "Champions" },
    { title: "BMPS 2024", stats: "Champions" },
  ];
  
  // Timeline events
  const timelineEvents = [
    {
      date: "September 10, 2019",
      title: "Team Formation",
      description: "Revenant XSpark was created through the collaboration of Team XSpark and Revenant Esports."
    },
    {
      date: "May 20, 2020",
      title: "Leadership Change",
      description: "Sc0utOP (Tanmay Singh) joined as the team owner, bringing new direction to the organization."
    },
    {
      date: "2022-2024",
      title: "Rise to Dominance",
      description: "The team established itself as a powerhouse in the Indian BGMI scene with multiple tournament victories."
    }
  ];
  
  // Social media links
  const socialLinks = [
    { name: "Discord", icon: MessageSquare, url: "#", color: "bg-[#5865F2]/10 border-[#5865F2]/30 text-[#5865F2]" },
    { name: "Instagram", icon: Instagram, url: "#", color: "bg-[#E1306C]/10 border-[#E1306C]/30 text-[#E1306C]" },
    { name: "Twitter", icon: Twitter, url: "#", color: "bg-[#1DA1F2]/10 border-[#1DA1F2]/30 text-[#1DA1F2]" },
    { name: "YouTube", icon: Youtube, url: "#", color: "bg-[#FF0000]/10 border-[#FF0000]/30 text-[#FF0000]" },
  ];
  
  return (
    <section id="career" className="py-24 bg-revenant-dark">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Our Journey</span>
          </div>
          <h2 className="heading-lg">Career <span className="neon-text">Highlights</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={achievementsRef}
            className={`transform transition-all duration-700 delay-100 ${
              achievementsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 neon-text">Tournament Achievements</h3>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <h4 className="text-lg font-medium mb-2">{achievement.title}</h4>
                    <p className="text-gray-300">{achievement.stats}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-medium mb-1">Total Winnings</h4>
                    <p className="text-2xl font-bold yellow-neon-text">$236,467</p>
                  </div>
                  <div className="bg-revenant-yellow/10 px-4 py-2 rounded-lg border border-revenant-yellow/20">
                    <span className="text-revenant-yellow font-bold">CHAMPIONS</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6 neon-text">Team Timeline</h3>
              <div className="relative pl-8 border-l border-revenant-purple/30 space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-revenant-purple border-4 border-revenant-dark"></div>
                    <div className="mb-1 text-sm text-revenant-purple-light">{event.date}</div>
                    <h4 className="text-lg font-medium mb-1">{event.title}</h4>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="aspect-video overflow-hidden rounded-2xl mb-8 relative">
              <div className="absolute inset-0 bg-revenant-purple/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-lg">
                  <span className="sr-only">Play Video</span>
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
              <img 
                src="https://placehold.co/800x450/121212/AF4FFE?text=Team+Highlights&font=montserrat" 
                alt="Team Highlights" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              ref={socialRef}
              className={`glass-card p-8 transform transition-all duration-700 delay-300 ${
                socialVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-xl font-bold mb-6 neon-text">Connect With Us</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    className={`flex items-center gap-3 p-4 rounded-xl ${link.color} border hover:shadow-lg transition-all duration-300`}
                  >
                    <link.icon size={24} />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <div className="bg-revenant-darker p-6 rounded-xl border border-white/5">
                  <h4 className="text-lg font-bold mb-4">Team Leadership</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-revenant-purple">
                      <img 
                        src="https://placehold.co/100x100/121212/AF4FFE?text=S&font=montserrat" 
                        alt="Sc0utOP"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h5 className="font-medium neon-text">Sc0utOP</h5>
                      <p className="text-sm text-gray-300">Tanmay Singh - Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
