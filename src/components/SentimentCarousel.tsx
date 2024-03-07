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
    // <Carousel className="w-full max-w-sm">
    //   <CarouselContent className="-ml-1">
    //     {Array.from({ length: 1 }).map((_, index) => (
    //       <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/2">
    //         <div className="p-1">
    //           <SentimentCard
    //           color="bg-[#bae6fd]"
    //           content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
    //           icon={<HiOutlineNewspaper/>}
    //           />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4 md:basis-1/1 lg:basis-1/2">
        <CarouselItem className="pl-2 md:pl-4">
          <SentimentCard
            color="bg-[#bae6fd]"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
            icon={<HiOutlineNewspaper />}
          />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
        <SentimentCard
              color="bg-[#bae6fd]"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
              icon={<HiOutlineNewspaper/>}
              />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">
        <SentimentCard
              color="bg-[#bae6fd]"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, assumenda vel repudiandae suscipit tempora aliquid provident perferendis molestias nemo corrupti! Quod dicta, asperiores fuga possimus odio ea beatae quibusdam temporibus! "
              icon={<HiOutlineNewspaper/>}
              />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
