import React from "react";
import "./App.css";
import Header from "./components/Header";
import InMemory from "./components/InMemory";
import Tribute from "./components/Tribute";

function App() {
  return (
    <div className="App bg-main">
      <main>
        <Header />
        <InMemory />
        <Tribute />
      </main>
    </div>
  );
}

export default App;
