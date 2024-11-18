import Garden from "./(components)/Garden";
import TaskList from "./(components)/TaskList";
import TaskForm from "./(components)/TaskForm";
import Nav from "./(components)/Nav";
import GardenServer from "./(components)/GardenServer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Nav />
      <GardenServer>
        <Garden />
      </GardenServer>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
