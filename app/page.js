import TaskList from "./(components)/TaskList";
import TaskForm from "./(components)/TaskForm";
import Nav from "./(components)/Nav";
import GardenServer from "./(components)/GardenServer";
import InventoryServer from "./(components)/InventoryServer";
import { DataProvider, useData } from "./(components)/DataContext";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <DataProvider>
        <Nav />
        <GardenServer sharedData={useData} />
        <InventoryServer sharedData={useData} />
        <TaskForm />
        <TaskList />
      </DataProvider>
    </div>
  );
};

export default Home;
