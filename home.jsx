import React, { useState } from 'react';
import { Search, ChevronDown, Heart, TrendingUp, Users, Play, ExternalLink } from 'lucide-react';

const ClipperCentralHomepage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    'Art', 'Gym', 'Medicine', 'Dance', 'Food', 'Gaming', 'Music', 'Technology', 'Gambling'
  ];

  const moreCategories = [
    'Beauty', 'Fashion', 'Travel', 'Comedy', 'Sports', 'Finance', 'Education', 'Lifestyle', 
    'Pets', 'Cars', 'Crypto', 'Business', 'Fitness', 'Cooking', 'DIY', 'Photography'
  ];

  const featuredAccounts = [
    {
      id: 1,
      name: 'GymMotivation Daily',
      handle: '@gymmotivation',
      followers: '2.4M',
      category: 'Fitness',
      price: '$25',
      avgViews: '450K',
      image: '/api/placeholder/120/120',
      verified: true
    },
    {
      id: 2,
      name: 'Tech Insider Clips',
      handle: '@techclips',
      followers: '1.8M',
      category: 'Technology',
      price: '$35',
      avgViews: '320K',
      image: '/api/placeholder/120/120',
      verified: true
    },
    {
      id: 3,
      name: 'Food Paradise',
      handle: '@foodparadise',
      followers: '3.1M',
      category: 'Food',
      price: '$45',
      avgViews: '580K',
      image: '/api/placeholder/120/120',
      verified: true
    }
  ];

  const recommendedAccounts = [
    {
      id: 4,
      name: 'Gaming Legends',
      handle: '@gaminglegends',
      followers: '890K',
      category: 'Gaming',
      price: '$18',
      avgViews: '200K',
      image: '/api/placeholder/120/120'
    },
    {
      id: 5,
      name: 'Dance Vibes',
      handle: '@dancevibes',
      followers: '1.2M',
      category: 'Dance',
      price: '$22',
      avgViews: '280K',
      image: '/api/placeholder/120/120'
    },
    {
      id: 6,
      name: 'Art Gallery',
      handle: '@artgallery',
      followers: '650K',
      category: 'Art',
      price: '$15',
      avgViews: '150K',
      image: '/api/placeholder/120/120'
    }
  ];

  const trendingAccounts = [
    {
      id: 7,
      name: 'Crypto Gains',
      handle: '@cryptogains',
      followers: '2.8M',
      category: 'Crypto',
      price: '$55',
      avgViews: '680K',
      image: '/api/placeholder/120/120',
      trending: true
    },
    {
      id: 8,
      name: 'Comedy Central Hub',
      handle: '@comedyhub',
      followers: '4.2M',
      category: 'Comedy',
      price: '$75',
      avgViews: '920K',
      image: '/api/placeholder/120/120',
      trending: true
    },
    {
      id: 9,
      name: 'Fashion Forward',
      handle: '@fashionforward',
      followers: '1.6M',
      category: 'Fashion',
      price: '$32',
      avgViews: '380K',
      image: '/api/placeholder/120/120',
      trending: true
    }
  ];

  const AccountCard = ({ account, showTrending = false }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            {account.verified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{account.name}</h3>
            <p className="text-sm text-gray-500">{account.handle}</p>
          </div>
        </div>
        {showTrending && (
          <div className="flex items-center space-x-1 text-green-600 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>Trending</span>
          </div>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Followers:</span>
          <span className="font-medium">{account.followers}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Avg Views:</span>
          <span className="font-medium">{account.avgViews}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Category:</span>
          <span className="font-medium text-purple-600">{account.category}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-green-600">{account.price}</div>
        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-purple-600">ClipperCentral</div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Creators, Social Media Pages, and Categories"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>
            
            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                For Creators
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-14 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className="whitespace-nowrap text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                {category}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                <span>More</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="py-2">
                    {moreCategories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Turn Your Social Media Into 
            <span className="text-purple-600"> Revenue</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with top creators and monetize your social media presence. Post sponsored content, earn money, and grow your influence in a trusted marketplace.
          </p>
        </div>

        {/* Featured Social Media Accounts */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Social Media Accounts</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
              <span>View All</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </section>

        {/* Recommended For You */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recommended For You</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
              <span>View All</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedAccounts.map((account) => (
              <AccountCard key={account.id} account={account} />
            ))}
          </div>
        </section>

        {/* Favorites/Trending Accounts */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Favorites/Trending Accounts</h2>
            <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-1">
              <span>View All</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAccounts.map((account) => (
              <AccountCard key={account.id} account={account} showTrending />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClipperCentralHomepage;