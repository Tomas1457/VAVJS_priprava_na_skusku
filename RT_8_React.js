import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function But(props) {
  return <button onClick={props.onclick}>Submit</button>;
}

function Out(props) {
  return <div>{props.text}</div>;
}

function Inp(props) {
  return <input type="text" onChange={(ev) => props.onchange(ev.target.value)} />;
}

function App() {
  const [text, setText] = useState("");
  const [visibleText, setVisibleText] = useState("");

  return (
    <div> 
      <Inp onchange={(val) => setText(val)} />
      <But onclick={() => setVisibleText(text)} />                      // pri pridani nejakeho textu <But onclick={() => setVisibleText(visibleText + " " + text)} />
      <Out text={visibleText} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
