import React from "react";
import "./styles/styles.scss";
import { Button } from "antd";

function App() {
  return (
    <div className="app">
      <Button onClick={() => console.log("helo")}>Hello Button</Button>
    </div>
  );
}

export default App;
