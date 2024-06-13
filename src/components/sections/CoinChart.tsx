"use client";
import Image from "next/image";
import React from "react";
import { GoTriangleUp } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import TradingViewWidget from "../TradingViewWidget";

const CoinChart = () => {
  const [coinData, setCoinData] = React.useState<any>(null);
  const [selectedOption, setSelectedOption] = React.useState<any>("1H");
  const [isLoading, setIsLoading] = React.useState(true);

  const options = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  const handleClick = (option: any) => {
    setSelectedOption(option);
  };

  const fetchCoinData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
      );
      const data = await response.json();
      setCoinData(data.bitcoin);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    fetchCoinData();
  }, []);

  // Simulating the TradingViewWidget loading process
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second load time for the TradingViewWidget
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col gap-3 laptop:bg-white rounded-md laptop:px-5 laptop:py-6 mb-3 w-full">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/bitcoin.png"
            alt="bitcoin"
            height={40}
            width={40}
          />
          <h3 className="text-2xl font-semibold text-black flex items-center gap-3">
            Bitcoin <span className="text-sm font-bold text-gray-700">BTC</span>
          </h3>
        </div>
        <div className="px-3 py-3 bg-gray-400 rounded-md">
          <p className="text-white">Rank #1</p>
        </div>
      </div>

      <div className="bg-white laptop:bg-transparent laptop:px-0 laptop:py-0 px-6 py-2">
        <div className="flex items-center my-4">
          <h3 className="tablet:text-2xl text-xl font-bold">
            {coinData?.usd.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h3>
          <div className="flex items-center">
            <div className="bg-green-50 tablet:text-base text-sm laptop:mx-10 mx-4 px-2 py-1 rounded-md text-green-700 font-semibold flex items-center gap-1">
              <GoTriangleUp />
              {coinData?.usd_24h_change.toFixed(2)}%
            </div>
            <p className="text-sm">{"(24H)"}</p>
          </div>
        </div>
        <div className="mb-7">
          <h3 className="font-medium text-black">
            {coinData?.inr.toLocaleString("en-IN", {
              style: "currency",
              currency: "INR",
            })}
          </h3>
        </div>
        <Separator />

        <div className="flex laptop:items-center laptop:flex-row flex-col laptop:justify-between justify-start my-4">
          <h3 className="font-semibold">Bitcoin Price Chart {"(USD)"}</h3>
          <div className="flex items-center laptop:gap-6 gap-3">
            {options.map((option) => (
              <p
                key={option}
                className={`text-sm ${
                  selectedOption === option
                    ? "font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-lg cursor-pointer"
                    : "cursor-pointer"
                }`}
                onClick={() => handleClick(option)}
              >
                {option}
              </p>
            ))}
          </div>
        </div>
        <div className="w-full h-5/6 tablet:h-[500px] relative tablet:mt-10 tablet:mb-4 my-8">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <div className="h-10 w-10 rounded-full animate-spin border-b border-gray-700" />
            </div>
          ) : (
            <TradingViewWidget />
          )}
        </div>
      </div>
    </section>
  );
};

export default CoinChart;
