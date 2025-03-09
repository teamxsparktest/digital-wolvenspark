
interface TeamOverviewProps {
  teamOverview: {
    kills: number;
    totalMatches: number;
    winRate: string;
    avgPlacement: number;
    avgKillsPerMatch: number;
    topFragger: string;
    recentForm: string;
  };
}

const TeamOverview = ({ teamOverview }: TeamOverviewProps) => {
  return (
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
  );
};

export default TeamOverview;
