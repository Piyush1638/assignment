"use client";
import React from "react";
import { SentimentCarousel } from "../SentimentCarousel";
import AnalyticsEstimateGraph from "../AnalyticsEstimateGraph";

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
        <SentimentCarousel />
      </div>
      <div className="flex flex-col w-full my-6">
        <h4 className="font-bold mb-3 flex items-center gap-2 text-lg text-gray-700 ">
          Analyst Estimates{" "}
          <span className="w-4 h-4 p-2 rounded-full bg-gray-500 flex items-center justify-center text-white text-xs cursor-pointer">
            i
          </span>
        </h4>
        <div className="w-full">
          <AnalyticsEstimateGraph />
        </div>
      </div>
    </section>
  );
};

export default Sentiment;
