import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SentimentCard from "./SentimentCard";

export function SentimentCarousel() {
  const Sentiments = [
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! ",
      icon: <HiOutlineNewspaper />,
      iconBgColor: "bg-red-700",
      color: "bg-[#fecdd3]",
    },
    {
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! ",
      icon: <BsGraphUpArrow />,
      iconBgColor: "bg-green-700",
      color: "bg-[#eef9f4]",
    },
    {
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      icon: <HiOutlineNewspaper />,
      iconBgColor: "bg-blue-500",
      color: "bg-[#e0f2fe]",
    }
  ];
  return (
    <Carousel>
      <CarouselContent className="w-full flex gap-2 px-3">
        {Sentiments.map((sentiment, idx) => (
          <CarouselItem
            key={idx}
            className="px-1 tablet:px-2 tablet:basis-1/1 laptop:basis-1/2"
          >
            <SentimentCard {...sentiment} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
