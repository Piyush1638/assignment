import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { MdOutlineArrowForward } from "react-icons/md";

const BlueBox = () => {
  return (
    <div className="flex justify-center gap-4 items-center rounded-2xl flex-col bg-[#2051F4] px-10 py-5">
      <h3 className="text-xl font-bold text-white">Get Started with KoinX for FREE</h3>
      <p className="text-white">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <div>
        <Image
          src="/assets/images/img1.png"
          alt="graphic"
          height={70}
          width={200}
        />
      </div>
      <Button className="bg-slate-100 hover:bg-slate-100 w-fit text-black font-semibold flex items-center justify-center gap-2">
        Get Started for FREE <MdOutlineArrowForward />
      </Button>
    </div>
  );
};

export default BlueBox;
