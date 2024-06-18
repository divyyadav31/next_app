import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";

const ShadCarousel = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Carousel</span>
      <Carousel className="m-4">
        <CarouselContent>
          <CarouselItem className="flex justify-center items-center">
            <Image src="next.svg" width={100} height={100} alt="Next image" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Image
              src="vercel.svg"
              width={100}
              height={100}
              alt="vercel image"
            />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Image src="next.svg" width={100} height={100} alt="Next image" />
          </CarouselItem>
          <CarouselItem className="flex justify-center items-center">
            <Image
              src="vercel.svg"
              width={100}
              height={100}
              alt="vercel image"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ShadCarousel;
