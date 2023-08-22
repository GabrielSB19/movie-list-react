import { useState } from "react";
import MyRoutes from "./routes/Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "40px",
          }}
        >
          Movies
        </h1>
      </header>
      <MyRoutes />
    </>
  );
}

export default App;
