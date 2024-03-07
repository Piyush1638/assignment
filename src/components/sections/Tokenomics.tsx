"use client"
import React from "react";

const Tokenomics = () => {
    const [investerPercentage, setInvesterPercentage] = React.useState(80);
    const [foundationPercentage, setFoundationPercentage] = React.useState(20);
  return (
    <section className="lg:flex hidden flex-col gap-3 bg-white rounded-md px-5 py-6 my-3">
      <h3 className="text-2xl font-semibold text-black mb-5">About Bitcoin</h3>
      <h4 className="font-semibold">Initial Distribution</h4>
      <div className="flex items-center gap-7">
        <div className="h-40 w-40 rounded-full bg-red-600 flex items-center justify-center">
          <div className="h-3/4 w-3/4 rounded-full bg-slate-50" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-start gap-3">
            <div className="h-4 w-4 rounded-full bg-red-600" />
            <p>Crowdsale Investor: {investerPercentage} %</p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="h-4 w-4 rounded-full bg-red-600" />
            <p>Foundation: {foundationPercentage} %</p>
          </div>
        </div>
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
