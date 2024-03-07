import { Separator } from "@/components/ui/separator";
import GradientBox from "../GradientBox";

const AboutBitcoin = () => {
  const content = `Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui`;
  return (
    <section className="flex flex-col gap-3 bg-white rounded-md px-5 py-6 my-3">
      <h3 className="text-2xl font-semibold text-black mb-5">About Bitcoin</h3>
      <div className="flex flex-col">
        <h4 className="font-bold mb-3">What is Bitcoin?</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptas nobis laudantium rem! Exercitationem reprehenderit voluptas
          quod maxime quae saepe harum enim, perferendis, vero possimus non
          eligendi quidem facilis modi? Est excepturi dolorum et totam tenetur
          placeat voluptatibus eaque. Fuga aspernatur praesentium doloremque
          quidem tempore reiciendis? Accusantium dolorum, corrupti, suscipit
          recusandae officia molestias praesentium saepe deleniti ullam dolores
          minima aliquid. Sapiente aspernatur dolore iusto asperiores unde vero
          magni velit fuga.
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
    </section>
  );
};

export default AboutBitcoin;

const Paragraph = ({ content }: any) => <p className="my-5">{content}</p>;
