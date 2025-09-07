import React from 'react';
import { ExternalLink, Crown, Star } from 'lucide-react';

const FreefireDiamonds = () => {
  const premiumPackages = [
    { name: 'Weekly membership', price: '135 EGP' },
    { name: 'Monthly membership', price: '560 EGP' },
  ];

  const packages = [
    { diamonds: '110 Diamonds', price: '70 EGP' },
    { diamonds: '230 Diamonds', price: '130 EGP' },
    { diamonds: '340 Diamonds', price: '175 EGP' },
    { diamonds: '450 Diamonds', price: '225 EGP' },
    { diamonds: '500 Diamonds', price: '250 EGP' },
    { diamonds: '580 Diamonds', price: '280 EGP' },
    { diamonds: '800 Diamonds', price: '380 EGP' },
    { diamonds: '1000 Diamonds', price: '500 EGP' },
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-4">
            Free Fire Diamonds
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fuel your fire with Diamonds and dominate every fight
          </p>
        </div>

        {/* Premium Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Premium Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {premiumPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 border-2 border-red-400 hover:border-red-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-400/20 rounded-full -mr-10 -mt-10"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? <Star size={32} className="text-red-900" /> : <Crown size={32} className="text-red-900" />}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-red-100 mb-2">{pkg.name}</h3>
                    <p className="text-red-200"></p>
                  </div>
                  
                  <div className="border-t border-red-400/30 pt-6">
                    <div className="text-4xl font-black text-red-100 mb-6">
                      {pkg.price}
                    </div>
                    
                    <button
                      onClick={() => handlePremiumPurchase(pkg.name, pkg.price)}
                      className="w-full py-4 bg-gradient-to-r from-red-400 to-red-500 text-red-900 font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
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
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-red-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-400/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-red-300/50">
                    <img 
                      src={
                        index === 0 ? '/D 1.jpeg' :
                        index === 1 ? '/D 3.jpeg' :
                        index === 2 ? '/D 2.jpeg' :
                        index === 3 ? '/D 2.jpeg' :
                        index === 4 ? '/D 6.jpeg' :
                        index === 5 ? '/D 6.jpeg' :
                        index === 6 ? '/D 4.jpeg' :
                        '/D 5.jpeg'
                      }
                      alt={`${pkg.diamonds} Package`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-200 to-orange-200 bg-clip-text text-transparent mb-2">{pkg.diamonds}</h3>
                    <p className="text-red-300 text-sm">
                      {index === 0 ? 'Starter Pack' :
                       index === 1 ? 'Popular Choice' :
                       index === 2 ? 'Great Value' :
                       index === 3 ? 'Power Pack' :
                       index === 4 ? 'Premium Pack' :
                       index === 5 ? 'Elite Pack' :
                       index === 6 ? 'Ultimate Pack' :
                       'Mega Pack'}
                    </p>
                  </div>
                  
                  <div className="border-t border-red-400/30 pt-6">
                    <div className="text-4xl font-black bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent mb-6">
                      {pkg.price}
                    </div>
                    
                    <button
                      onClick={() => handlePurchase(pkg.diamonds, pkg.price)}
                      className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-red-400/50"
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
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">1</div>
              <h4 className="font-semibold">Choose Package</h4>
              <p className="text-sm">Select your desired diamond package</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">2</div>
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm">Click "Buy Now" to contact via WhatsApp</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">3</div>
              <h4 className="font-semibold">Get Your Diamonds</h4>
              <p className="text-sm">Receive your diamonds instantly after payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreefireDiamonds;