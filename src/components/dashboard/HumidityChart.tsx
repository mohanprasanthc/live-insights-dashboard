import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HourlyData } from '@/data/mockWeatherData';

interface HumidityChartProps {
  data: HourlyData[];
}

const HumidityChart = ({ data }: HumidityChartProps) => {
  // Sample every 3 hours for cleaner display
  const sampledData = data.filter((_, index) => index % 3 === 0);

  return (
    <div className="glass-card p-6 fade-in delay-200">
      <div className="mb-6">
        <h3 className="text-xl font-display font-semibold text-foreground">
          Humidity Levels
        </h3>
        <p className="text-sm text-muted-foreground">Every 3 hours</p>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sampledData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(199, 89%, 48%)" stopOpacity={1} />
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="hsl(217, 33%, 25%)" 
              vertical={false}
            />
            <XAxis 
              dataKey="time" 
              stroke="hsl(215, 20%, 65%)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(215, 20%, 65%)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 14%)',
                border: '1px solid hsl(217, 33%, 25%)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
              }}
              labelStyle={{ color: 'hsl(215, 20%, 65%)', marginBottom: '4px' }}
              itemStyle={{ color: 'hsl(199, 89%, 48%)' }}
              formatter={(value: number) => [`${value}%`, 'Humidity']}
              cursor={{ fill: 'hsl(217, 33%, 20%)', opacity: 0.3 }}
            />
            <Bar 
              dataKey="humidity" 
              fill="url(#humidityGradient)"
              radius={[6, 6, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HumidityChart;
