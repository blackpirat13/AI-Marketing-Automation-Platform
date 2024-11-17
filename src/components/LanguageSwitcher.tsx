import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-2">
        <Globe className="h-5 w-5 text-gray-500" />
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="appearance-none bg-transparent border-none text-gray-700 py-2 pl-2 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;