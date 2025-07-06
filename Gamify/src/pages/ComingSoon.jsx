import React from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 relative overflow-hidden">
      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-6 z-20 flex items-center space-x-1 bg-white/70 hover:bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-purple-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-purple-600 font-medium">Back</span>
      </button>

      {/* Floating background bubbles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-10 animate-float"
          style={{
            background: ["#9C27B0", "#F44336", "#2196F3", "#FF9800"][i % 4],
            width: `${Math.random() * 60 + 60}px`,
            height: `${Math.random() * 60 + 60}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 20 + 15}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6 py-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
          🚧 Coming Soon
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Our site is under construction. We're working hard to launch soon! 💻
        </p>
        <div className="flex justify-center space-x-4 text-center mb-6 text-xl font-semibold text-gray-700">
          <div>
            <div className="text-3xl text-purple-700 animate-pulse">10</div>
            Days
          </div>
          <div>
            <div className="text-3xl text-pink-600 animate-pulse">14</div>
            Hours
          </div>
          <div>
            <div className="text-3xl text-orange-500 animate-pulse">30</div>
            Minutes
          </div>
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button className="px-4 py-2 bg-purple-600 text-white rounded-r-full hover:bg-purple-700 transition">
          Notify Me
        </button>
      </motion.div>

      <style jsx="true">{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
