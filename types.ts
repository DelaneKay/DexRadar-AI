
export interface ArbitrageOpportunity {
  pair: string;
  chain: string;
  buy_dex: string;
  sell_dex: string;
  buy_price: number;
  sell_price: number;
  spread_percent: number;
  net_spread_percent: number;
  est_profit_usd: number;
  tested_size: {
    amount: number;
    symbol: string;
    usd: number;
  };
  liquidity: 'high' | 'medium' | 'low';
  pool_links: {
    buy: string;
    sell: string;
  };
  notes: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
