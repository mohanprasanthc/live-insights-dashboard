// Simulated weather data that mimics OpenWeatherMap API responses

export interface HourlyData {
  time: string;
  temp: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
}

export interface DailyForecast {
  day: string;
  high: number;
  low: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'partly-cloudy';
  humidity: number;
}

export interface CurrentWeather {
  location: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: string;
  visibility: number;
  uvIndex: number;
  sunrise: string;
  sunset: string;
}

// Generate realistic hourly data for the past 24 hours
export const generateHourlyData = (): HourlyData[] => {
  const data: HourlyData[] = [];
  const now = new Date();
  
  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now);
    hour.setHours(hour.getHours() - i);
    
    // Simulate temperature curve (cooler at night, warmer during day)
    const hourOfDay = hour.getHours();
    const baseTemp = 18;
    const tempVariation = Math.sin((hourOfDay - 6) * Math.PI / 12) * 8;
    const temp = Math.round((baseTemp + tempVariation + (Math.random() * 2 - 1)) * 10) / 10;
    
    data.push({
      time: hour.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      temp: temp,
      humidity: Math.round(50 + Math.random() * 30),
      pressure: Math.round(1010 + Math.random() * 20),
      windSpeed: Math.round((5 + Math.random() * 15) * 10) / 10,
    });
  }
  
  return data;
};

// Generate 7-day forecast
export const generateWeeklyForecast = (): DailyForecast[] => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const conditions: DailyForecast['condition'][] = ['sunny', 'partly-cloudy', 'cloudy', 'rainy', 'sunny', 'partly-cloudy', 'sunny'];
  const forecast: DailyForecast[] = [];
  
  const today = new Date();
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    
    const baseHigh = 22 + Math.random() * 8;
    const baseLow = baseHigh - 8 - Math.random() * 4;
    
    forecast.push({
      day: i === 0 ? 'Today' : days[date.getDay()],
      high: Math.round(baseHigh),
      low: Math.round(baseLow),
      condition: conditions[i],
      humidity: Math.round(40 + Math.random() * 40),
    });
  }
  
  return forecast;
};

// Current weather data
export const getCurrentWeather = (): CurrentWeather => {
  return {
    location: 'San Francisco, CA',
    temperature: 21,
    feelsLike: 19,
    condition: 'Partly Cloudy',
    humidity: 65,
    pressure: 1018,
    windSpeed: 12,
    windDirection: 'NW',
    visibility: 16,
    uvIndex: 4,
    sunrise: '6:42 AM',
    sunset: '7:38 PM',
  };
};

// Data for comparison charts
export const getMonthlyComparison = () => {
  return [
    { month: 'Jan', avgTemp: 12, avgHumidity: 75 },
    { month: 'Feb', avgTemp: 14, avgHumidity: 70 },
    { month: 'Mar', avgTemp: 16, avgHumidity: 65 },
    { month: 'Apr', avgTemp: 18, avgHumidity: 60 },
    { month: 'May', avgTemp: 20, avgHumidity: 55 },
    { month: 'Jun', avgTemp: 23, avgHumidity: 50 },
    { month: 'Jul', avgTemp: 25, avgHumidity: 45 },
    { month: 'Aug', avgTemp: 24, avgHumidity: 48 },
    { month: 'Sep', avgTemp: 22, avgHumidity: 52 },
    { month: 'Oct', avgTemp: 19, avgHumidity: 58 },
    { month: 'Nov', avgTemp: 15, avgHumidity: 68 },
    { month: 'Dec', avgTemp: 12, avgHumidity: 72 },
  ];
};
