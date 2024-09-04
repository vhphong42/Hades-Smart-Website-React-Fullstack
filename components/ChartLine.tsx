import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Dữ liệu mẫu cho biểu đồ
const data = [
  
  { name: 'Tháng 1', Day: 2100, Month: 2400, Year: 2400 },
  { name: 'Tháng 2', Day: 3000, Month: 1398, Year: 2210 },
  { name: 'Tháng 3', Day: 2000, Month: 2800, Year: 2290 },
  { name: 'Tháng 4', Day: 2780, Month: 3908, Year: 2000 },
  { name: 'Tháng 5', Day: 1890, Month: 4800, Year: 2181 },
  { name: 'Tháng 6', Day: 2390, Month: 3800, Year: 2500 },
  { name: 'Tháng 7', Day: 3490, Month: 4300, Year: 2100 },
  { name: 'Tháng 8', Day: 2780, Month: 1908, Year: 2000 },
  { name: 'Tháng 9', Day: 2390, Month: 1800, Year: 2500 },
  { name: 'Tháng 10', Day: 2390, Month: 2800, Year: 2500 },
  { name: 'Tháng 11', Day: 3000, Month: 1398, Year: 2210 },
  { name: 'Tháng 12', Day: 2000, Month: 4800, Year: 2290 },

];

// Component LineChart
const ChartLine: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Day" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Month" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Year" stroke="#ff7300" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
