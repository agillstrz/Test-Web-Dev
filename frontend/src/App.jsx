import { useState } from "react";
import "./App.css";
import SetUpRouter from "./routes/SetUpRouter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SetUpRouter />
    </>
  );
}

export default App;
