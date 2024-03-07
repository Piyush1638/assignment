import Image from "next/image";
import React from "react";

const Coin = ({coin, name, graph, price}:any) => {
  console.log("Graph: ",graph)
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-lg max-w-[220px]  max-sm:w-[160px] px-3 py-3">
      <div className="flex items-center gap-1">
        <div className="h-6 w-6 text-2xl mr-2">
          <Image
            src={coin}
            alt="coin"
            height={40}
            width={40}
          />
        </div>
        <h3 className="text-xs tablet:text-lg">{name}</h3>
      </div>
      <div className="py-2 flex flex-col gap-2">
        <p className="tablet:text-xl text-base font-semibold">{price}</p>
        <div className="flex items-center justify-center">
          <Image
            src={graph}
            alt="graph"
            height={100}
            width={150}
            className="tablet:h-24 tablet:w-32 h-16 w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Coin;
