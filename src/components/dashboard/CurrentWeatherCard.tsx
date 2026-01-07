import { Cloud, Droplets, Wind, Eye, Sun, Thermometer } from 'lucide-react';
import { CurrentWeather } from '@/data/mockWeatherData';

interface CurrentWeatherCardProps {
  weather: CurrentWeather;
}

const CurrentWeatherCard = ({ weather }: CurrentWeatherCardProps) => {
  return (
    <div className="glass-card p-8 fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Main Temperature Display */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <Cloud className="w-24 h-24 text-primary weather-icon-glow animate-float" />
            <Sun className="w-10 h-10 text-accent absolute -top-2 -right-2 pulse-slow" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-1">
              {weather.location}
            </p>
            <div className="flex items-start">
              <span className="text-7xl font-display font-bold gradient-warm-text">
                {weather.temperature}
              </span>
              <span className="text-3xl text-muted-foreground mt-2">°C</span>
            </div>
            <p className="text-xl text-foreground/80 mt-1">{weather.condition}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <Thermometer className="w-4 h-4" />
              Feels like {weather.feelsLike}°C
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
          <WeatherDetail
            icon={<Droplets className="w-5 h-5 text-chart-humidity" />}
            label="Humidity"
            value={`${weather.humidity}%`}
          />
          <WeatherDetail
            icon={<Wind className="w-5 h-5 text-chart-wind" />}
            label="Wind"
            value={`${weather.windSpeed} km/h ${weather.windDirection}`}
          />
          <WeatherDetail
            icon={<Eye className="w-5 h-5 text-primary" />}
            label="Visibility"
            value={`${weather.visibility} km`}
          />
          <WeatherDetail
            icon={<Sun className="w-5 h-5 text-accent" />}
            label="UV Index"
            value={weather.uvIndex.toString()}
          />
          <WeatherDetail
            icon={<span className="text-lg">🌅</span>}
            label="Sunrise"
            value={weather.sunrise}
          />
          <WeatherDetail
            icon={<span className="text-lg">🌇</span>}
            label="Sunset"
            value={weather.sunset}
          />
        </div>
      </div>
    </div>
  );
};

interface WeatherDetailProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const WeatherDetail = ({ icon, label, value }: WeatherDetailProps) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
    {icon}
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  </div>
);

export default CurrentWeatherCard;
