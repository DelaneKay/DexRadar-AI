
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import ArbitrageTable from './components/ArbitrageTable';
import { fetchArbitrageOpportunities } from './services/geminiService';
import type { ArbitrageOpportunity, LoadingState } from './types';
import { RefreshIcon } from './components/icons';

const App: React.FC = () => {
  const [opportunities, setOpportunities] = useState<ArbitrageOpportunity[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const handleScan = useCallback(async () => {
    setLoadingState('loading');
    setError(null);
    try {
      const result = await fetchArbitrageOpportunities();
      setOpportunities(result);
      setLoadingState('success');
      setLastUpdated(new Date());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred.');
      setLoadingState('error');
      setOpportunities([]);
    }
  }, []);

  useEffect(() => {
    handleScan(); // Initial scan on component mount
    const interval = setInterval(() => {
        handleScan();
    }, 10 * 60 * 1000); // Auto-refresh every 10 minutes

    return () => clearInterval(interval); // Cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-semibold text-white">Arbitrage Opportunities</h2>
                {lastUpdated && (
                    <p className="text-sm text-gray-400 mt-1">
                        Last updated: {lastUpdated.toLocaleTimeString()}
                    </p>
                )}
            </div>
            <button
                onClick={handleScan}
                disabled={loadingState === 'loading'}
                className="mt-4 md:mt-0 flex items-center justify-center px-4 py-2 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
                <RefreshIcon className={`w-5 h-5 mr-2 ${loadingState === 'loading' ? 'animate-spin' : ''}`} />
                {loadingState === 'loading' ? 'Scanning...' : 'Scan Now'}
            </button>
        </div>

        {loadingState === 'error' && (
          <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {(loadingState === 'idle' || loadingState === 'loading' || (loadingState === 'success' && opportunities.length >= 0)) && (
          <ArbitrageTable opportunities={opportunities} loadingState={loadingState} />
        )}
      </main>
    </div>
  );
};

export default App;
