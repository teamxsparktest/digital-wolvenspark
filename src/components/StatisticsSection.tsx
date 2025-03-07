
import { useScrollReveal } from '../utils/animationUtils';
import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

const StatisticsSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: chartsRef, isVisible: chartsVisible } = useScrollReveal(0.1);
  const { ref: tableRef, isVisible: tableVisible } = useScrollReveal(0.2);
  
  // Sample player performance data
  const playerPerformance = [
    { name: 'Sarang', kills: 189, damage: 27650, assists: 56, survivalTime: 410 },
    { name: 'SPRAYGOD', kills: 176, damage: 25890, assists: 42, survivalTime: 385 },
    { name: 'Shadow7', kills: 168, damage: 24320, assists: 63, survivalTime: 422 },
    { name: 'Jokerr', kills: 154, damage: 22740, assists: 48, survivalTime: 378 },
    { name: 'Syed', kills: 142, damage: 20980, assists: 52, survivalTime: 365 },
  ];
  
  // Sample team performance data
  const teamPerformance = [
    { name: 'Kills', value: 829 },
    { name: 'Assists', value: 261 },
    { name: 'Place Points', value: 458 },
  ];
  
  // Sample tournament statistics
  const tournamentStats = [
    { tournament: 'BGIS 2024', placement: '1st', kills: 194, totalPoints: 278 },
    { tournament: 'BMPS 2024', placement: '1st', kills: 187, totalPoints: 265 },
    { tournament: 'BGMI Pro Series', placement: '3rd', kills: 165, totalPoints: 234 },
    { tournament: 'Skyesports Championship', placement: '2nd', kills: 178, totalPoints: 247 },
    { tournament: 'Nodwin Gaming Masters', placement: '4th', kills: 152, totalPoints: 216 },
  ];
  
  // Colors for the pie chart
  const COLORS = ['#8B5CF6', '#A78BFA', '#C4B5FD'];
  
  return (
    <section id="statistics" className="py-24 bg-revenant-darker">
      <div className="section-container">
        <div 
          ref={titleRef} 
          className={`mb-16 text-center transform transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-revenant-purple/10 border border-revenant-purple/20 mb-4">
            <span className="text-sm uppercase tracking-wider text-revenant-purple-light">Performance Metrics</span>
          </div>
          <h2 className="heading-lg">Team <span className="neon-text">Statistics</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            A comprehensive breakdown of our team's performance across tournaments and individual player metrics.
          </p>
        </div>
        
        <div 
          ref={chartsRef}
          className={`mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 transform transition-all duration-700 delay-200 ${
            chartsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 neon-text">Player Kill Statistics</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={playerPerformance} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#8B5CF6', borderRadius: '0.5rem' }}
                    itemStyle={{ color: '#FFFFFF' }}
                  />
                  <Bar dataKey="kills" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6 neon-text">Overall Team Performance</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={teamPerformance}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {teamPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#8B5CF6', borderRadius: '0.5rem' }}
                    itemStyle={{ color: '#FFFFFF' }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div 
          ref={tableRef}
          className={`glass-card p-6 transform transition-all duration-700 delay-300 ${
            tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-bold mb-6 neon-text">Tournament Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tournament</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Placement</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Kills</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Total Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {tournamentStats.map((stat, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{stat.tournament}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded ${
                        stat.placement === '1st' 
                          ? 'bg-revenant-yellow/10 text-revenant-yellow' 
                          : stat.placement === '2nd'
                            ? 'bg-white/10 text-white'
                            : stat.placement === '3rd'
                              ? 'bg-orange-500/10 text-orange-400'
                              : 'bg-white/5 text-gray-300'
                      }`}>
                        {stat.placement}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{stat.kills}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-revenant-purple-light">{stat.totalPoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
