
import { useState } from 'react';
import { useScrollReveal } from '../utils/animationUtils';
import { User, Trophy, BarChart2 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import refactored components
import TeamOverview from './bgmi/TeamOverview';
import PlayersList from './bgmi/PlayersList';
import TournamentsList from './bgmi/TournamentsList';
import StatsView from './bgmi/StatsView';

// Import data
import { players, tournaments, teamOverview } from './bgmi/bgmiData';

const BGMISection = () => {
  const [activeTab, setActiveTab] = useState('players');
  
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.1);
  
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
          {/* Team overview */}
          <TeamOverview teamOverview={teamOverview} />
          
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
              <PlayersList players={players} />
            </TabsContent>
            
            {/* Tournaments content */}
            <TabsContent value="tournaments" className="mt-0">
              <TournamentsList tournaments={tournaments} />
            </TabsContent>
            
            {/* Statistics content */}
            <TabsContent value="stats" className="mt-0">
              <StatsView players={players} tournaments={tournaments} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BGMISection;
