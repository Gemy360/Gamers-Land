import React from 'react';
import { ExternalLink, Crown } from 'lucide-react';

const MLDiamonds = () => {
  const premiumPackages = [
    { name: 'Weekly Pass', price: '85 EGP' },
  ];

  const packages = [
    { diamonds: '86 Diamonds', price: '70 EGP' },
    { diamonds: '172 Diamonds', price: '130 EGP' },
    { diamonds: '257 Diamonds', price: '190 EGP' },
    { diamonds: '344 Diamonds', price: '255 EGP' },
    { diamonds: '429 Diamonds', price: '315 EGP' },
    { diamonds: '514 Diamonds', price: '365 EGP' },
    { diamonds: '600 Diamonds', price: '430 EGP' },
  ];

  const handlePremiumPurchase = (packageName: string, price: string) => {
    const message = `Hi! I want to purchase ${packageName} for ${price}`;
    const whatsappUrl = `https://wa.me/201020626936?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePurchase = (diamondAmount: string, price: string) => {
    const message = `Hi! I want to purchase ${diamondAmount} for ${price}`;
    const whatsappUrl = `https://wa.me/201020626936?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-6">
  <h1 className="text-4xl md:text-6xl font-black">
  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent inline-block leading-[1.4] pb-2">
    Mobile Legends Diamonds
  </span>
</h1>


  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
    Stack your Diamonds, break your enemies and rise as the ultimate legend
  </p>
</div>


        {/* Premium Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Premium Packages</h2>
          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {premiumPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 border-2 border-purple-400 hover:border-purple-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400/20 rounded-full -mr-10 -mt-10"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Crown size={32} className="text-purple-900" />
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-purple-100 mb-2">{pkg.name}</h3>
                    <p className="text-purple-200">Premium Package</p>
                  </div>
                  
                  <div className="border-t border-purple-400/30 pt-6">
                    <div className="text-4xl font-black text-purple-100 mb-6">
                      {pkg.price}
                    </div>
                    
                    <button
                      onClick={() => handlePremiumPurchase(pkg.name, pkg.price)}
                      className="w-full py-4 bg-gradient-to-r from-purple-400 to-purple-500 text-purple-900 font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Diamond Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Diamond Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-purple-300/50">
                    <img 
                      src={`/ML ${index + 1}.png`} 
                      alt={`${pkg.diamonds} Package`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent mb-2">{pkg.diamonds}</h3>
                    <p className="text-purple-300 text-sm">
                      {index === 0 ? 'Starter Pack' :
                       index === 1 ? 'Popular Choice' :
                       index === 2 ? 'Great Value' :
                       index === 3 ? 'Power Pack' :
                       index === 4 ? 'Premium Pack' :
                       index === 5 ? 'Elite Pack' :
                       'Ultimate Pack'}
                    </p>
                  </div>
                  
                  <div className="border-t border-purple-400/30 pt-6">
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-6">
                      {pkg.price}
                    </div>
                    
                    <button
                      onClick={() => handlePurchase(pkg.diamonds, pkg.price)}
                      className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-purple-400/50"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">How to Purchase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">1</div>
              <h4 className="font-semibold">Choose Package</h4>
              <p className="text-sm">Select your desired diamond package</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">2</div>
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm">Click "Buy Now" to contact via WhatsApp</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">3</div>
              <h4 className="font-semibold">Get Your Diamonds</h4>
              <p className="text-sm">Receive your diamonds instantly after payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLDiamonds;