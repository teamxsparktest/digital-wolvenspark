
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { Table } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ValorantSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  const [activeTab, setActiveTab] = useState('roster');
  
  // Current roster data
  const currentRoster = [
    { id: "antidote", name: "Sabyasachi Bose", role: "In-Game Leader/Support", joinDate: "2025-01-10", birthDate: "1996-06-08", details: "Former CS:GO player, prefers Operator.", image: "https://placehold.co/300x300/121212/AF4FFE?text=A&font=montserrat" },
    { id: "azys", name: "Azis Nandang", role: "Player", joinDate: "2025-01-10", birthDate: "2002-03-17", details: "Filipino talent.", image: "https://placehold.co/300x300/121212/AF4FFE?text=A&font=montserrat" },
    { id: "DEATHMAKER", name: "Debanjan Das", role: "Player", joinDate: "2025-01-10", birthDate: "1998-06-11", details: "Former CS:GO player.", image: "https://placehold.co/300x300/121212/AF4FFE?text=D&font=montserrat" },
    { id: "rawfiul", name: "Sk Rawfiul", role: "Player", joinDate: "2025-01-10", birthDate: "", details: "Part of the RIVAL acquisition.", image: "https://placehold.co/300x300/121212/AF4FFE?text=R&font=montserrat" },
    { id: "Georggyyy", name: "George Lachica", role: "Player", joinDate: "2025-01-12", birthDate: "", details: "Filipino addition.", image: "https://placehold.co/300x300/121212/AF4FFE?text=G&font=montserrat" },
    { id: "LeVi", name: "Levince De Guzman", role: "Player", joinDate: "2025-02-21", birthDate: "", details: "Recent Filipino recruit.", image: "https://placehold.co/300x300/121212/AF4FFE?text=L&font=montserrat" },
    { id: "Gobz", name: "Gab Laking", role: "Player", joinDate: "2025-02-21", birthDate: "", details: "Latest Filipino addition.", image: "https://placehold.co/300x300/121212/AF4FFE?text=G&font=montserrat" },
  ];
  
  // Player stats data (placeholders)
  const playerStats = [
    { player: "antidote", role: "IGL/Support", joinDate: "2025-01-10", stats: "High clutch rate" },
    { player: "azys", role: "Player", joinDate: "2025-01-10", stats: "Strong aim, high ACS" },
    { player: "DEATHMAKER", role: "Player", joinDate: "2025-01-10", stats: "Top fragger" },
    { player: "rawfiul", role: "Player", joinDate: "2025-01-10", stats: "Team playmaker" },
    { player: "Georggyyy", role: "Player", joinDate: "2025-01-12", stats: "Early impact" },
    { player: "LeVi", role: "Player", joinDate: "2025-02-21", stats: "Promising debut" },
    { player: "Gobz", role: "Player", joinDate: "2025-02-21", stats: "Stats TBD" },
  ];
  
  // Tournament data
  const tournamentMatches = [
    { date: "2025-03-04", opponent: "Global Esports Academy", result: "TBD", mapsWonLost: "TBD", roundsWonLost: "TBD" },
    { date: "TBD", opponent: "Orangutan", result: "TBD", mapsWonLost: "TBD", roundsWonLost: "TBD" },
    { date: "TBD", opponent: "Reckoning Esports", result: "TBD", mapsWonLost: "TBD", roundsWonLost: "TBD" },
  ];
  
  const formatDate = (dateString: string) => {
    if (dateString === "TBD" || !dateString) return "TBD";
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
  
  const PlayerCard = ({ player }: { player: typeof currentRoster[0] }) => (
    <div className="glass-card hover:bg-white/10 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={player.image} 
          alt={player.id} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold neon-text">{player.id}</h3>
        <p className="text-sm text-gray-300">{player.name}</p>
        <p className="text-xs text-revenant-purple-light mt-1">{player.role}</p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-xs text-gray-400">
            Joined: {formatDate(player.joinDate)}
          </div>
          {player.birthDate && (
            <div className="text-xs text-gray-400 mt-1">
              Born: {formatDate(player.birthDate)}
            </div>
          )}
          {player.details && (
            <div className="mt-2 text-xs text-gray-300">
              {player.details}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  
  return (
    <section id="valorant" className="py-24 bg-gradient-to-b from-revenant-purple-dark/40 to-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Valorant</span>
          </div>
          <h2 className="heading-lg">Revenant XSpark <span className="neon-text">Valorant</span></h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-300">
            Revenant Xspark's Valorant squad, formed through strategic acquisitions and led by Sc0utOP's vision, competes in top-tier events like Challengers League 2025 South Asia.
          </p>
          <div className="mt-8">
            <p className="text-sm text-white/70 italic">Roster acquired from RIVAL on January 10, 2025, with additional signings.</p>
          </div>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Tabs defaultValue="roster" className="w-full">
            <TabsList className="mb-8 w-full max-w-md mx-auto bg-revenant-darker p-1 rounded-lg">
              <TabsTrigger value="roster" className="w-1/3">Roster</TabsTrigger>
              <TabsTrigger value="stats" className="w-1/3">Player Stats</TabsTrigger>
              <TabsTrigger value="tournament" className="w-1/3">Tournament</TabsTrigger>
            </TabsList>
            
            <TabsContent value="roster">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentRoster.map((player) => (
                  <PlayerCard key={player.id} player={player} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stats">
              <div className="glass-card overflow-hidden">
                <Table>
                  <thead className="bg-revenant-purple/10">
                    <tr>
                      <th className="p-4 text-left font-semibold text-revenant-purple-light">Player</th>
                      <th className="p-4 text-left font-semibold text-revenant-purple-light">Role</th>
                      <th className="p-4 text-left font-semibold text-revenant-purple-light">Join Date</th>
                      <th className="p-4 text-left font-semibold text-revenant-purple-light">Notable Stats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerStats.map((stat, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="p-4 text-white">{stat.player}</td>
                        <td className="p-4 text-gray-300">{stat.role}</td>
                        <td className="p-4 text-gray-300">{formatDate(stat.joinDate)}</td>
                        <td className="p-4 text-gray-300">{stat.stats}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              <div className="mt-4 text-sm text-white/50 text-center italic">
                Note: Stats are placeholder values and will be updated as official data becomes available.
              </div>
            </TabsContent>
            
            <TabsContent value="tournament">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Challengers League 2025 South Asia: Split 1 - Main Event</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <thead className="bg-revenant-purple/10">
                      <tr>
                        <th className="p-4 text-left font-semibold text-revenant-purple-light">Date</th>
                        <th className="p-4 text-left font-semibold text-revenant-purple-light">Opponent</th>
                        <th className="p-4 text-left font-semibold text-revenant-purple-light">Result</th>
                        <th className="p-4 text-left font-semibold text-revenant-purple-light">Maps Won/Lost</th>
                        <th className="p-4 text-left font-semibold text-revenant-purple-light">Rounds Won/Lost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tournamentMatches.map((match, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                          <td className="p-4 text-white">{formatDate(match.date)}</td>
                          <td className="p-4 text-gray-300">{match.opponent}</td>
                          <td className="p-4 text-gray-300">{match.result}</td>
                          <td className="p-4 text-gray-300">{match.mapsWonLost}</td>
                          <td className="p-4 text-gray-300">{match.roundsWonLost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="mt-6 text-sm text-white/50 text-center">
                  Last updated: March 8, 2025. Tournament results will be updated as matches conclude.
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ValorantSection;
