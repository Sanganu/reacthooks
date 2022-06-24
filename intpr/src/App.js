import './App.css';
import React,{useState,createContext} from "react";
// import TaskList from "./Components/TaskList";
import NavMenu  from "./Components/NavMenu";
import Concept from "./Components/Concepts";

export const ContextNavState = createContext(null)

function App() {
  const [currentHook,setCurrentHook]=useState("Home")
  return (
    <div className="App container">
      <header className="text-center bg-warning text-white">
        <h1>REACT Hooks </h1>
      </header>
     
      <main className="container">
      <ContextNavState.Provider value={{currentHook,setCurrentHook}}>
        <section className="row">
          <aside className="col-2">
             <NavMenu />
          </aside>
          <aside className="col-9">
             <Concept />
          </aside>
        </section>
      </ContextNavState.Provider>
     
      </main>

    </div>
  );
}

export default App;
