
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { X, Trophy, User, BarChart2, Calendar } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Player popup component
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
            <p className="text-sm text-revenant-purple-light mt-2">Role: {player.role || "Flex"}</p>
            
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
            
            {player.stats && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-sm font-medium text-revenant-purple-light">Performance Stats:</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {Object.entries(player.stats).map(([key, value]: [string, any]) => (
                    <div key={key} className="text-sm">
                      <span className="text-gray-400">{key}: </span>
                      <span className="text-gray-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
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

// Tournament popup component
interface TournamentPopupProps {
  tournament: any;
  onClose: () => void;
}

const TournamentPopup = ({ tournament, onClose }: TournamentPopupProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div 
        className="relative bg-revenant-purple-dark border border-revenant-purple/20 rounded-2xl p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        
        <div className="flex items-center gap-4 mb-6">
          <Trophy className="text-revenant-yellow" size={32} />
          <div>
            <h3 className="text-2xl font-bold neon-text">{tournament.name}</h3>
            <p className="text-sm text-gray-300">{tournament.dates}</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="glass-card p-4 mb-4">
              <h4 className="text-lg font-semibold text-white mb-2">Tournament Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-gray-200">{tournament.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prize Pool:</span>
                  <span className="text-revenant-yellow">{tournament.prizePool}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Format:</span>
                  <span className="text-gray-200">{tournament.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Teams:</span>
                  <span className="text-gray-200">{tournament.teams}</span>
                </div>
              </div>
            </div>
            
            {tournament.placement && (
              <div className="glass-card p-4">
                <h4 className="text-lg font-semibold text-white mb-2">Our Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Placement:</span>
                    <span className={`font-semibold ${
                      tournament.placement === '1st' ? 'text-revenant-yellow' :
                      tournament.placement === '2nd' ? 'text-white' :
                      tournament.placement === '3rd' ? 'text-orange-400' : 'text-gray-200'
                    }`}>{tournament.placement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Kills:</span>
                    <span className="text-gray-200">{tournament.kills}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Points:</span>
                    <span className="text-revenant-purple-light">{tournament.points}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            {tournament.highlights && (
              <div className="glass-card p-4 mb-4 flex-grow">
                <h4 className="text-lg font-semibold text-white mb-2">Highlights</h4>
                <p className="text-gray-300 text-sm">{tournament.highlights}</p>
              </div>
            )}
            
            {tournament.matches && tournament.matches.length > 0 && (
              <div className="glass-card p-4 flex-grow">
                <h4 className="text-lg font-semibold text-white mb-2">Key Matches</h4>
                <div className="space-y-3">
                  {tournament.matches.map((match: any, idx: number) => (
                    <div key={idx} className="p-2 border border-white/10 rounded-lg">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{match.opponent}</span>
                        <span className={`${
                          match.result === 'Win' ? 'text-green-400' :
                          match.result === 'Loss' ? 'text-red-400' : 'text-yellow-400'
                        }`}>{match.result}</span>
                      </div>
                      {match.score && (
                        <div className="text-xs text-gray-400 mt-1">
                          Score: {match.score}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BGMISection = () => {
  const [activeTab, setActiveTab] = useState('players');
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [selectedTournament, setSelectedTournament] = useState<any>(null);
  
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
  // Player data with added stats for BGMI
  const players = [
    { 
      id: "Sarang", 
      name: "Sarangajyoti Deka", 
      joinDate: "June 4, 2023", 
      birthDate: "September 7, 2002",
      age: "22", 
      nationality: "Indian",
      role: "Assaulter",
      stats: {
        "Kills": 189,
        "K/D Ratio": 2.8,
        "Damage": 27650,
        "Headshot %": "24.7%",
        "Survival Time": "410 min",
        "Revival": 56
      },
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
      role: "Fragger",
      stats: {
        "Kills": 176,
        "K/D Ratio": 2.6,
        "Damage": 25890,
        "Headshot %": "28.3%",
        "Survival Time": "385 min",
        "Revival": 42
      },
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
      role: "Support",
      stats: {
        "Kills": 168,
        "K/D Ratio": 2.5,
        "Damage": 24320,
        "Headshot %": "22.1%",
        "Survival Time": "422 min",
        "Revival": 63
      },
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
      role: "Flex",
      stats: {
        "Kills": 154,
        "K/D Ratio": 2.3,
        "Damage": 22740,
        "Headshot %": "25.6%",
        "Survival Time": "378 min",
        "Revival": 48
      },
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
      role: "TBD",
      stats: {
        "Kills": 142,
        "K/D Ratio": 2.1,
        "Damage": 20980,
        "Headshot %": "21.2%",
        "Survival Time": "365 min",
        "Revival": 52
      },
      image: "https://placehold.co/300x300/121212/AF4FFE?text=S&font=montserrat" 
    },
  ];
  
  // Tournament data
  const tournaments = [
    {
      name: "BGMI Pro League 2025",
      dates: "Jan 15 - Mar 20, 2025",
      status: "Ongoing",
      currentStage: "Group Stage - Week 3",
      prizePool: "₹1,00,00,000 INR",
      format: "Round Robin + Finals",
      teams: "24",
      matches: [
        { opponent: "Team Soul", result: "Win", score: "WWLW" },
        { opponent: "GodLike Esports", result: "Win", score: "WLWW" },
        { opponent: "Enigma Gaming", result: "Loss", score: "LWLL" },
      ]
    },
    {
      name: "BGIS 2024",
      dates: "Nov 5 - Dec 20, 2024",
      status: "Completed",
      prizePool: "₹50,00,000 INR",
      format: "Group Stage + Knockout + Finals",
      teams: "32",
      placement: "1st",
      kills: 194,
      points: 278,
      highlights: "Dominated the grand finals with 3 chicken dinners out of 6 matches. Sarang was named MVP with 42 kills throughout the tournament.",
      matches: [
        { opponent: "Team Soul", result: "Win", score: "WWLW" },
        { opponent: "GodLike Esports", result: "Win", score: "WLWW" },
        { opponent: "TSM Entity", result: "Win", score: "WWWL" },
      ]
    },
    {
      name: "BMPS 2024 Season 2",
      dates: "Aug 10 - Sep 25, 2024",
      status: "Completed",
      prizePool: "₹35,00,000 INR",
      format: "League + Playoffs",
      teams: "20",
      placement: "1st",
      kills: 187,
      points: 265,
      highlights: "Consistent performance throughout with highest overall kills in the tournament. SPRAYGOD had an incredible 31-kill match against TSM Entity."
    },
    {
      name: "Skyesports Championship 2024",
      dates: "Jun 5 - Jul 12, 2024",
      status: "Completed",
      prizePool: "₹20,00,000 INR",
      format: "Double Elimination",
      teams: "16",
      placement: "2nd",
      kills: 178,
      points: 247,
      highlights: "Narrowly missed first place by just 3 points in an intense final against GodLike Esports."
    },
    {
      name: "ESL Snapdragon Pro Series Season 6",
      dates: "Dec 27, 2024 - Feb 2, 2025",
      status: "Completed",
      prizePool: "₹25,00,000 INR",
      format: "Group Stage + Playoffs",
      teams: "18",
      placement: "3rd",
      kills: 162,
      points: 231,
      highlights: "Strong showing in the group stage, but fell short in the playoffs. Shadow7 was the standout performer with consistent fragging."
    }
  ];
  
  // Team overview data
  const teamOverview = {
    kills: 829,
    totalMatches: 62,
    winRate: "38%",
    avgPlacement: 2.4,
    avgKillsPerMatch: 13.4,
    topFragger: "Sarang (189 kills)",
    recentForm: "WWWLW",
  };
  
  return (
    <section id="bgmi" className="py-24 bg-gradient-to-b from-revenant-darker to-revenant-dark">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Battlegrounds Mobile India</span>
          </div>
          <h2 className="heading-lg">BGMI <span className="neon-text">Dominance</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explore our BGMI roster, tournament achievements, and player statistics.
          </p>
        </div>
        
        <div 
          ref={contentRef}
          className={`transform transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Team overview card */}
          <div className="glass-card p-6 mb-12">
            <h3 className="text-xl font-bold neon-text mb-4">Team Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-400">Total Kills</p>
                <p className="text-2xl font-bold text-revenant-yellow">{teamOverview.kills}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Win Rate</p>
                <p className="text-2xl font-bold text-white">{teamOverview.winRate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Avg. Placement</p>
                <p className="text-2xl font-bold text-white">{teamOverview.avgPlacement}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Avg. Kills/Match</p>
                <p className="text-2xl font-bold text-white">{teamOverview.avgKillsPerMatch}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Top Fragger</p>
                <p className="text-lg font-bold text-revenant-purple-light">{teamOverview.topFragger}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Recent Form</p>
                <div className="flex gap-1 mt-1">
                  {teamOverview.recentForm.split('').map((result, idx) => (
                    <span 
                      key={idx}
                      className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded-full ${
                        result === 'W' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        result === 'L' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                        'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs navigation */}
          <Tabs defaultValue="players" className="mb-12" onValueChange={setActiveTab}>
            <TabsList className="w-full bg-revenant-darker border border-revenant-purple/20 justify-around mb-8">
              <TabsTrigger value="players" className="data-[state=active]:bg-revenant-purple data-[state=active]:text-white">
                <User className="w-4 h-4 mr-2" />
                Players
              </TabsTrigger>
              <TabsTrigger value="tournaments" className="data-[state=active]:bg-revenant-purple data-[state=active]:text-white">
                <Trophy className="w-4 h-4 mr-2" />
                Tournaments
              </TabsTrigger>
              <TabsTrigger value="stats" className="data-[state=active]:bg-revenant-purple data-[state=active]:text-white">
                <BarChart2 className="w-4 h-4 mr-2" />
                Statistics
              </TabsTrigger>
            </TabsList>
            
            {/* Players content */}
            <TabsContent value="players" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {players.map((player) => (
                  <div 
                    key={player.id}
                    className="glass-card hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={player.image} 
                        alt={player.id} 
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold neon-text">{player.id}</h3>
                      <p className="text-sm text-gray-300">{player.name !== "-" ? player.name : "Name not provided"}</p>
                      <p className="text-xs text-revenant-purple-light mt-1">{player.role || "Role TBD"}</p>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-gray-400">Kills</p>
                          <p className="text-sm font-semibold">{player.stats?.Kills || "-"}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">K/D</p>
                          <p className="text-sm font-semibold">{player.stats?.["K/D Ratio"] || "-"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedPlayer && (
                <PlayerPopup 
                  player={selectedPlayer} 
                  onClose={() => setSelectedPlayer(null)} 
                />
              )}
            </TabsContent>
            
            {/* Tournaments content */}
            <TabsContent value="tournaments" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tournaments.map((tournament, idx) => (
                  <div 
                    key={idx}
                    className="glass-card p-6 hover:border-revenant-purple/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedTournament(tournament)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold neon-text">{tournament.name}</h3>
                        <p className="text-gray-400 text-sm">{tournament.dates}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-lg text-xs ${
                        tournament.status === 'Ongoing' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                      }`}>
                        {tournament.status}
                      </div>
                    </div>
                    
                    {tournament.placement && (
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-lg text-sm ${
                          tournament.placement === '1st' 
                            ? 'bg-revenant-yellow/10 text-revenant-yellow border border-revenant-yellow/30' 
                            : tournament.placement === '2nd'
                              ? 'bg-white/10 text-white border border-white/30'
                              : tournament.placement === '3rd'
                                ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                                : 'bg-white/5 text-gray-300 border border-white/10'
                        }`}>
                          {tournament.placement} Place
                        </span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-400">Prize Pool</p>
                        <p className="text-sm font-semibold text-revenant-yellow">{tournament.prizePool}</p>
                      </div>
                      {tournament.kills && (
                        <div>
                          <p className="text-xs text-gray-400">Total Kills</p>
                          <p className="text-sm font-semibold">{tournament.kills}</p>
                        </div>
                      )}
                      {tournament.points && (
                        <div>
                          <p className="text-xs text-gray-400">Total Points</p>
                          <p className="text-sm font-semibold text-revenant-purple-light">{tournament.points}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <span className="text-xs inline-flex items-center text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        Click for details
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {selectedTournament && (
                <TournamentPopup 
                  tournament={selectedTournament} 
                  onClose={() => setSelectedTournament(null)} 
                />
              )}
            </TabsContent>
            
            {/* Statistics content */}
            <TabsContent value="stats" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold neon-text mb-4">Player Kill Comparison</h3>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead>Player</TableHead>
                        <TableHead>Kills</TableHead>
                        <TableHead>K/D Ratio</TableHead>
                        <TableHead>Headshot %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {players.map((player) => (
                        <TableRow key={player.id} className="hover:bg-white/5">
                          <TableCell className="font-medium">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full overflow-hidden">
                                <img src={player.image} alt={player.id} className="w-full h-full object-cover" />
                              </div>
                              <span>{player.id}</span>
                            </div>
                          </TableCell>
                          <TableCell>{player.stats?.Kills || "-"}</TableCell>
                          <TableCell>{player.stats?.["K/D Ratio"] || "-"}</TableCell>
                          <TableCell>{player.stats?.["Headshot %"] || "-"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold neon-text mb-4">Tournament Performance</h3>
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent">
                        <TableHead>Tournament</TableHead>
                        <TableHead>Placement</TableHead>
                        <TableHead>Kills</TableHead>
                        <TableHead>Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tournaments.filter(t => t.placement).map((tournament, idx) => (
                        <TableRow key={idx} className="hover:bg-white/5">
                          <TableCell className="font-medium">{tournament.name}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded ${
                              tournament.placement === '1st' 
                                ? 'bg-revenant-yellow/10 text-revenant-yellow' 
                                : tournament.placement === '2nd'
                                  ? 'bg-white/10 text-white'
                                  : tournament.placement === '3rd'
                                    ? 'bg-orange-500/10 text-orange-400'
                                    : 'bg-white/5 text-gray-300'
                            }`}>
                              {tournament.placement}
                            </span>
                          </TableCell>
                          <TableCell>{tournament.kills}</TableCell>
                          <TableCell className="font-bold text-revenant-purple-light">{tournament.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BGMISection;
