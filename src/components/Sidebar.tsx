import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Megaphone, 
  Users, 
  BarChart2, 
  Settings,
  Brain,
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/campaigns', icon: Megaphone, label: 'Campaigns' },
    { to: '/contacts', icon: Users, label: 'Contacts' },
    { to: '/analytics', icon: BarChart2, label: 'Analytics' },
    { to: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4 flex flex-col">
      <div className="flex items-center gap-2 px-3 mb-8">
        <Brain className="h-8 w-8 text-indigo-600" />
        <span className="text-xl font-bold text-gray-900">MarketingAI</span>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;