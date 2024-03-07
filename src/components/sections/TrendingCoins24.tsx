"use client";
import Image from "next/image";
import React from "react";
import { GoTriangleUp } from "react-icons/go";
import { useTrendingCoinsStore } from "../../../store/useTrendingCoinsStore";

const TrendingCoins24 = () => {
  const { trendingCoins, fetchTrendingCoins } = useTrendingCoinsStore();
  React.useEffect(() => {
    const fetchData = async () => {
      await fetchTrendingCoins();
    };

    fetchData();
  }, [fetchTrendingCoins]);

  return (
    <section className="tablet:px-10 px-5 tablet:py-5 py-2 rounded-2xl bg-white">
      <h3 className="font-semibold text-xl">Trending Coins {"(24H)"}</h3>
      <div className="flex flex-col gap-3 my-4">
        <Coin
          coin={trendingCoins?.coins[0]?.item.small}
          name={trendingCoins?.coins[0]?.item.name}
          value="8.5"
        />
        <Coin
          coin={trendingCoins?.coins[1]?.item.small}
          name={trendingCoins?.coins[1]?.item.name}
          value="8.5"
        />
        <Coin
          coin={trendingCoins?.coins[2]?.item.small}
          name={trendingCoins?.coins[2]?.item.name}
          value="8.5"
        />
      </div>
    </section>
  );
};

export default TrendingCoins24;

const Coin = ({ coin, name, value }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      {coin ? (
        <div className="h-6 w-6 text-2xl mr-2">
          <Image src={coin} alt="coin" height={40} width={40} />
        </div>
      ) : null}
      <div className="font-medium">{name}</div>
    </div>
    <div className="text-green-500 font-semibold bg-green-50 tablet:px-3 tablet:py-2 px-2 py-1  rounded-md flex items-center gap-1 justify-center">
      <GoTriangleUp /> {value} %
    </div>
  </div>
);
