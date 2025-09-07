import React from 'react';
import { ExternalLink, Crown, Star } from 'lucide-react';

const PUBGTopUp = () => {
  const premiumPackages = [
    { name: 'Prime', price: '80 EGP' },
    { name: 'Prime Plus', price: '450 EGP' },
  ];

  const packages = [
    { uc: '60 UC', price: '55 EGP' },
    { uc: '325 UC', price: '240 EGP' },
    { uc: '660 UC', price: '450 EGP' },
    { uc: '1800 UC', price: '1110 EGP' },
    { uc: '3850 UC', price: '2130 EGP' },
    { uc: '8100 UC', price: '4210 EGP' },
  ];

  const handlePremiumPurchase = (packageName: string, price: string) => {
    const message = `Hi! I want to purchase ${packageName} for ${price}`;
    const whatsappUrl = `https://wa.me/201020626936?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePurchase = (ucAmount: string, price: string) => {
    const message = `Hi! I want to purchase ${ucAmount} for ${price}`;
    const whatsappUrl = `https://wa.me/201020626936?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
            PUBG Mobile UC
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-medium whitespace-nowrap">
            Get your PUBG Mobile UC and dominate the battlefield with unstoppable power
          </p>
        </div>

        {/* Premium Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Premium Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {premiumPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-2xl p-8 border-2 border-yellow-400 hover:border-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-full -mr-10 -mt-10"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? <Star size={32} className="text-yellow-900" /> : <Crown size={32} className="text-yellow-900" />}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-yellow-100 mb-2">{pkg.name}</h3>
                    <p className="text-yellow-200"></p>
                  </div>
                  
                  <div className="border-t border-yellow-400/30 pt-6">
                    <div className="text-4xl font-black text-yellow-100 mb-6">
                      {pkg.price}
                    </div>
                    
                    <button
                      onClick={() => handlePremiumPurchase(pkg.name, pkg.price)}
                      className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular UC Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">UC Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - 60 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-blue-500
 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/10 rounded-full -ml-12 -mb-12"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-blue-300/50">
                  <img 
                    src="/UC 1.jpeg" 
                    alt="60 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-2">60 UC</h3>
                  <p className="text-blue-300 text-sm">Starter Pack</p>
                </div>
                <div className="border-t border-blue-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent mb-6">
                    55 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('60 UC', '55 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-blue-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - 325 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-pink-500
 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 left-0 w-28 h-28 bg-purple-400/10 rounded-full -ml-14 -mt-14"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-400/10 rounded-full -mr-10 -mb-10"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-purple-300/50">
                  <img 
                    src="/UC 2.jpeg" 
                    alt="325 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-2">325 UC</h3>
                  <p className="text-purple-300 text-sm">Popular Choice</p>
                </div>
                <div className="border-t border-purple-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                    240 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('325 UC', '240 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-purple-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - 660 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-green-500
 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-400/10 rounded-full -mr-18 -mt-18"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-teal-400/10 rounded-full -ml-14 -mb-14"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-emerald-300/50">
                  <img 
                    src="/UC 3.jpeg" 
                    alt="660 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent mb-2">660 UC</h3>
                  <p className="text-emerald-300 text-sm">Great Value</p>
                </div>
                <div className="border-t border-emerald-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-6">
                    450 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('660 UC', '450 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-emerald-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 - 1110 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-yellow-500
 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400/10 rounded-full -ml-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-red-400/10 rounded-full -mr-12 -mb-12"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-amber-300/50">
                  <img 
                    src="/UC 3.jpeg" 
                    alt="1110 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent mb-2">1800 UC</h3>
                  <p className="text-amber-300 text-sm">Power Pack</p>
                </div>
                <div className="border-t border-amber-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-6">
                    1110 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('1800 UC', '1110 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-amber-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 5 - 2130 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-pink-500
 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-400/10 rounded-full -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fuchsia-400/10 rounded-full -ml-16 -mb-16"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-rose-300/50">
                  <img 
                    src="/UC 4.jpeg" 
                    alt="2130 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-200 to-fuchsia-200 bg-clip-text text-transparent mb-2">3850 UC</h3>
                  <p className="text-rose-300 text-sm">Premium Pack</p>
                </div>
                <div className="border-t border-rose-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-rose-300 to-fuchsia-300 bg-clip-text text-transparent mb-6">
                    2130 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('3850 UC', '2130 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-rose-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Card 6 - 4210 UC */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden">

              <div className="absolute top-0 left-0 w-44 h-44 bg-violet-400/10 rounded-full -ml-22 -mt-22"></div>
              <div className="absolute bottom-0 right-0 w-36 h-36 bg-indigo-400/10 rounded-full -mr-18 -mb-18"></div>
              <div className="text-center space-y-6 relative z-10">
                <div className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300 rounded-xl overflow-hidden border-2 border-violet-300/50">
                  <img 
                    src="/UC 5.jpeg" 
                    alt="4210 UC Package"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-violet-200 to-indigo-200 bg-clip-text text-transparent mb-2">8100 UC</h3>
                  <p className="text-violet-300 text-sm">Ultimate Pack</p>
                </div>
                <div className="border-t border-violet-400/30 pt-6">
                  <div className="text-4xl font-black bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent mb-6">
                    4210 EGP
                  </div>
                  <button
                    onClick={() => handlePurchase('8100 UC', '4210 EGP')}
                    className="w-full py-4 bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg border border-violet-400/50"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">How to Purchase</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">1</div>
              <h4 className="font-semibold">Choose Package</h4>
              <p className="text-sm">Select your desired UC package</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">2</div>
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-sm">Click "Buy Now" to contact via WhatsApp</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">3</div>
              <h4 className="font-semibold">Get Your UC</h4>
              <p className="text-sm">Receive your UC instantly after payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUBGTopUp;