"use client";
import React from "react";

const ClickableOptions = () => {
  const [active, setActive] = React.useState("Overview");

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  return (
    <div className="flex items-center overflow-x-auto gap-8 w-full bg-transparent border-b-2 border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-3 tablet:text-base text-sm border-b-4 font-semibold whitespace-nowrap ${
            active === tab
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-700"
          }`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default ClickableOptions;
