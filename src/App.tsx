import React from "react";

import { TaxSystemProvider } from "./app-state/tax-system";

import Header from "./modules/header";
import Form from "./modules/form/Form";
import Graph from "./modules/graph/Graph";

import "./styles/styles.scss";

function App() {
  return (
    <div className="app">
      <TaxSystemProvider>
        <Header />
        <main className="main">
          <Form />
          <Graph />
        </main>
      </TaxSystemProvider>
    </div>
  );
}

export default App;
