import { FaEthereum } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa6";
import { GoTriangleUp } from "react-icons/go";


const TrendingCoins24 = () => {
  return (
    <div className="px-10 py-5 rounded-2xl bg-white">
      <h3 className="font-semibold text-xl">Trending Coins {"(24H)"}</h3>
      <div className="flex flex-col gap-3 my-4">
      <Coin coin={<FaBitcoin/>} name="Bitcoin" value="8.5"/>
      <Coin coin={<FaBitcoin/>} name="Bitcoin" value="8.5"/>
      <Coin coin={<FaEthereum/>} name="Ethereum" value="8.5"/>
      </div>
    </div>
  );
};

export default TrendingCoins24;

const Coin = ({ coin, name, value }: any) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-1">
      <div className="h-6 w-6 text-2xl">{coin}</div>
      <div className="font-medium">{name}</div>
    </div>
    <div className="text-green-500 font-semibold bg-green-300 px-3 py-2 rounded-md flex items-center gap-1 justify-center"><GoTriangleUp/>{value} %</div>
  </div>
);
