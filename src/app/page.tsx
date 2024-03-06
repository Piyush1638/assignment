import TrendingCoins24 from "@/components/TrendingCoins24";
import BlueBox from "@/components/BlueBox";
import Team from "@/components/Team";
import AboutBitcoin from "@/components/AboutBitcoin";
import TradingViewWidget from "@/components/TradingViewWidget";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100 flex-col items-center justify-between p-5 md:px-10 md:py-24">
      <div className="flex items-center justify-start w-full">
        <p className="font-semibold text-sm text-gray-600">
          Cryptocurriences {">>"}{" "}
          <span className="font-semibold text-black">Bitcoin</span>
        </p>
      </div>
      <div className="flex lg:flex-row flex-col  justify-center gap-4 w-full">
        <div className="lg:w-[95%] w-full">
          {/* <div className="max-h-[1000rem] h-[700rem]">
            <TradingViewWidget />
          </div> */}
          <AboutBitcoin />
          <Tokenomics/>
          <Team />
        </div>
        <div className="flex flex-col lg:w-2/5 w-full gap-5">
          <BlueBox />
          <TrendingCoins24 />
        </div>
      </div>
    </main>
  );
}
