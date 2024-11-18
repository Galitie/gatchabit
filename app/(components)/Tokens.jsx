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
    } else {
      router.push("/gacha"); // Navigate to /gacha
    }
  };

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
