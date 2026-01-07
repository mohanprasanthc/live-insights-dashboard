import { Sun, Cloud, CloudRain, CloudLightning, Snowflake, CloudSun } from 'lucide-react';
import { DailyForecast } from '@/data/mockWeatherData';

interface WeeklyForecastProps {
  forecast: DailyForecast[];
}

const conditionIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  stormy: CloudLightning,
  snowy: Snowflake,
  'partly-cloudy': CloudSun,
};

const conditionColors = {
  sunny: 'text-accent',
  cloudy: 'text-muted-foreground',
  rainy: 'text-chart-humidity',
  stormy: 'text-chart-pressure',
  snowy: 'text-foreground',
  'partly-cloudy': 'text-primary',
};

const WeeklyForecast = ({ forecast }: WeeklyForecastProps) => {
  return (
    <div className="glass-card p-6 fade-in delay-300">
      <div className="mb-6">
        <h3 className="text-xl font-display font-semibold text-foreground">
          7-Day Forecast
        </h3>
        <p className="text-sm text-muted-foreground">Weekly weather outlook</p>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {forecast.map((day, index) => {
          const Icon = conditionIcons[day.condition];
          const colorClass = conditionColors[day.condition];
          
          return (
            <div 
              key={day.day}
              className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 hover:bg-secondary/40 ${
                index === 0 ? 'bg-secondary/30' : ''
              }`}
            >
              <span className={`text-sm font-medium mb-3 ${
                index === 0 ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {day.day}
              </span>
              
              <Icon className={`w-8 h-8 mb-3 ${colorClass}`} />
              
              <div className="flex flex-col items-center gap-1">
                <span className="text-lg font-semibold text-foreground">
                  {day.high}°
                </span>
                <span className="text-sm text-muted-foreground">
                  {day.low}°
                </span>
              </div>
              
              <div className="mt-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-chart-humidity" />
                <span className="text-xs text-muted-foreground">{day.humidity}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;
