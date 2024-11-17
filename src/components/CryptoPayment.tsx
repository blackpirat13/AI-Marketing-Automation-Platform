import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Coins, Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CryptoPaymentProps {
  amount: number;
  currency: string;
  onSuccess: () => void;
}

const CryptoPayment: React.FC<CryptoPaymentProps> = ({ amount, currency, onSuccess }) => {
  const { t } = useTranslation();
  const [selectedCrypto, setSelectedCrypto] = useState('eth');
  const [processing, setProcessing] = useState(false);

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        setProcessing(true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        
        // Example ETH payment
        const tx = await signer.sendTransaction({
          to: "YOUR_WALLET_ADDRESS", // Replace with your wallet address
          value: ethers.parseEther(amount.toString())
        });

        await tx.wait();
        onSuccess();
      } else {
        alert('Please install MetaMask to make cryptocurrency payments');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{t('pricing.crypto.title')}</h3>
      <p className="text-gray-600 mb-6">{t('pricing.crypto.description')}</p>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="crypto"
              value="eth"
              checked={selectedCrypto === 'eth'}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="text-indigo-600"
            />
            <Wallet className="h-5 w-5" />
            <span>Ethereum</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="crypto"
              value="btc"
              checked={selectedCrypto === 'btc'}
              onChange={(e) => setSelectedCrypto(e.target.value)}
              className="text-indigo-600"
            />
            <Coins className="h-5 w-5" />
            <span>Bitcoin</span>
          </label>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-600 mb-2">
            Amount: {amount} {currency}
          </p>
          <button
            onClick={connectWallet}
            disabled={processing}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {processing ? 'Processing...' : 'Pay with Crypto'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoPayment;