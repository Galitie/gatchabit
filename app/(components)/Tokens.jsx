"use client";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";

const Tokens = ({ user }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = () => {
    if (pathname === "/gacha") {
      router.push("/"); // Navigate to homepage
      // addItemToInventory();
    } else {
      router.push("/gacha"); // Navigate to /gacha
    }
  };

  // const addItemToInventory = async () => {
  //   const res = await fetch("/api/Users/Inventory", {
  //     method: "PUT",
  //     body: JSON.stringify({ itemId: "673a87669c5c0dce720cfebc" }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to create Item.");
  //   }
  // };

  return (
    <div>
      <button className="flex gap-2 btn" onClick={handleNavigation}>
        {pathname === "/gacha" ? (
          <p>
            Return to Garden:{" "}
            <FontAwesomeIcon icon={faCoins} className="text-yellow-400 pt-1" />{" "}
            {user.tokens}
          </p>
        ) : (
          <p>
            Use Tokens:{" "}
            <FontAwesomeIcon icon={faCoins} className="text-yellow-400 pt-1" />{" "}
            {user.tokens}
          </p>
        )}
      </button>
    </div>
  );
};

export default Tokens;
