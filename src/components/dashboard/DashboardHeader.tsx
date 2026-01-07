import { RefreshCw, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardHeaderProps {
  onRefresh: () => void;
  lastUpdated: Date;
}

const DashboardHeader = ({ onRefresh, lastUpdated }: DashboardHeaderProps) => {
  const formattedDate = lastUpdated.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = lastUpdated.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2">
          Weather Dashboard
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            San Francisco, CA
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">
          Updated: {formattedTime}
        </span>
        <Button 
          variant="outline" 
          size="sm"
          onClick={onRefresh}
          className="gap-2 bg-secondary/50 border-border hover:bg-secondary hover:text-foreground"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
