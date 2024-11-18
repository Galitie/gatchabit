import Garden from "./(components)/Garden";
import TaskList from "./(components)/TaskList";
import TaskForm from "./(components)/TaskForm";
import Nav from "./(components)/Nav";
import Inventory from "./(components)/Inventory";
import InventoryServer from "./(components)/InventoryServer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <Garden />
      <InventoryServer>
        <Inventory />
      </InventoryServer>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
