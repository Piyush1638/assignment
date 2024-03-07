import * as React from "react";
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
  return (
    // <Carousel className="w-full">
    //   <CarouselContent className="">
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index} className="tablet:basis-1/2 basis-1/1 py-2">
    //           <SentimentCard
    //           color="bg-[#e0f2fe]"
    //           content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
    //           icon={<HiOutlineNewspaper/>}
    //           />
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <Carousel>
      <CarouselContent className="">
        <CarouselItem className="basis-1/2 py-2">
          <SentimentCard
            iconBgColor="bg-[#1d4ed8]"
            color="bg-[#bae6fd]"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
            icon={<HiOutlineNewspaper />}
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa."
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 py-2">
          <SentimentCard
            iconBgColor="bg-red-700"
            color="bg-[#fecdd3]"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
            icon={<HiOutlineNewspaper />}
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa."
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 py-2">
          <SentimentCard
            iconBgColor="bg-[#e0f2fe]"
            color="bg-[#bae6fd]"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
            icon={<HiOutlineNewspaper />}
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, ipsa."
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
