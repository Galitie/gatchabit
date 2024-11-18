import React from "react";
import GachaCoinSlot from "./GachaCoinSlot";
import GachaCoinSlotServer from "./GachaCoinSlotServer";

const Gacha = async () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <svg
          width="400"
          height="600"
          viewBox="0 0 200 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Machine Body */}
          <rect
            x="40"
            y="175"
            width="120"
            height="100"
            rx="15"
            fill="#FF6666"
            stroke="#E53935"
            strokeWidth="3"
          />

          {/* Glass Capsule */}
          <circle cx="100" cy="120" r="60" fill="#D8D8D8" />
          <circle
            cx="100"
            cy="120"
            r="55"
            fill="#ffffff"
            stroke="#CCCCCC"
            strokeWidth="2"
          />

          {/* Capsules Inside */}
          <circle cx="80" cy="110" r="15" fill="#FFB74D" />
          <circle cx="110" cy="90" r="15" fill="#4FC3F7" />
          <circle cx="120" cy="130" r="15" fill="#FF8A65" />
          <circle cx="90" cy="140" r="15" fill="#81C784" />

          <circle cx="115" cy="100" r="15" fill="#FFB74D" />
          <circle cx="95" cy="85" r="15" fill="#4FC3F7" />
          <circle cx="70" cy="130" r="15" fill="#FF8A65" />
          <circle cx="130" cy="110" r="15" fill="#81C784" />

          <circle cx="115" cy="150" r="15" fill="#FFB74D" />
          <circle cx="95" cy="150" r="15" fill="#4FC3F7" />
          <circle cx="70" cy="100" r="15" fill="#FF8A65" />
          <circle cx="130" cy="130" r="15" fill="#81C784" />

          <circle cx="100" cy="120" r="15" fill="#FFB74D" />
          <circle cx="110" cy="115" r="15" fill="#4FC3F7" />
          <circle cx="105" cy="130" r="15" fill="#FF8A65" />
          <circle cx="80" cy="150" r="15" fill="#81C784" />
          {/* Output Slot */}
          <rect x="85" y="240" width="30" height="30" rx="5" fill="#444" />
        </svg>
      </div>
      <GachaCoinSlotServer>
        <GachaCoinSlot />
      </GachaCoinSlotServer>
    </>
  );
};

export default Gacha;
