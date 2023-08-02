import "./App.css";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AddTask />

      <TaskList />
    </div>
  );
}

export default App;
