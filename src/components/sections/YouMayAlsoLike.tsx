"use client";
import React from "react";
import Coin from "../Coin";
import { useTrendingCoinsStore } from "../../../store/useTrendingCoinsStore";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const YouMayAlsoLike = () => {
  const { trendingCoins } = useTrendingCoinsStore();
  const coins = trendingCoins?.coins;

  return (
    <section className="flex flex-col gap-3 bg-white rounded-md desktop:px-10 py-4 my-2 w-full">
      <h3 className="text-2xl font-semibold text-black mb-5">
        You May Also Like
      </h3>
      <Carousel>
        <CarouselContent>
          {coins?.map((coin: any, index: number) => (
            <CarouselItem
              key={index}
              className="desktop:basis-1/5 tablet:basis-1/3 basis-1/2  py-2"
            >
              <Coin
                coin={coin.item.small}
                name={coin.item.symbol}
                price={coin.item.data.price}
                graph={`${coin.item.data.sparkline}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default YouMayAlsoLike;

// {coins?.map((coin: any, index: number) => (
//   <CarouselItem
//     key={index}
//     className="md:basis-1/3  xl:basis-1/5 py-2"
//   >
//     <Coin
//       coin={coin.item.small}
//       name={coin.item.name}
//       price={coin.item.data.price}
//       graph={`${coin.item.data.sparkline}`}
//     />
//   </CarouselItem>
// ))}
