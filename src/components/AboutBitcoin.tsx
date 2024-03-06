import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import GradientBox from "./GradientBox";

const AboutBitcoin = () => {
  const content =
    "For some writers, it isn't getting the original words on paper that's the challenge, but rewriting the first and second drafts. Using the random paragraph generator can be a good way to get into a rewriting routine before beginning the project. In this case, you take the random paragraph and rewrite it so it retains the same meaning, but does so in a better and more concise way. Beginning the day doing this with a random paragraph can make the rewriting of an article, short story, or chapter of a book much easier than trying to begin directly with it.";

  return (
    <div className="flex flex-col gap-3 bg-white rounded-md px-5 py-6 my-3">
      <h3 className="text-2xl font-semibold text-black mb-5">About Bitcoin</h3>
      <div className="flex flex-col">
        <h4 className="font-bold mb-3">What is Bitcoin?</h4>
        <p>
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <Separator />

      <div className="flex flex-col">
        <h4 className="font-bold mb-3">Lorem ipsum dolor sit amet.</h4>
        <Paragraph content={content} />
        <Paragraph content={content} />
        <Paragraph content={content} />
      </div>

      <Separator />

      <div>
        <h3 className="text-2xl font-semibold text-black my-5">
          Already Holding Bitcoin ?
        </h3>
        <GradientBox />
      </div>

      <Separator />

      <p className="my-6">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default AboutBitcoin;

const Paragraph = ({ content }: any) => <p className="my-5">{content}</p>;
