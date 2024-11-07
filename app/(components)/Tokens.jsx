"use client";
import React from "react";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const getUser = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Users", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get user", error);
  }
};

const Tokens = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const changePage = (e) => {
    e.preventDefault();
    pathname == "/gacha" ? router.push("/") : router.push("/gacha");
  };

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <button className="flex gap-2 btn" onClick={changePage}>
        {pathname == "/gacha" ? (
          <p>Return to Garden</p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faCoins} className="text-yellow-400 pt-1" />{" "}
            Use Tokens: {user.tokens}
          </p>
        )}
      </button>
    </div>
  );
};

export default Tokens;
