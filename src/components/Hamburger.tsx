import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Hamburger = () => {
  const navLinks = ["Crypto Taxes", "Free Tools", "Resource Center"];
  return (
    <Sheet>
      <SheetTrigger className="text-2xl flex items-center justify-center mx-6">
        <RxHamburgerMenu />
      </SheetTrigger>
      <SheetContent className="flex justify-start flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-start my-5">
            <Button className="bg-gradient-to-r w-full from-blue-500 to-blue-700">
              Get Started
            </Button>
          </SheetTitle>
          <Separator />
          <SheetDescription>
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className=" font-semibold cursor-pointer text-start transition-all ease-linear hover:scale-[1.05]"
                >
                  {link}
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Hamburger;
