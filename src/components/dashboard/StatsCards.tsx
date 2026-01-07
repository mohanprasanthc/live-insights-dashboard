import { TrendingUp, TrendingDown, Droplets, Wind, Gauge, ThermometerSun } from 'lucide-react';
import { HourlyData } from '@/data/mockWeatherData';

interface StatsCardsProps {
  data: HourlyData[];
}

const StatsCards = ({ data }: StatsCardsProps) => {
  // Calculate statistics from hourly data
  const temps = data.map(d => d.temp);
  const maxTemp = Math.max(...temps);
  const minTemp = Math.min(...temps);
  const avgHumidity = Math.round(data.reduce((acc, d) => acc + d.humidity, 0) / data.length);
  const avgWind = Math.round(data.reduce((acc, d) => acc + d.windSpeed, 0) / data.length * 10) / 10;
  const avgPressure = Math.round(data.reduce((acc, d) => acc + d.pressure, 0) / data.length);
  const currentTemp = data[data.length - 1].temp;

  const stats = [
    {
      label: 'Current Temp',
      value: `${currentTemp}°C`,
      icon: ThermometerSun,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      trend: currentTemp > temps[temps.length - 2] ? 'up' : 'down',
    },
    {
      label: 'High / Low',
      value: `${maxTemp}° / ${minTemp}°`,
      icon: TrendingUp,
      color: 'text-chart-temp',
      bgColor: 'bg-chart-temp/10',
    },
    {
      label: 'Avg Humidity',
      value: `${avgHumidity}%`,
      icon: Droplets,
      color: 'text-chart-humidity',
      bgColor: 'bg-chart-humidity/10',
    },
    {
      label: 'Avg Wind',
      value: `${avgWind} km/h`,
      icon: Wind,
      color: 'text-chart-wind',
      bgColor: 'bg-chart-wind/10',
    },
    {
      label: 'Avg Pressure',
      value: `${avgPressure} hPa`,
      icon: Gauge,
      color: 'text-chart-pressure',
      bgColor: 'bg-chart-pressure/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 fade-in">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div 
            key={stat.label}
            className="glass-card p-4 flex flex-col"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
              {stat.trend && (
                stat.trend === 'up' 
                  ? <TrendingUp className="w-4 h-4 text-chart-wind" />
                  : <TrendingDown className="w-4 h-4 text-accent" />
              )}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
              {stat.label}
            </p>
            <p className="text-xl font-display font-semibold text-foreground">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
