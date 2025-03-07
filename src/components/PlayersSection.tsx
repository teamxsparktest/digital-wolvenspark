
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';

const PlayersSection = () => {
  const [activeTab, setActiveTab] = useState('current');
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  // Current players data
  const currentPlayers = [
    { id: "Sarang", name: "Sarangajyoti Deka", joinDate: "2023-06-04", image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" },
    { id: "SPRAYGOD", name: "Harsh Malik", joinDate: "2023-11-10", image: "https://placehold.co/300x300/121212/AF4FFE?text=SG&font=montserrat" },
    { id: "Shadow7", name: "Tenzin Kelsang", joinDate: "2024-02-22", image: "https://placehold.co/300x300/121212/AF4FFE?text=S7&font=montserrat" },
    { id: "Jokerr", name: "Khush Singh", joinDate: "2024-08-19", image: "https://placehold.co/300x300/121212/AF4FFE?text=J&font=montserrat" },
    { id: "Syed", name: "-", joinDate: "2024-12-27", image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" },
  ];
  
  // Ex-teammates data
  const exTeammates = [
    { id: "Aditya", joinDate: "2023-06-04", leaveDate: "2023-11-10", notes: "", image: "https://placehold.co/300x300/121212/AF4FFE?text=A&font=montserrat" },
    { id: "Pukar", joinDate: "2023-06-04", leaveDate: "2023-12-20", notes: "", image: "https://placehold.co/300x300/121212/AF4FFE?text=P&font=montserrat" },
    { id: "SyedOP", joinDate: "2023-06-04", leaveDate: "2023-07-20", notes: "Left for Hyderabad Hydras", image: "https://placehold.co/300x300/121212/AF4FFE?text=SO&font=montserrat" },
    { id: "Darklord", joinDate: "2023-06-04", leaveDate: "2023-07-22", notes: "Left for Global Esports", image: "https://placehold.co/300x300/121212/AF4FFE?text=D&font=montserrat" },
    { id: "Sc0utOP", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown, left with roster acquired by Fnatic", image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" },
    { id: "Owais", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=O&font=montserrat" },
    { id: "Ronak", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=R&font=montserrat" },
    { id: "Paritosh", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=P&font=montserrat" },
    { id: "InYourDream", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=IYD&font=montserrat" },
    { id: "Mavi", joinDate: "Unknown", leaveDate: "August 24th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=M&font=montserrat" },
  ];
  
  const formatDate = (dateString: string) => {
    if (dateString === "Unknown") return "Unknown";
    if (!dateString.includes("-")) return dateString;
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  const PlayerCard = ({ player, isExTeammate = false }: { player: any, isExTeammate?: boolean }) => (
    <div className="glass-card hover:bg-white/10 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={player.image} 
          alt={player.id} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
        {isExTeammate && (
          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-revenant-yellow/90 text-revenant-darker text-xs font-bold">
            EX
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold neon-text">{player.id}</h3>
        <p className="text-sm text-gray-300">{player.name !== "-" ? player.name : "Name not provided"}</p>
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
          <div className="text-xs text-gray-400">
            Joined: {formatDate(player.joinDate)}
          </div>
          {isExTeammate && (
            <div className="text-xs text-gray-400">
              Left: {formatDate(player.leaveDate)}
            </div>
          )}
        </div>
        {isExTeammate && player.notes && (
          <div className="mt-2 text-xs text-gray-300">
            Note: {player.notes}
          </div>
        )}
      </div>
    </div>
  );
  
  return (
    <section id="players" className="py-24 bg-gradient-to-b from-revenant-dark to-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Our Roster</span>
          </div>
          <h2 className="heading-lg">Meet The <span className="neon-text">Players</span></h2>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-12">
            <div className="bg-revenant-darker p-1 rounded-lg inline-flex">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'current' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('current')}
              >
                Current Roster
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'ex' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('ex')}
              >
                Ex-Teammates
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {activeTab === 'current' ? (
              currentPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))
            ) : (
              exTeammates.map((player) => (
                <PlayerCard key={player.id} player={player} isExTeammate={true} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
