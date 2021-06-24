import React from "react";
import "./App.css";
import Header from "./components/Header";
import InMemory from "./components/InMemory";
import Tribute from "./components/Tribute";
import TributeText from "./components/TributeText";
import Acknowledge from "./components/Acknowledge";
import CopdBlock from "./components/CopdBlock";

function App() {
  return (
    <div className="App bg-main">
      <main>
        <Header />
        <InMemory />
        <Tribute />
        <TributeText />
        <Acknowledge />
        <CopdBlock />
      </main>
    </div>
  );
}

export default App;
