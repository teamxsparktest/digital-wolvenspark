
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { Trophy } from 'lucide-react';

const TournamentSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = useState('ongoing');
  
  // Sample ongoing tournament data
  const ongoingTournament = {
    name: "BGMI Pro League 2025",
    dates: "Jan 15 - Mar 20, 2025",
    currentStage: "Group Stage - Week 3",
    teams: [
      { rank: 1, name: "Revenant XSpark", matches: 12, wins: 4, kills: 72, points: 124 },
      { rank: 2, name: "Team Soul", matches: 12, wins: 3, kills: 68, points: 118 },
      { rank: 3, name: "GodLike Esports", matches: 12, wins: 3, kills: 65, points: 113 },
      { rank: 4, name: "Enigma Gaming", matches: 12, wins: 2, kills: 63, points: 107 },
      { rank: 5, name: "TSM Entity", matches: 12, wins: 2, kills: 61, points: 105 },
      { rank: 6, name: "Global Esports", matches: 12, wins: 2, kills: 58, points: 102 },
    ]
  };
  
  // Sample upcoming matches
  const upcomingMatches = [
    { 
      date: "Mar 12, 2025", 
      time: "19:00 IST", 
      opponent: "TSM Entity", 
      tournament: "BGMI Pro League", 
      map: "Erangel", 
      stage: "Group Stage" 
    },
    { 
      date: "Mar 14, 2025", 
      time: "20:00 IST", 
      opponent: "GodLike Esports", 
      tournament: "BGMI Pro League", 
      map: "Miramar", 
      stage: "Group Stage" 
    },
    { 
      date: "Mar 16, 2025", 
      time: "18:30 IST", 
      opponent: "Team Soul", 
      tournament: "BGMI Pro League", 
      map: "Vikendi", 
      stage: "Group Stage" 
    },
  ];
  
  // Sample past tournaments
  const pastTournaments = [
    {
      name: "BGIS 2024",
      date: "Nov 5 - Dec 20, 2024",
      placement: "1st",
      prize: "$50,000",
      highlights: "Dominated the grand finals with 3 chicken dinners out of 6 matches."
    },
    {
      name: "BMPS 2024 Season 2",
      date: "Aug 10 - Sep 25, 2024",
      placement: "1st",
      prize: "$35,000",
      highlights: "Consistent performance throughout with highest overall kills."
    },
    {
      name: "Skyesports Championship 2024",
      date: "Jun 5 - Jul 12, 2024",
      placement: "2nd",
      prize: "$20,000",
      highlights: "Narrowly missed first place by just 3 points in an intense final."
    },
    {
      name: "Nodwin Gaming Masters",
      date: "Mar 15 - Apr 20, 2024",
      placement: "4th",
      prize: "$8,000",
      highlights: "Fought back from a slow start to secure a top 5 finish."
    },
  ];
  
  return (
    <section id="tournaments" className="py-24 bg-gradient-to-b from-revenant-dark to-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Competitive Scene</span>
          </div>
          <h2 className="heading-lg">Tournament <span className="neon-text">Central</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Track our progress through current tournaments, upcoming matches, and past achievements.
          </p>
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
                  activeTab === 'ongoing' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('ongoing')}
              >
                Ongoing
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'upcoming' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'past' 
                    ? 'bg-revenant-purple text-white' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('past')}
              >
                Past
              </button>
            </div>
          </div>
          
          {activeTab === 'ongoing' && (
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold neon-text">{ongoingTournament.name}</h3>
                  <p className="text-gray-400">{ongoingTournament.dates} | {ongoingTournament.currentStage}</p>
                </div>
                <div className="px-4 py-2 bg-revenant-yellow/10 border border-revenant-yellow/20 rounded-lg">
                  <span className="text-revenant-yellow font-bold">Current Rank: #1</span>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white/10">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Matches</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Wins</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Kills</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {ongoingTournament.teams.map((team) => (
                      <tr 
                        key={team.rank} 
                        className={`hover:bg-white/5 transition-colors ${
                          team.name === "Revenant XSpark" ? "bg-revenant-purple/10" : ""
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {team.rank === 1 && <Trophy size={16} className="inline mr-2 text-revenant-yellow" />}
                          {team.rank}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {team.name === "Revenant XSpark" 
                            ? <span className="neon-text">{team.name}</span>
                            : team.name
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{team.matches}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{team.wins}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">{team.kills}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
                          {team.name === "Revenant XSpark" 
                            ? <span className="yellow-neon-text">{team.points}</span>
                            : team.points
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'upcoming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match, index) => (
                <div key={index} className="glass-card p-6 hover:border-revenant-purple/30 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold neon-text">vs. {match.opponent}</h3>
                      <p className="text-gray-400 text-sm">{match.tournament}</p>
                    </div>
                    <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs">
                      {match.stage}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Date & Time</span>
                      <span className="text-sm">{match.date}, {match.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Map</span>
                      <span className="text-sm">{match.map}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 py-2 rounded-lg bg-revenant-purple/10 border border-revenant-purple/30 text-white hover:bg-revenant-purple/20 transition-all duration-300">
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastTournaments.map((tournament, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold neon-text">{tournament.name}</h3>
                    <div className={`px-3 py-1 rounded-lg text-xs ${
                      tournament.placement === '1st' 
                        ? 'bg-revenant-yellow/10 text-revenant-yellow border border-revenant-yellow/30' 
                        : tournament.placement === '2nd'
                          ? 'bg-white/10 text-white border border-white/30'
                          : tournament.placement === '3rd'
                            ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                            : 'bg-white/5 text-gray-300 border border-white/10'
                    }`}>
                      {tournament.placement} Place
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Date</span>
                      <span className="text-sm">{tournament.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Prize</span>
                      <span className="text-sm yellow-neon-text">{tournament.prize}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400 block mb-1">Highlights</span>
                      <p className="text-sm text-gray-300">{tournament.highlights}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
