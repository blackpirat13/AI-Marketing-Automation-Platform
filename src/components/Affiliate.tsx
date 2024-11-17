import React from 'react';
import { DollarSign, Users, ArrowRight } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const benefits = [
  {
    title: 'High Commission Rates',
    description: 'Earn up to 30% commission on every referral that becomes a paying customer.',
    icon: DollarSign
  },
  {
    title: 'Lifetime Commissions',
    description: 'Get paid for as long as your referral remains a customer.',
    icon: Users
  }
];

const tiers = [
  {
    sales: '0-5',
    commission: '20%'
  },
  {
    sales: '6-15',
    commission: '25%'
  },
  {
    sales: '16+',
    commission: '30%'
  }
];

const Affiliate = () => {
  const { openModal } = useAuthStore();

  return (
    <div id="affiliate" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Affiliate Program
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Earn money by recommending our platform to others
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-lg font-medium text-gray-900">Commission Tiers</h3>
              <div className="mt-8">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Monthly Sales
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Commission Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tiers.map((tier) => (
                      <tr key={tier.sales}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tier.sales} sales
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {tier.commission}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openModal('register')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Become an Affiliate
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Affiliate;