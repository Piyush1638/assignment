"use client";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { GoTriangleUp } from "react-icons/go";

const Performance = () => {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-md tablet:px-5 px-2 py-2 tablet:py-6 my-3 w-full">
      <h3 className="text-2xl font-semibold text-black mb-5">Performance</h3>
      <div className="flex flex-col gap-5">
        <HighAndLow
          low="46,930.22"
          high="48,930.22"
          titleLeft="Today's Low"
          titleRight="Today's High"
        />
        <HighAndLow
          low="46,930.22"
          high="48,930.22"
          titleLeft="53W Low"
          titleRight="52W High"
        />
      </div>

      <h4 className="font-bold mt-8 flex items-center gap-2 text-lg text-gray-700 ">
        Fundamentals{" "}
        <span className="w-4 h-4 p-2 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs cursor-pointer">
          i
        </span>
      </h4>

      <div className="flex laptop:flex-row flex-col justify-between laptop:gap-10 w-full ">
        <div className="flex flex-col lg:w-1/2 w-full">
          <LabelValue label="Bitcoin Price" value="$16,815.46" />
          <Separator />
          <LabelValue
            label="24h Low/24h High"
            value="$16,382.07 / $16,874.12"
          />
          <Separator />
          <LabelValue label="7d Low/7d High" value="$16,382.07 / $16,874.12" />
          <Separator />
          <LabelValue label="Trading Volume" value="$23,249,202,782" />
          <Separator />
          <LabelValue label="Market Cap Rank" value="#1" />
          <Separator />
        </div>
        <div className="flex flex-col lg:w-1/2 w-full">
          <LabelValue label="Market Cap" value="$323,507,290,047" />
          <Separator />
          <LabelValue label="Market Cap Dominance" value="38.343%" />
          <Separator />
          <LabelValue label="Volume/Market Cap" value="0.0718" />
          <Separator />
          <LabelValue label="All-Time High" value="$23,249,202,782" />
          <Separator />
          <LabelValue label="All-Time Low" value="$323,507.76" />
          <Separator />
        </div>
      </div>
    </section>
  );
};

export default Performance;

const HighAndLow = ({
  low,
  high,
  titleLeft,
  titleRight,
}: {
  low: string;
  high: string;
  titleLeft: string;
  titleRight: string;
}) => (
  <div className="flex w-full justify-between items-center gap-3">
    <div className="w-[30%] flex flex-col gap-2">
      <h4 className="lg:text-sm text-xs text-gray-600 truncate">{titleLeft}</h4>
      <p className="font-medium tablet:text-base text-xs text-gray-600 ">
        {low}
      </p>
    </div>
    <div className="flex flex-col w-full relative top-4">
      <div className="h-[6px] w-full bg-gradient-to-r from-red-400 from-20% via-orange-500 via-30% to-emerald-300 rounded-md" />
      <div className="w-full flex items-center flex-col relative left-2/5">
        <GoTriangleUp />
        <h4 className="text-sm text-gray-600">$ {high}</h4>
      </div>
    </div>
    <div className="w-[30%]  flex flex-col items-center gap-2">
      <h4 className="lg:text-sm text-xs text-gray-600 ">{titleRight}</h4>
      <p className="font-medium tablet:text-base text-xs text-gray-600">
        {high}
      </p>
    </div>
  </div>
);

const LabelValue = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between py-3">
    <h4 className="font-medium lg:text-base text-sm text-gray-600">{label}</h4>
    {label === "All-Time High" || label === "All-Time Low" ? (
      <div className="flex flex-col justify-center">
        <h5 className="lg:text-sm text-sm font-semibold gap-2">
          {value}
          {label === "All-Time High" ? (
            <span className="text-green-500"> {79}%</span>
          ) : (
            <span className="text-red-500"> -{98}%</span>
          )}
        </h5>
        <h5 className="lg:text-sm text-xs font-medium">
          Nov 10, 2021 (about 1 year)
        </h5>
      </div>
    ) : (
      <h5 className="lg:text-base text-sm font-semibold">{value}</h5>
    )}
  </div>
);
