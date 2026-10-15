import React, { useState, useEffect } from 'react';
import { Sun, Moon, Sliders, BarChart3, TrendingUp, Users, DollarSign, Menu, X } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-2 rounded-xl text-white shadow-lg shadow-cyan-500/20">
              <TrendingUp size={22} />
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              UCI Bank Simulator
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-6">
        
        {/* Sidebar Controls */}
        <aside className={`md:w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col gap-6 ${mobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <div className="flex items-center space-x-2 text-cyan-500 font-semibold border-b border-slate-100 dark:border-slate-800 pb-3">
            <Sliders size={18} />
            <span>Targeting Parameters</span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Max Campaign Calls</label>
              <input type="range" min="1" max="10" defaultValue="3" className="w-full accent-cyan-500 cursor-pointer" />
            </div>
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1">Age Filter Threshold</label>
              <input type="range" min="18" max="80" defaultValue="40" className="w-full accent-cyan-500 cursor-pointer" />
            </div>
          </div>
        </aside>

        {/* Dashboard Workspace */}
        <main className="flex-1 flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm mb-2">
                <span>Total Targeted</span>
                <Users size={18} className="text-cyan-500" />
              </div>
              <div className="text-2xl font-bold">12,450</div>
              <span className="text-xs text-emerald-500 font-medium">↑ 12% optimized</span>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm mb-2">
                <span>Conversion Rate</span>
                <TrendingUp size={18} className="text-pink-500" />
              </div>
              <div className="text-2xl font-bold">18.4%</div>
              <span className="text-xs text-emerald-500 font-medium">↑ 4.2% vs baseline</span>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-sm mb-2">
                <span>Estimated ROI</span>
                <DollarSign size={18} className="text-emerald-500" />
              </div>
              <div className="text-2xl font-bold text-emerald-500">+245%</div>
              <span className="text-xs text-slate-400 font-medium">Net Profit: $48,200</span>
            </div>
          </div>

          <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm min-h-[350px] flex flex-col justify-center items-center text-center">
            <BarChart3 size={48} className="text-slate-300 dark:text-slate-700 mb-3 animate-pulse" />
            <h3 className="text-base font-semibold text-slate-700 dark:text-slate-300">Interactive Chart Area</h3>
            <p className="text-sm text-slate-400 max-w-sm mt-1">Recharts visualization will render here once simulation state logic is integrated.</p>
          </div>
        </main>
      </div>
    </div>
  );
}