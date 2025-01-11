"use client";
import React from "react";
import DoughnutChart from "../DoughnutChart";

const Tokenomics = () => {
  const data = [
    {
      label: "Crowdsale investors",
      percentage: 80,
    },
    {
      label: "Foundation",
      percentage: 20,
    }
  ]
  return (
    <section className="tablet:flex hidden  flex-col gap-3 bg-white rounded-md px-5 py-6 my-3">
      <h3 className="text-2xl font-semibold text-black mb-5">Tokenomics</h3>
      <h4 className="font-semibold">Initial Distribution</h4>
      <div className="w-full flex items-center justify-start -my-24">
        <DoughnutChart distribution={data}/>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        voluptate exercitationem aspernatur corporis architecto nostrum nesciunt
        quisquam illo illum, aliquam harum asperiores sapiente soluta iure!
        Temporibus nisi labore obcaecati, at non rerum porro voluptas quis
        dignissimos, consequuntur delectus ipsum ipsa vitae reiciendis nesciunt
        accusamus quos eveniet. Impedit saepe quia exercitationem eos, nam
        voluptatum cupiditate quo atque inventore. Neque provident minima ea
        natus asperiores minus veritatis aut aspernatur error temporibus
        consectetur inventore nisi tempora repellendus corrupti quidem a
        distinctio suscipit repellat aperiam, ex, iste sunt! Exercitationem
        doloribus sint autem debitis sed accusantium voluptatibus, assumenda
        quo. Molestias quia voluptate dolorum magni porro!
      </p>
    </section>
  );
};

export default Tokenomics;
