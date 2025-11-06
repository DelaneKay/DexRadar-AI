
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-gray-700">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            DexRadar <span className="text-cyan-400">AI</span>
          </h1>
        </div>
        <p className="text-sm text-gray-400 hidden md:block">On-Chain Arbitrage Scout</p>
      </div>
    </header>
  );
};

export default Header;
