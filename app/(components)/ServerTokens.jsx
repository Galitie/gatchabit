// components/ServerTokens.js (Server Component)
import Tokens from "./Tokens";

async function getUser() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Users", {
      cache: "no-store", // Ensure fresh data
    });
    if (!res.ok) throw new Error("Failed to fetch user data");
    return res.json();
  } catch (error) {
    console.error("Failed to fetch user", error);
    return null;
  }
}

const ServerTokens = async () => {
  const user = await getUser();

  if (!user) {
    return <p>Failed to load user data.</p>;
  }

  return <Tokens user={user} />;
};

export default ServerTokens;
