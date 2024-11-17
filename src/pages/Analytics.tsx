import React from 'react';
import { 
  LineChart, 
  Line, 
  BarChart as RechartsBarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const engagementData = [
  { date: '2024-03-10', email: 2400, sms: 1398, social: 3908 },
  { date: '2024-03-11', email: 1398, sms: 2800, social: 2908 },
  { date: '2024-03-12', email: 9800, sms: 3908, social: 2800 },
  { date: '2024-03-13', email: 3908, sms: 4800, social: 2908 },
  { date: '2024-03-14', email: 4800, sms: 3800, social: 4800 },
  { date: '2024-03-15', email: 3800, sms: 4300, social: 3800 }
];

const conversionData = [
  { name: 'Email', value: 45 },
  { name: 'SMS', value: 25 },
  { name: 'Social', value: 30 }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

const channelPerformance = [
  { channel: 'Email', sent: 45000, opened: 32000, clicked: 12000 },
  { channel: 'SMS', sent: 23000, opened: 18000, clicked: 8000 },
  { channel: 'Social', sent: 34000, opened: 23000, clicked: 9000 }
];

const Analytics = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500">Campaign performance and insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Engagement Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip 
                  labelFormatter={(date) => new Date(date).toLocaleDateString()}
                />
                <Line type="monotone" dataKey="email" stroke="#4F46E5" name="Email" />
                <Line type="monotone" dataKey="sms" stroke="#10B981" name="SMS" />
                <Line type="monotone" dataKey="social" stroke="#F59E0B" name="Social" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Channel Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold mb-4">Channel Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart data={channelPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="channel" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sent" fill="#4F46E5" name="Sent" />
              <Bar dataKey="opened" fill="#10B981" name="Opened" />
              <Bar dataKey="clicked" fill="#F59E0B" name="Clicked" />
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channelPerformance.map((channel) => (
          <div key={channel.channel} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{channel.channel} Metrics</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Open Rate</span>
                  <span>{((channel.opened / channel.sent) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${(channel.opened / channel.sent) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Click Rate</span>
                  <span>{((channel.clicked / channel.opened) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(channel.clicked / channel.opened) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;