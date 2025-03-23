import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header>
        <img src={viteLogo} alt="Vite logo" />
        <img src={reactLogo} alt="React logo" />
        <h1>Vite + React</h1>
      </header>

      <section>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </section>

      <footer>
        <p>Проект с обнуленными стилями</p>
      </footer>
    </main>
  );
}

export default App;
