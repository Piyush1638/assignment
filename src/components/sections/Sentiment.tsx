import React from "react";
import { SentimentCarousel } from "../SentimentCarousel";

const Sentiment = () => {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-md px-5 py-6 my-3 w-full">
      <h3 className="text-2xl font-semibold text-black mb-5">Sentiment</h3>
      <div className="flex flex-col w-full">
        <h4 className="font-bold mb-3 flex items-center gap-2 text-lg text-gray-700 ">
          Key Events{" "}
          <span className="w-4 h-4 p-2 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs cursor-pointer">
            i
          </span>
        </h4>
        {/* <div className="w-full"> */}
          <SentimentCarousel />
        {/* </div> */}
      </div>
      <div className="flex flex-col w-full my-6">
        <h4 className="font-bold mb-3 flex items-center gap-2 text-lg text-gray-700 ">
          Analyst Estimates{" "}
          <span className="w-4 h-4 p-2 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs cursor-pointer">
            i
          </span>
        </h4>
        <div className="flex items-center tablet:gap-4 gap-2">
          <div>
            <div className="tablet:h-32 tablet:w-32 h-24 w-24 bg-green-100 rounded-full flex items-center justify-center tablet:mx-6">
              <h3 className="text-3xl  text-green-600">
                76<span className="text-lg ">%</span>
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full">
              <Progress
                title="Buy"
                percentage="76%"
                color="bg-green-600"
                width="w-[76%]"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Progress
                title="Hold"
                percentage="20%"
                color="bg-gray-300"
                width="w-[20%]"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Progress
                title="Sell"
                percentage="8%"
                color="bg-red-600"
                width="w-[8%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sentiment;

const Progress = ({ title, percentage, color, width }: any) => (
  <div className="flex items-center gap-3">
    <p className="tablet:text-base text-sm">{title}</p>
    <div className="w-full h-2 bg-white rounded-md relative flex items-center gap-2">
      <div className={`h-full ${color} ${width} rounded-md`} />
      <p className="tablet:text-base text-sm">{percentage}</p>
    </div>
  </div>
);
