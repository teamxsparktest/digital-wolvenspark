import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { X, Instagram, Youtube } from 'lucide-react';

interface PlayerPopupProps {
  player: any;
  onClose: () => void;
}

const PlayerPopup = ({ player, onClose }: PlayerPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div 
        className="relative bg-revenant-purple-dark border border-revenant-purple/20 rounded-2xl p-6 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          <div className="w-32 h-32 overflow-hidden rounded-full border-2 border-revenant-purple/30">
            <img 
              src={player.image} 
              alt={player.id} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold neon-text">{player.id}</h3>
            <p className="text-lg text-white">{player.name !== "-" ? player.name : "Name not provided"}</p>
            
            {player.birthDate && (
              <p className="text-sm text-gray-300 mt-2">
                Born: {player.birthDate}
                {player.age && <span> (Age {player.age})</span>}
              </p>
            )}
            
            <p className="text-sm text-gray-300 mt-1">
              Nationality: {player.nationality || "Indian"}
            </p>
            
            <p className="text-sm text-gray-300 mt-1">
              Joined: {player.joinDate}
            </p>
            
            {player.notableMedia && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light">Notable Media:</p>
                <ul className="text-sm text-gray-300 list-disc pl-5 mt-2">
                  {player.notableMedia.map((media: string, idx: number) => (
                    <li key={idx}>{media}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {(player.instagram || player.youtube) && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light mb-3">Social Media:</p>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {player.instagram && (
                    <a 
                      href={player.instagram.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm transition-transform hover:scale-105"
                    >
                      <Instagram size={18} />
                      <span>{player.instagram.handle}</span>
                    </a>
                  )}
                  
                  {player.youtube && (
                    <a 
                      href={player.youtube.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white text-sm transition-transform hover:scale-105"
                    >
                      <Youtube size={18} />
                      <span>{player.youtube.handle}</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PlayersSection = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  // Current players data
  const currentPlayers = [
    { 
      id: "Sarang", 
      name: "Sarangajyoti Deka", 
      joinDate: "June 4, 2023", 
      birthDate: "September 7, 2002",
      age: "22", 
      nationality: "Indian",
      notableMedia: ["This Might Be the Worst Podcast Ever (January 22, 2025)"],
      instagram: { handle: "txsarang", url: "https://www.instagram.com/txsarang" },
      youtube: { handle: "TX Sarang Jod", url: "https://youtube.com/@txsarangjod" },
      image: "/lovable-uploads/de19c27f-76bc-4cae-b0c5-0718375b0253.png" 
    },
    { 
      id: "SPRAYGOD", 
      name: "Harsh Malik", 
      joinDate: "November 10, 2023", 
      birthDate: "June 12, 2003",
      age: "21", 
      nationality: "Indian",
      notableMedia: ["THE DREAM - Team X Spark BGIS 24 CHAMPIONS Documentary (September 22, 2024)"],
      instagram: { handle: "tx_spraygod", url: "https://www.instagram.com/tx_spraygod" },
      youtube: { handle: "TXS Spraygod", url: "https://youtube.com/@TXSSpraygod" },
      image: "/lovable-uploads/e63e6426-7163-430b-8ab5-bbe3c26bd517.png" 
    },
    { 
      id: "Shadow7", 
      name: "Tenzin Kelsang", 
      joinDate: "February 22, 2024", 
      birthDate: "March 15, 2003",
      age: "21", 
      nationality: "Indian",
      notableMedia: [
        "Chronicle of our Crowning - Sparks of Glory (December 10, 2024)",
        "THE DREAM - Team X Spark BGIS 24 CHAMPIONS Documentary (September 22, 2024)",
        "This Might Be the Worst Podcast Ever (January 22, 2025)"
      ],
      image: "/lovable-uploads/7da80c8c-9ce3-4a75-ae9a-13d1d197456a.png" 
    },
    { 
      id: "Jokerr", 
      name: "Khush Singh", 
      joinDate: "August 19, 2024", 
      birthDate: "February 9, 2006",
      age: "19", 
      nationality: "Indian",
      notableMedia: [
        "Chronicle of our Crowning - Sparks of Glory (December 10, 2024)",
        "This Might Be the Worst Podcast Ever (January 22, 2025)"
      ],
      instagram: { handle: "txjoker09", url: "https://www.instagram.com/txjoker09" },
      youtube: { handle: "TX Joker09", url: "https://youtube.com/@TXJoker09" },
      image: "/lovable-uploads/c0758d19-a010-417c-bb96-42e9eb868cd7.png" 
    },
    { 
      id: "Syed", 
      name: "-", 
      joinDate: "December 27, 2024", 
      nationality: "Indian",
      image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" 
    },
  ];
  
  // Ex-teammates data
  const exTeammates = [
    { id: "Aditya", joinDate: "June 4, 2023", leaveDate: "November 10, 2023", notes: "", image: "https://placehold.co/300x300/121212/AF4FFE?text=A&font=montserrat" },
    { id: "Pukar", joinDate: "June 4, 2023", leaveDate: "December 20, 2023", notes: "", image: "https://placehold.co/300x300/121212/AF4FFE?text=P&font=montserrat" },
    { id: "SyedOP", joinDate: "June 4, 2023", leaveDate: "July 20, 2023", notes: "Left for Hyderabad Hydras", image: "https://placehold.co/300x300/121212/AF4FFE?text=SO&font=montserrat" },
    { id: "Darklord", joinDate: "June 4, 2023", leaveDate: "July 22, 2023", notes: "Left for Global Esports", image: "https://placehold.co/300x300/121212/AF4FFE?text=D&font=montserrat" },
    { id: "Sc0utOP", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown, left with roster acquired by Fnatic", image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" },
    { id: "Owais", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=O&font=montserrat" },
    { id: "Ronak", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=R&font=montserrat" },
    { id: "Paritosh", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=P&font=montserrat" },
    { id: "InYourDream", joinDate: "Unknown", leaveDate: "October 18th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=IYD&font=montserrat" },
    { id: "Mavi", joinDate: "Unknown", leaveDate: "August 24th", notes: "Year unknown", image: "https://placehold.co/300x300/121212/AF4FFE?text=M&font=montserrat" },
  ];
  
  const PlayerCard = ({ player, isExTeammate = false }: { player: any, isExTeammate?: boolean }) => (
    <div 
      className="glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer"
      onClick={() => setSelectedPlayer(player)}
    >
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
            Joined: {player.joinDate}
          </div>
          {isExTeammate && (
            <div className="text-xs text-gray-400">
              Left: {player.leaveDate}
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
          
          {selectedPlayer && (
            <PlayerPopup 
              player={selectedPlayer} 
              onClose={() => setSelectedPlayer(null)} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
