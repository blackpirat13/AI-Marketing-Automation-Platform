import React from 'react';
import { 
  Users, 
  Send, 
  BarChart, 
  TrendingUp,
  Mail,
  MessageSquare,
  Twitter,
  Facebook
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const stats = [
  { 
    title: 'Total Contacts', 
    value: '24,321', 
    change: '+12.5%',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  { 
    title: 'Messages Sent', 
    value: '98,742', 
    change: '+23.1%',
    icon: Send,
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  { 
    title: 'Open Rate', 
    value: '32.4%', 
    change: '+4.3%',
    icon: BarChart,
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  { 
    title: 'Conversion Rate', 
    value: '8.7%', 
    change: '+1.2%',
    icon: TrendingUp,
    color: 'text-orange-600',
    bg: 'bg-orange-100'
  }
];

const channels = [
  { name: 'Email', icon: Mail, sent: 45231, opened: 32154 },
  { name: 'SMS', icon: MessageSquare, sent: 23145, opened: 18234 },
  { name: 'Twitter', icon: Twitter, sent: 12543, opened: 8765 },
  { name: 'Facebook', icon: Facebook, sent: 34521, opened: 23145 }
];

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500">Welcome to your AI Marketing Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Campaign Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#4F46E5" 
                  fill="#E0E7FF" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Channel Performance</h2>
          <div className="space-y-4">
            {channels.map((channel) => (
              <div key={channel.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <channel.icon className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{channel.name}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">
                    {((channel.opened / channel.sent) * 100).toFixed(1)}% open rate
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;