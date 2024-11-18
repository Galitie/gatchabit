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

const GachaCoinSlotServer = async () => {
  const { item } = await getItem();

  return (
    <>
      <GachaCoinSlot item={item} />
    </>
  );
};

export default GachaCoinSlotServer;
