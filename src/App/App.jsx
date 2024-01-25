import "./App.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import { useEffect, useState } from "react";

function App() {
  const [, setDisab] = useState(false);

  useEffect(() => {
    const block12 = (r) => {
      if (r.ctrlKey && r.shiftKey && (r.key === "I" || r.key === "i")) {
        r.preventDefault();
      }
    };

    const handleF12 = (event) => {
      if (event.keyCode === 123) {
        event.preventDefault();
        setDisab(true);
      }
    };

    const fDisabFunc = () => {
      setDisab(false);
    };

    const disableContext = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContext);
    document.addEventListener("keydown", block12);
    window.addEventListener("keydown", handleF12);
    window.addEventListener("keyup", fDisabFunc);

    return () => {
      document.removeEventListener("contextmenu", disableContext);
      document.removeEventListener("keydown", block12);
      window.removeEventListener("keydown", handleF12);
      window.removeEventListener("keyup", fDisabFunc);
    };
  }, []);
  return (
    <div className="App container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
