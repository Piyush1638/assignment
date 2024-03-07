import { create } from 'zustand';

// Define the state type
type TrendingCoinsState = {
  trendingCoins: any | null;
  fetchTrendingCoins: () => Promise<void>;
};

// Create a Zustand store
export const useTrendingCoinsStore = create<TrendingCoinsState>((set) => ({
  trendingCoins: null,
  fetchTrendingCoins: async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      console.log("Trending Coins: ", data);
      set({ trendingCoins: data });
    } catch (error:any) {
      console.error(error.message);
    }
  },
}));