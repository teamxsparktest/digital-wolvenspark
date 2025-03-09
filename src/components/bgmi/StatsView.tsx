
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface StatsViewProps {
  players: any[];
  tournaments: any[];
}

const StatsView = ({ players, tournaments }: StatsViewProps) => {
  return (
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
  );
};

export default StatsView;
