import React from "react";
import "./styles/styles.scss";
import Header from "./modules/header";
import Form from "./modules/form/Form";
import Graph from "./modules/graph/Graph";
import "./styles/styles.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Form />
        <Graph />
      </main>
    </div>
  );
}

export default App;
