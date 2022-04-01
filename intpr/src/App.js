import logo from './logo.svg';
import './App.css';
import TaskList from "./Components/TaskList";
import HookUseState from "./Components/HookUseState";
import HookUseReducer from "./Components/HookUseReducer"
function App() {
  return (
    <div className="App container">
    <HookUseState />
    <HookUseReducer/>
     {/* <TaskList /> */}
    </div>
  );
}

export default App;
