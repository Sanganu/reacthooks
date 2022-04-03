import logo from './logo.svg';
import './App.css';
import TaskList from "./Components/TaskList";
import HookUseState from "./Components/HookUseState";
import HookUseReducer from "./Components/HookUseReducer";
import HookUseEffect from "./Components/HookUseEffect";
function App() {
  return (
    <div className="App container">
      <header className="text-center bg-warning text-white">
        <h1>REACT Hooks </h1>
      </header>
      <section className="container">
        <h2>Rules of Hook</h2>
        <p>Only Call Hooks at the Top Level
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. </p>
      </section>
      <main className="container">
        <h3>Hook Examples</h3>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
      </main>
      <main className="container">
        {/* <TaskList /> */}
      </main>
    </div>
  );
}

export default App;
