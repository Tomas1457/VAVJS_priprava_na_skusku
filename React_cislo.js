import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function But(props) {
  return <button onClick={props.onclick}>Pripočítať</button>;
}

function Out(props) {
  return <div>Aktuálny súčet: {props.value}</div>;
}

function Inp(props) {
  return (
    <input
      type="number"
      value={props.value}
      onChange={(ev) => props.onchange(ev.target.value)}
    />
  );
}

function App() {
  const [number, setNumber] = useState(0); // Hodnota z inputu
  const [sum, setSum] = useState(0); // Aktuálny súčet

  return (
    <div>
      <Inp value={number} onchange={(val) => setNumber(val)} />
      <But onclick={() => setSum(sum + Number(number))} />
      <Out value={sum} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




//pre nasobenie alebo scitavanie s nejakym k:

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function But(props) {
  return <button onClick={props.onclick}>Vynásobiť 3</button>;
}

function Out(props) {
  return <div>Výsledok: {props.value}</div>;
}

function Inp(props) {
  return (
    <input
      type="number"
      value={props.value}
      onChange={(ev) => props.onchange(ev.target.value)}
    />
  );
}

function App() {
  const [number, setNumber] = useState(0); // Hodnota z inputu
  const [result, setResult] = useState(0); // Výsledok po násobení

  return (
    <div>
      <Inp value={number} onchange={(val) => setNumber(val)} />
      <But onclick={() => setResult(Number(number) * 3)} />
      <Out value={result} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
