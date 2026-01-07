import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { HourlyData } from '@/data/mockWeatherData';

interface TemperatureChartProps {
  data: HourlyData[];
}

const TemperatureChart = ({ data }: TemperatureChartProps) => {
  // Show every 3rd label on mobile, every 2nd on desktop
  const formatXAxis = (value: string, index: number) => {
    if (index % 3 === 0) return value;
    return '';
  };

  return (
    <div className="glass-card p-6 fade-in delay-100">
      <div className="mb-6">
        <h3 className="text-xl font-display font-semibold text-foreground">
          Temperature Trend
        </h3>
        <p className="text-sm text-muted-foreground">24-hour temperature variation</p>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(32, 95%, 55%)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="hsl(32, 95%, 55%)" stopOpacity={0} />
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
              tickFormatter={formatXAxis}
            />
            <YAxis 
              stroke="hsl(215, 20%, 65%)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 2', 'dataMax + 2']}
              tickFormatter={(value) => `${value}°`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 14%)',
                border: '1px solid hsl(217, 33%, 25%)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
              }}
              labelStyle={{ color: 'hsl(215, 20%, 65%)', marginBottom: '4px' }}
              itemStyle={{ color: 'hsl(32, 95%, 55%)' }}
              formatter={(value: number) => [`${value}°C`, 'Temperature']}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="hsl(32, 95%, 55%)"
              strokeWidth={3}
              fill="url(#tempGradient)"
              dot={false}
              activeDot={{ 
                r: 6, 
                fill: 'hsl(32, 95%, 55%)', 
                stroke: 'hsl(222, 47%, 11%)', 
                strokeWidth: 2 
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TemperatureChart;
