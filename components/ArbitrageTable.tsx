
import React from 'react';
import { ArbitrageOpportunity, LoadingState } from '../types';
import ArbitrageRow from './ArbitrageRow';

interface ArbitrageTableProps {
  opportunities: ArbitrageOpportunity[];
  loadingState: LoadingState;
}

const TableSkeletonLoader: React.FC = () => (
    <>
        {[...Array(5)].map((_, i) => (
            <tr key={i} className="border-b border-gray-700">
                <td className="p-3 h-16"><div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="flex items-center space-x-2"><div className="w-6 h-6 rounded-full bg-gray-700 animate-pulse"></div><div className="space-y-1"><div className="h-4 bg-gray-700 rounded w-24 animate-pulse"></div><div className="h-3 bg-gray-700 rounded w-16 animate-pulse"></div></div></div></td>
                <td className="p-3"><div className="space-y-1"><div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div><div className="h-3 bg-gray-700 rounded w-12 animate-pulse"></div></div></td>
                <td className="p-3"><div className="space-y-1"><div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div><div className="h-3 bg-gray-700 rounded w-12 animate-pulse"></div></div></td>
                <td className="p-3"><div className="h-4 bg-gray-700 rounded w-12 mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="h-4 bg-gray-700 rounded w-12 mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="h-6 bg-gray-700 rounded w-24 mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="space-y-1"><div className="h-4 bg-gray-700 rounded w-20 animate-pulse"></div><div className="h-3 bg-gray-700 rounded w-16 animate-pulse"></div></div></td>
                <td className="p-3"><div className="h-5 bg-gray-700 rounded-full w-16 mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="h-5 w-5 bg-gray-700 rounded-full mx-auto animate-pulse"></div></td>
                <td className="p-3"><div className="flex space-x-3 justify-center"><div className="h-5 w-5 bg-gray-700 rounded-full animate-pulse"></div><div className="h-5 w-5 bg-gray-700 rounded-full animate-pulse"></div></div></td>
            </tr>
        ))}
    </>
);


const ArbitrageTable: React.FC<ArbitrageTableProps> = ({ opportunities, loadingState }) => {
  const renderContent = () => {
    if (loadingState === 'loading') {
      return <TableSkeletonLoader />;
    }
    
    if (loadingState === 'success' && opportunities.length === 0) {
      return (
        <tr>
          <td colSpan={11} className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-300">No Opportunities Found</h3>
            <p className="text-gray-500 mt-1">The scan completed, but no profitable arbitrage routes were found at this time.</p>
          </td>
        </tr>
      );
    }

    if (loadingState === 'success') {
      return opportunities.map((opp, index) => (
        <ArbitrageRow key={`${opp.chain}-${opp.pair}-${opp.buy_dex}-${opp.sell_dex}`} opportunity={opp} rank={index + 1} />
      ));
    }

    return null; // Don't render anything for 'idle' or 'error' states, handled by parent
  };

  return (
    <div className="overflow-x-auto bg-gray-800/50 rounded-lg border border-gray-700">
      <table className="w-full min-w-[1200px] text-left">
        <thead className="bg-gray-900/50">
          <tr className="border-b border-gray-600">
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">#</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Pair / Chain</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Buy Price</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Sell Price</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Gross Spread</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Net Spread</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Est. Profit</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Trade Size</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Liquidity</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Notes</th>
            <th className="p-3 text-xs font-semibold tracking-wider text-gray-400 uppercase text-center">Pools</th>
          </tr>
        </thead>
        <tbody>
          {renderContent()}
        </tbody>
      </table>
    </div>
  );
};

export default ArbitrageTable;
