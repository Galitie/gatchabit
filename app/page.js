import AddTaskInput from "./(components)/AddTaskInput";
import Garden from "./(components)/Garden";
import TaskList from "./(components)/TaskList";

const Home = () => {
  return (
    <div>
      <Garden />
      <AddTaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
