import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { HourlyData } from '@/data/mockWeatherData';

interface WindPressureChartProps {
  data: HourlyData[];
}

const WindPressureChart = ({ data }: WindPressureChartProps) => {
  // Sample every 2 hours
  const sampledData = data.filter((_, index) => index % 2 === 0);

  return (
    <div className="glass-card p-6 fade-in delay-400">
      <div className="mb-6">
        <h3 className="text-xl font-display font-semibold text-foreground">
          Wind Speed & Pressure
        </h3>
        <p className="text-sm text-muted-foreground">Dual-axis comparison</p>
      </div>
      
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampledData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
              yAxisId="left"
              stroke="hsl(160, 84%, 39%)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              domain={[0, 'dataMax + 5']}
              tickFormatter={(value) => `${value}`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="hsl(280, 65%, 60%)"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 5', 'dataMax + 5']}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(222, 47%, 14%)',
                border: '1px solid hsl(217, 33%, 25%)',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
              }}
              labelStyle={{ color: 'hsl(215, 20%, 65%)', marginBottom: '4px' }}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span style={{ color: 'hsl(215, 20%, 65%)', fontSize: '12px' }}>{value}</span>
              )}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="windSpeed"
              name="Wind (km/h)"
              stroke="hsl(160, 84%, 39%)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: 'hsl(160, 84%, 39%)' }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="pressure"
              name="Pressure (hPa)"
              stroke="hsl(280, 65%, 60%)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: 'hsl(280, 65%, 60%)' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WindPressureChart;
