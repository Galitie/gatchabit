import GachaCoinSlot from "./GachaCoinSlot";

const getItem = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST_URL + "/api/Items", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get item", error);
  }
};

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

const GachaCoinSlotServer = async () => {
  const { item } = await getItem();
  const user = await getUser();

  return (
    <>
      <GachaCoinSlot item={item} user={user} />
    </>
  );
};

export default GachaCoinSlotServer;
