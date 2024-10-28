import AddTaskOptions from "./(components)/AddTaskOptions";
import AddTaskInput from "./(components)/AddTaskInput";
import Garden from "./(components)/Garden";
import TaskList from "./(components)/TaskList";
import TaskForm from "./(components)/TaskForm";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Garden />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
