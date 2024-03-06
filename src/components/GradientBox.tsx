import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";


const GradientBox = () => {
  return (
    <div className="flex gap-3 lg:flex-row flex-col lg:items-center lg:justify-between lg:px-6 px-2 ">
        <div className="bg-gradient-to-br from-emerald-400  to-blue-700 flex items-center lg:justify-center px-4 py-3 rounded-md gap-3">
          <Image
            src="/assets/images/invest1.png"
            alt="Investing"
            height={150}
            width={150}
            className="rounded-md"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold">
              Calculate Your Profits
            </h3>
            <Button
              asChild
              className="w-fit bg-slate-100 text-black hover:bg-slate-100"
            >
              <Link href="#" className="font-semibold">
                Check Now <MdOutlineArrowForward />
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-400  to-red-600 flex items-center justify-center px-4 py-3 rounded-md gap-3">
          <Image
            src="/assets/images/invest1.png"
            alt="Investing"
            height={150}
            width={150}
            className="rounded-md"
          />
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold">
              Calculate Your Profits
            </h3>
            <Button
              asChild
              className="w-fit bg-slate-100 text-black hover:bg-slate-100"
            >
              <Link href="#" className="font-semibold">
                Check Now <MdOutlineArrowForward />
              </Link>
            </Button>
          </div>
        </div>
      </div>
  )
}

export default GradientBox