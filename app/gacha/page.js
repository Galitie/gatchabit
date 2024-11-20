import React from "react";
import Nav from "../(components)/Nav";
import Gacha from "../(components)/Gacha/Gacha";
import InventoryServer from "../(components)/InventoryServer";
import Inventory from "../(components)/Inventory";

const GachaPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <Gacha />
      <InventoryServer>
        <Inventory />
      </InventoryServer>
    </div>
  );
};

export default GachaPage;
