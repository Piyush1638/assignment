import TrendingCoins24 from "@/components/sections/TrendingCoins24";
import BlueBox from "@/components/BlueBox";
import Team from "@/components/sections/Team";
import AboutBitcoin from "@/components/sections/AboutBitcoin";
import Tokenomics from "@/components/sections/Tokenomics";
import Sentiment from "@/components/sections/Sentiment";
import Performance from "@/components/sections/Performance";
import ClickableOptions from "@/components/ClickableOptions";
import CoinChart from "@/components/sections/CoinChart";
import YouMayAlsoLike from "@/components/sections/YouMayAlsoLike";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import TrendingCoins from "@/components/sections/TrendingCoins";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <div className="h-full w-full bg-slate-100 flex flex-col items-center justify-between py-9 px-5 laptop:px-8 laptop:py-24">
        <div className="flex items-center justify-start w-full">
          <p className="flex items-center font-semibold text-sm text-gray-600 mt-12 mb-5 tablet:mt-0 tablet:mb-3">
            <span className="font-normal"> Cryptocurriences</span>{" "}
            <MdKeyboardDoubleArrowRight />
            <span className="font-semibold text-black">Bitcoin</span>
          </p>
        </div>
        <div className="flex desktop:flex-row flex-col justify-center gap-4 w-full">
          <div className="desktop:w-[95%] w-full">
            <CoinChart />
            <ClickableOptions />
            <Performance />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <Team />
          </div>
          <div className="flex flex-col desktop:w-2/5 w-full gap-5">
            <BlueBox />
            <div className="desktop:block hidden">
              <TrendingCoins24 />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop:block hidden w-full bg-white">
        <YouMayAlsoLike />
        <TrendingCoins />
      </div>
      <div className="desktop:hidden block w-full bg-white mt-10">
        <TrendingCoins24 />
      </div>
    </main>
  );
}
