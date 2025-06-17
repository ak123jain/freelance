 import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, ShoppingBag, Heart, Eye, Sparkles, Zap, Shield, Truck } from 'lucide-react';
 


const ClothingLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Aurora Silk Dress",
      price: "$299",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.9,
      badge: "New"
    },
    {
      id: 2,
      name: "Midnight Blazer",
      price: "$179",
      originalPrice: "$249",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      rating: 4.8,
      badge: "Sale"
    },
    {
      id: 3,
      name: "Cloud Cashmere Sweater",
      price: "$159",
      originalPrice: "$219",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
      rating: 4.9,
      badge: "Trending"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 50); // show after 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const collections = [
    {
      title: "Ethereal Evenings",
      subtitle: "Sophisticated elegance for special moments",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=700&fit=crop"
    },
    {
      title: "Urban Minimalist",
      subtitle: "Clean lines meet contemporary comfort",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop"
    },
    {
      title: "Bohemian Luxe",
      subtitle: "Free-spirited designs with premium materials",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=700&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 overflow-hidden">
      {/* Navigation */}
       <nav
      className={`fixed z-50 w-full transition-all duration-500 ${
        showNavbar
          ? "top-6 rounded-3xl bg-white/90 shadow-lg border border-gray-200 backdrop-blur-lg"
          : "top-0 rounded-none bg-transparent border-none shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LUXE
            </span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["Collections", "New Arrivals", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] dark:from-gray-900 dark:to-gray-950 transition-colors duration-1000">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-blue-500/10 z-10 pointer-events-none" />

  {/* Animated Soft Blobs */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-20 left-24 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-slow" />
    <div className="absolute bottom-32 right-32 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delay" />
    <div className="absolute top-2/3 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delay-2" />
  </div>

  {/* Content */}
  <div className="relative z-20 text-center px-6 max-w-3xl">
    <span className="inline-block mb-4 px-5 py-2 bg-white/30 text-sm font-medium text-gray-800 dark:text-white/80 rounded-full border border-white/40 backdrop-blur-md">
      🌟 Handcrafted Luxury | Limited Edition
    </span>
    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-purple-700 via-pink-700 to-indigo-700 bg-clip-text text-transparent dark:from-purple-200 dark:via-pink-300 dark:to-indigo-300">
      Elegance Meets <br className="hidden md:block" /> Future
    </h1>
    <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
      Experience a luxurious blend of style, innovation, and sustainability—crafted to inspire and designed to last.
    </p>
    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-md hover:shadow-xl transform transition hover:scale-105">
        Explore Collection
      </button>
      <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-gray-800 dark:text-white border border-white/30 rounded-full font-semibold text-lg hover:bg-white/30 transition">
        Watch Showreel
      </button>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute top-1/4 left-10 animate-bounce-slow">
    <div className="w-5 h-5 bg-purple-300 rounded-full opacity-60" />
  </div>
  <div className="absolute top-1/3 right-20 animate-bounce-slow delay-1000">
    <div className="w-6 h-6 bg-pink-300 rounded-full opacity-60" />
  </div>
  <div className="absolute bottom-1/4 left-1/4 animate-bounce-slow delay-2000">
    <div className="w-4 h-4 bg-indigo-300 rounded-full opacity-60" />
  </div>
</section>


      {/* Featured Products */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Featured Pieces
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selections that embody our commitment to exceptional quality and design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      product.badge === 'New' ? 'bg-green-500 text-white' :
                      product.badge === 'Sale' ? 'bg-red-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, each telling a unique story of style and sophistication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer"
              >
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {collection.title}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {collection.subtitle}
                  </p>
                  <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                    Explore Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Free Worldwide Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on all orders over $200. Express delivery available.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship with 30-day return policy.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Exclusive Access</h3>
              <p className="text-gray-600">Early access to new collections and member-only special events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Stay in Style</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for exclusive access to new collections, styling tips, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">LUXE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Redefining fashion through exceptional design and uncompromising quality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dresses</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Outerwear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClothingLanding;