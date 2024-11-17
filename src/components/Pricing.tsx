import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { useTranslation } from 'react-i18next';
import CryptoPayment from './CryptoPayment';

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: [
      'Up to 1,000 contacts',
      'Email marketing',
      'Basic analytics',
      'API access',
      '5 team members',
      'Community support'
    ]
  },
  {
    name: 'Professional',
    price: 99,
    features: [
      'Up to 10,000 contacts',
      'Email & SMS marketing',
      'Advanced analytics',
      'API access',
      'Unlimited team members',
      'Priority support',
      'Custom integrations',
      'Automation workflows'
    ]
  },
  {
    name: 'Enterprise',
    price: 299,
    features: [
      'Unlimited contacts',
      'All marketing channels',
      'Custom analytics',
      'API access',
      'Unlimited team members',
      'Dedicated support',
      'Custom integrations',
      'Advanced automation',
      'Custom AI models',
      'SLA guarantee'
    ]
  }
];

const Pricing = () => {
  const { openModal } = useAuthStore();
  const { t } = useTranslation();
  const [showCryptoPayment, setShowCryptoPayment] = useState(false);
  const [selectedTier, setSelectedTier] = useState<null | typeof tiers[0]>(null);

  const handleSubscribe = (tier: typeof tiers[0]) => {
    setSelectedTier(tier);
    setShowCryptoPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowCryptoPayment(false);
    openModal('register');
  };

  return (
    <div id="pricing" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('pricing.subtitle')}
          </p>
          <p className="mt-2 text-sm text-indigo-600">
            {t('pricing.cryptoAccepted')}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-white rounded-lg shadow-lg divide-y divide-gray-200"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-base font-medium text-gray-500">{t('pricing.monthly')}</span>
                </p>
                <button
                  onClick={() => handleSubscribe(tier)}
                  className="mt-8 w-full bg-indigo-600 text-white rounded-lg py-3 px-4 hover:bg-indigo-700"
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {showCryptoPayment && selectedTier && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
              <CryptoPayment
                amount={selectedTier.price}
                currency="USD"
                onSuccess={handlePaymentSuccess}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Pricing;