import React, { createContext, useContext, useState } from "react";
import "./styles.css";

const themeCtx = createContext();

export default function App() {
  const [mode, setMode] = useState("light");

  const styles = {
    background: mode === "light" ? "white" : "black"
  };
  return (
    <themeCtx.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List />
      </div>
    </themeCtx.Provider>
  );
}

// End goal
const List = () => (
  <ul>
    <ListItem value="Light 💡" />
    <ListItem value="Dark 🌙" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
  const [mode, setMode] = useContext(themeCtx);

  const styles = {
    background: mode === "light" ? "black" : "white",
    color: mode === "light" ? "white" : "black"
  };

  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light 💡" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};
