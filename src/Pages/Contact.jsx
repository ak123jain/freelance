import React, { useState, useEffect } from "react";
import { Mail } from 'lucide-react';

import {
  ChevronRight,
  Star,
  ShoppingBag,
  Heart,
  Eye,
  Sparkles,
  Zap,
  Shield,
  Truck,
} from "lucide-react";

const ClothingLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = [
    {
      id: 1,
      name: "Aurora Silk Dress",
      price: "$299",
      originalPrice: "$399",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      rating: 4.9,
      badge: "New",
    },
    {
      id: 2,
      name: "Midnight Blazer",
      price: "$179",
      originalPrice: "$249",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      rating: 4.8,
      badge: "Sale",
    },
    {
      id: 3,
      name: "Cloud Cashmere Sweater",
      price: "$159",
      originalPrice: "$219",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
      rating: 4.9,
      badge: "Trending",
    },
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
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=700&fit=crop",
    },
    {
      title: "Urban Minimalist",
      subtitle: "Clean lines meet contemporary comfort",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=700&fit=crop",
    },
    {
      title: "Bohemian Luxe",
      subtitle: "Free-spirited designs with premium materials",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=700&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-stone-50 overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed z-50 w-3xl transition-all duration-500 ml-96   ${
          showNavbar
            ? "top-6 rounded-3xl bg-white/90 shadow-lg border border-gray-200 backdrop-blur-lg"
            : "top-0 rounded-none bg-transparent border-none shadow-none"
        }`}
      >
        <div className="max-w-4xl mx-auto px-7 py-4  ">
          <div className="flex items-center gap-8 ">
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
              {["Collections", "New Arrivals", "About", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  >
                    {item}
                  </a>
                )
              )}
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
            Experience a luxurious blend of style, innovation, and
            sustainability—crafted to inspire and designed to last.
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
       <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  {/* Decorative Blurs */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 blur-3xl opacity-20 -z-10 rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 blur-3xl opacity-20 -z-10 rounded-full"></div>

  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight">
        Featured Pieces
      </h2>
      <p className="text-xl text-gray-500 max-w-xl mx-auto">
        Explore handpicked selections that redefine style, comfort, and sustainability.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          {/* Wishlist Button */}
          <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-white shadow">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Product Image (primary & secondary hover) */}
          <div className="relative overflow-hidden rounded-t-3xl h-80">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110 z-10"
            />
            {product.secondaryImage && (
              <img
                src={product.secondaryImage}
                alt={`${product.name} alternate`}
                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
              />
            )}
            {/* Badge */}
            <div className="absolute top-4 left-4 z-30">
              <span className={`px-3 py-1 text-xs uppercase font-semibold rounded-full shadow-md tracking-widest 
                ${product.badge === 'New' ? 'bg-green-500/90 text-white' :
                  product.badge === 'Sale' ? 'bg-red-500/90 text-white' :
                  'bg-purple-600/90 text-white'}
              `}>
                {product.badge}
              </span>
            </div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center z-30">
              <button className="opacity-0 group-hover:opacity-100 px-5 py-2 text-sm font-medium bg-white text-gray-900 rounded-full shadow-md transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                Quick View
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.rating})</span>
            </div>

            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-purple-700">{product.price}</span>
              <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
            </div>

            <button className="mt-4 w-full py-2 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition">
              Add to Bag
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Collections Showcase */}
       <section className="py-24 px-6 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-900 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight">
        Our Collections
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Explore our carefully curated collections, each telling a unique story of style and sophistication.
      </p>
    </div>

    {/* Collections Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      {collections.map((collection, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl h-96 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {/* Image with subtle pan/zoom */}
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-all duration-500 group-hover:brightness-110"></div>

          {/* Glow border effect on hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_4px_rgba(168,85,247,0.4)] rounded-3xl transition-all duration-500 pointer-events-none"></div>

          {/* Text and CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
            <h3 className="text-3xl font-bold mb-2 tracking-wide drop-shadow-md transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
              {collection.title}
            </h3>
            <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
              {collection.subtitle}
            </p>

            <button className="mt-5 px-6 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full text-sm transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:bg-white/30">
              Explore Collection
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features Section */}
       <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-3 gap-12">
      {[
        {
          icon: <Truck className="w-8 h-8 text-white" />,
          title: "Free Worldwide Shipping",
          desc: "Complimentary shipping on all orders over $200. Express delivery available.",
        },
        {
          icon: <Shield className="w-8 h-8 text-white" />,
          title: "Quality Guarantee",
          desc: "Premium materials and craftsmanship with 30-day return policy.",
        },
        {
          icon: <Zap className="w-8 h-8 text-white" />,
          title: "Exclusive Access",
          desc: "Early access to new collections and member-only special events.",
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="group relative text-center rounded-3xl p-8 backdrop-blur-md bg-white/60 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          {/* Icon Wrapper with Glow */}
          <div className="relative w-16 h-16 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-30 group-hover:opacity-70 transition-all duration-300"></div>
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
            {feature.desc}
          </p>

          {/* Optional border animation on hover */}
          <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-purple-300 transition-all duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Newsletter Section */}
       <section className="py-24 px-6 bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500">
  <div className="max-w-4xl mx-auto text-center text-white">
    <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-gradient">
      Stay in Style
    </h2>
    <p className="text-lg sm:text-xl mb-10 opacity-90">
      Get the latest drops, styling tips, and special offers directly to your inbox.
    </p>

    {/* Email Form Container */}
    <div className="relative max-w-2xl mx-auto rounded-2xl p-1 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
      <div className="flex flex-col sm:flex-row items-center gap-4 p-4">
        <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-600" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full hover:scale-105 hover:shadow-md transition-all duration-300">
          Subscribe
        </button>
      </div>
    </div>

    {/* Optional Confirmation Animation */}
    {/* <p className="mt-6 text-sm text-white/80 animate-fade-in">You're all set! 🎉 Welcome to the club.</p> */}
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
                Redefining fashion through exceptional design and uncompromising
                quality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Dresses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Outerwear
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pinterest
                  </a>
                </li>
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
