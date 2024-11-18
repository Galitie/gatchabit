import React from "react";
import Nav from "../(components)/Nav";
import Gacha from "../(components)/Gacha/Gacha";

const GachaPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <Gacha />
    </div>
  );
};

export default GachaPage;
