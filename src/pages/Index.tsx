import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import CurrentWeatherCard from '@/components/dashboard/CurrentWeatherCard';
import StatsCards from '@/components/dashboard/StatsCards';
import TemperatureChart from '@/components/dashboard/TemperatureChart';
import HumidityChart from '@/components/dashboard/HumidityChart';
import WeeklyForecast from '@/components/dashboard/WeeklyForecast';
import WindPressureChart from '@/components/dashboard/WindPressureChart';
import { 
  generateHourlyData, 
  generateWeeklyForecast, 
  getCurrentWeather,
  HourlyData,
  DailyForecast,
  CurrentWeather
} from '@/data/mockWeatherData';

const Index = () => {
  const [hourlyData, setHourlyData] = useState<HourlyData[]>([]);
  const [forecast, setForecast] = useState<DailyForecast[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const refreshData = () => {
    setHourlyData(generateHourlyData());
    setForecast(generateWeeklyForecast());
    setCurrentWeather(getCurrentWeather());
    setLastUpdated(new Date());
  };

  useEffect(() => {
    refreshData();
  }, []);

  if (!currentWeather) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading weather data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader onRefresh={refreshData} lastUpdated={lastUpdated} />
        
        {/* Current Weather */}
        <CurrentWeatherCard weather={currentWeather} />
        
        {/* Stats Overview */}
        <div className="mt-6">
          <StatsCards data={hourlyData} />
        </div>
        
        {/* Charts Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TemperatureChart data={hourlyData} />
          <HumidityChart data={hourlyData} />
        </div>
        
        {/* Weekly Forecast */}
        <div className="mt-6">
          <WeeklyForecast forecast={forecast} />
        </div>
        
        {/* Wind & Pressure */}
        <div className="mt-6">
          <WindPressureChart data={hourlyData} />
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground pb-8">
          <p>
            Data visualization dashboard • Simulated weather data for demonstration
          </p>
          <p className="mt-1">
            Built with React, Recharts & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
