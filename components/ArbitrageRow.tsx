
import React from 'react';
import { ArbitrageOpportunity } from '../types';
import { ChainIcon, ExternalLinkIcon, InfoIcon } from './icons';

interface ArbitrageRowProps {
  opportunity: ArbitrageOpportunity;
  rank: number;
}

const LiquidityBadge: React.FC<{ liquidity: 'high' | 'medium' | 'low' }> = ({ liquidity }) => {
  const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
  const colorClasses = {
    high: 'bg-green-500/20 text-green-300',
    medium: 'bg-yellow-500/20 text-yellow-300',
    low: 'bg-red-500/20 text-red-300',
  };
  return <span className={`${baseClasses} ${colorClasses[liquidity]}`}>{liquidity.toUpperCase()}</span>;
};

const ArbitrageRow: React.FC<ArbitrageRowProps> = ({ opportunity, rank }) => {
  const {
    pair,
    chain,
    buy_dex,
    sell_dex,
    buy_price,
    sell_price,
    spread_percent,
    net_spread_percent,
    est_profit_usd,
    tested_size,
    liquidity,
    pool_links,
    notes,
  } = opportunity;

  const formatPrice = (price: number) => {
    return price < 0.001 ? price.toExponential(4) : price.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 6 });
  };

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50 transition-colors duration-150">
      <td className="p-3 text-sm text-center text-gray-400">{rank}</td>
      <td className="p-3 text-sm font-medium">
        <div className="flex items-center space-x-2">
          <ChainIcon chain={chain} className="w-6 h-6 flex-shrink-0" />
          <div>
            <div>{pair}</div>
            <div className="text-xs text-gray-400 capitalize">{chain}</div>
          </div>
        </div>
      </td>
      <td className="p-3 text-sm">
        <div className="font-mono text-cyan-300">{formatPrice(buy_price)}</div>
        <div className="text-xs text-gray-400">{buy_dex}</div>
      </td>
      <td className="p-3 text-sm">
        <div className="font-mono text-green-300">{formatPrice(sell_price)}</div>
        <div className="text-xs text-gray-400">{sell_dex}</div>
      </td>
      <td className="p-3 text-sm text-center">
        <div className="font-mono text-yellow-300">{spread_percent.toFixed(3)}%</div>
      </td>
      <td className="p-3 text-sm text-center">
        <div className="font-mono text-green-300 font-bold">{net_spread_percent.toFixed(3)}%</div>
      </td>
      <td className="p-3 text-sm text-center">
        <div className="font-mono text-xl font-bold text-green-400">${est_profit_usd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
      </td>
      <td className="p-3 text-sm">
        <div>{tested_size.amount.toLocaleString()} {tested_size.symbol}</div>
        <div className="text-xs text-gray-400">~${tested_size.usd.toLocaleString()}</div>
      </td>
      <td className="p-3 text-sm text-center">
        <LiquidityBadge liquidity={liquidity} />
      </td>
      <td className="p-3 text-sm">
        <div className="flex items-center group relative">
          <InfoIcon className="w-5 h-5 text-gray-400" />
          <div className="absolute bottom-full mb-2 w-64 p-2 bg-gray-800 border border-gray-600 rounded-md text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            {notes}
          </div>
        </div>
      </td>
      <td className="p-3 text-sm">
        <div className="flex space-x-3 justify-center">
          <a href={pool_links.buy} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400" title={`Buy on ${buy_dex}`}>
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
          <a href={pool_links.sell} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400" title={`Sell on ${sell_dex}`}>
            <ExternalLinkIcon className="w-5 h-5" />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ArbitrageRow;
