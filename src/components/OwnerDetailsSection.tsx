
import { Facebook, Instagram, Twitter, Youtube, Twitch } from 'lucide-react';
import { useScrollReveal } from '../utils/animationUtils';

const OwnerDetailsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal(0.1);
  const { ref: historyRef, isVisible: historyVisible } = useScrollReveal(0.2);
  const { ref: awardsRef, isVisible: awardsVisible } = useScrollReveal(0.3);
  
  // Social media links
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", color: "bg-[#1877F2]/10 border-[#1877F2]/30 text-[#1877F2]" },
    { name: "Instagram", icon: Instagram, url: "#", color: "bg-[#E1306C]/10 border-[#E1306C]/30 text-[#E1306C]" },
    { name: "Twitter", icon: Twitter, url: "#", color: "bg-[#1DA1F2]/10 border-[#1DA1F2]/30 text-[#1DA1F2]" },
    { name: "YouTube", icon: Youtube, url: "#", color: "bg-[#FF0000]/10 border-[#FF0000]/30 text-[#FF0000]" },
    { name: "Twitch", icon: Twitch, url: "#", color: "bg-[#6441A4]/10 border-[#6441A4]/30 text-[#6441A4]" },
  ];
  
  // Team history data
  const teamHistory = [
    { joinDate: "2019-??-??", leaveDate: "2019-03-04", team: "GodLike Esports", notes: "" },
    { joinDate: "2019-03-04", leaveDate: "2019-08-05", team: "TeamIND", notes: "" },
    { joinDate: "2019-08-05", leaveDate: "2019-09-10", team: "Team SouL", notes: "" },
    { joinDate: "2019-09-10", leaveDate: "2019-10-18", team: "Xspark", notes: "Reference: Instagram post" },
    { joinDate: "2019-10-18", leaveDate: "2020-07-02", team: "Fnatic", notes: "Reference: Instagram post" },
    { joinDate: "2020-07-02", leaveDate: "2020-08-10", team: "Fnatic (Ia.)", notes: "Reference: Instagram post" },
    { joinDate: "2020-07-02", leaveDate: "2020-08-10", team: "Orange Rock (L.)", notes: "Reference: Instagram post" },
    { joinDate: "2020-08-10", leaveDate: "2020-12-04", team: "Fnatic", notes: "Reference: Instagram post" },
    { joinDate: "2021-07-07", leaveDate: "2021-10-17", team: "Team SouL", notes: "Reference: YouTube video" },
    { joinDate: "2021-10-17", leaveDate: "2024-01-08", team: "TeamXSpark", notes: "Reference: YouTube clip" },
    { joinDate: "2024-01-08", leaveDate: "2024-12-07", team: "Team Zero", notes: "Reference: Tournament source (Bingo Nachos/GAMEON CUP), no formal announcement" },
    { joinDate: "2024-12-07", leaveDate: "Present", team: "Wyld Fangs", notes: "Reference: Instagram post" },
  ];
  
  // Awards data
  const awards = [
    { 
      date: "2023-07-01", 
      tier: "C-Tier", 
      tournament: "Lidoma Battleground Invitational", 
      award: "Fan favourite Player", 
      team: "TeamXSpark", 
      prize: "$183"
    },
    { 
      date: "2022-08-20", 
      tier: "Showmatch", 
      tournament: "PUBG Mobile World Invitational 2022: Afterparty Showdown", 
      award: "Fan Favourite Player", 
      team: "7Sea Esports (Indian team)", 
      prize: "$10,000"
    },
    { 
      date: "2021-09-12", 
      tier: "A-Tier", 
      tournament: "Skyesports Championship 3.0", 
      award: "Best Clutch (Fan Vote)", 
      team: "Team SouL", 
      prize: "$680"
    },
  ];
  
  const formatDate = (dateString: string) => {
    if (dateString === "Present" || dateString.includes("??")) return dateString;
    return dateString;
  };
  
  return (
    <section id="owner" className="py-24 bg-gradient-to-b from-revenant-darker to-revenant-dark">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Team Owner</span>
          </div>
          <h2 className="heading-lg">Meet <span className="neon-text">Sc0utOP</span></h2>
        </div>
        
        <div 
          ref={infoRef}
          className={`glass-card p-8 mb-12 transform transition-all duration-700 delay-100 ${
            infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="rounded-xl overflow-hidden border-2 border-revenant-purple/30 neon-glow">
                <img 
                  src="https://placehold.co/400x500/121212/AF4FFE?text=Sc0utOP&font=montserrat" 
                  alt="Sc0utOP" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 neon-text">Tanmay "Sc0utOP" Singh</h3>
              <p className="text-gray-300 mb-6">The driving force behind Revenant XSpark</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Full Name</h4>
                    <p className="text-lg">Tanmay Singh</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-400">Born</h4>
                    <p className="text-lg">July 30, 1996 (age 28)</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-400">Nationality</h4>
                    <p className="text-lg">Indian</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-400">Current Team</h4>
                    <p className="text-lg">Wyld Fangs</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-400">Roles</h4>
                    <p className="text-lg">Scouter, Flanker, Assaulter</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm text-gray-400">Total Winnings</h4>
                    <p className="text-lg yellow-neon-text">$63,640</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm text-gray-400 mb-3">Social Media</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.url}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${link.color} border transition-all duration-300 hover:scale-105`}
                    >
                      <link.icon size={16} />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div 
            ref={historyRef}
            className={`glass-card p-8 transform transition-all duration-700 delay-200 ${
              historyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 neon-text">Team History</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Join Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Leave Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {teamHistory.map((history, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{formatDate(history.joinDate)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{formatDate(history.leaveDate)}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{history.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div 
            ref={awardsRef}
            className={`glass-card p-8 transform transition-all duration-700 delay-300 ${
              awardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold mb-6 neon-text">Awards</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tournament</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Award</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Prize</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {awards.map((award, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{award.date}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{award.tournament}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">{award.award}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium yellow-neon-text">{award.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerDetailsSection;
