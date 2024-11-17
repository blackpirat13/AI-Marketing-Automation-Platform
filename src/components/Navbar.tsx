import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { openModal } = useAuthStore();
  const { t } = useTranslation();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">MarketingAI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="#features" className="text-gray-600 hover:text-gray-900">
              {t('nav.features')}
            </Link>
            <Link to="#pricing" className="text-gray-600 hover:text-gray-900">
              {t('nav.pricing')}
            </Link>
            <Link to="#affiliate" className="text-gray-600 hover:text-gray-900">
              {t('nav.affiliate')}
            </Link>
            <LanguageSwitcher />
            <button
              onClick={() => openModal('login')}
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700"
            >
              {t('nav.login')}
            </button>
            <button
              onClick={() => openModal('register')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              {t('nav.signup')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;