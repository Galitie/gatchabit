import Garden from "./(components)/Garden";
import TaskList from "./(components)/TaskList";
import TaskForm from "./(components)/TaskForm";
import Nav from "./(components)/Nav";
import GardenServer from "./(components)/GardenServer";
import InventoryServer from "./(components)/InventoryServer";
import Inventory from "./(components)/Inventory";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <GardenServer>
        <Garden />
      </GardenServer>
      <InventoryServer>
        <Inventory />
      </InventoryServer>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
