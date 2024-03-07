import React from "react";
import { HiOutlineNewspaper } from "react-icons/hi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SentimentCard from "./SentimentCard";

export function SentimentCarousel() {
  return (
    <Carousel>
      <CarouselContent className="w-full flex gap-2 px-3">
        {Array.from({ length: 5 }).map((coin: any, index: number) => (
          <CarouselItem
            key={index}
            className="px-2 tablet:basis-1/2"
          >
            <SentimentCard
              iconBgColor="bg-red-700"
              color="bg-[#fecdd3]"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
              icon={<HiOutlineNewspaper />}
              title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa."
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

