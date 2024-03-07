import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="flex flex-col gap-3 bg-white rounded-md px-5 py-6 my-3">
      <h3 className="text-2xl font-semibold text-black mb-5">Team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam
        tempora explicabo reprehenderit repellat ad deserunt quaerat, neque
        voluptas quo?
      </p>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
    </section>
  );
};

export default Team;

const TeamMember = () => (
  <div className="bg-[#ebf3fb] px-4 py-2 rounded-xl flex tablet:flex-row flex-col items-center justify-center gap-4">
    <div className="w-1/2 flex flex-col justify-center items-center">
      <Image
        src="/assets/images/profile.jpg"
        height={80}
        width={100}
        alt="profile"
        className="object-cover my-3 h-[150px] w-[150px] aspect-[3/2] rounded-xl"
      />
      <h3 className="font-semibold ">John Smith</h3>
      <p>Designation here</p>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eveniet
      magni cum nostrum unde! Dolores nobis numquam ex at voluptatibus, quis ut
      omnis reprehenderit voluptas? Excepturi, nemo? Vel quam recusandae,
      aliquam nam maxime porro provident commodi numquam atque. Dolore,
      consequuntur.
    </p>
  </div>
);
