"use client";
import React from "react";
import Coin from "../Coin";
import { useTrendingCoinsStore } from "../../../store/useTrendingCoinsStore";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const TWEEN_FACTOR = 4.2;

const TrendingCoins = () => {
  const [tweenValues, setTweenValues] = React.useState<number[]>([]);
  const [api, setApi] = React.useState<CarouselApi>();
  const { trendingCoins } = useTrendingCoinsStore();
  const coins = trendingCoins?.coins;

  const onScroll = React.useCallback(() => {
    if (!api) return;

    const engine = api.internalEngine();
    const scrollProgress = api.scrollProgress();

    const styles = api.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [api, setTweenValues]);

  React.useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <section className="flex flex-col gap-3 bg-white rounded-md px-10 w-full desktop:pb-10">
      <h3 className="text-2xl font-semibold text-black mb-5">
        Trending Coins
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {coins?.map((coin: any, index: number) => (
            <CarouselItem
              key={index}
              className="desktop:basis-1/5 tablet:basis-1/3 basis-1/2  py-2"
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <Coin
                coin={coin.item.small}
                name={coin.item.name}
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

export default TrendingCoins;

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
