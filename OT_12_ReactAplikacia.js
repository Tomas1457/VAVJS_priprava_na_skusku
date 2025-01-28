import React, { useState } from "react";
import ReactDOM from "react-dom";

function But(props) {
  return <button onClick={props.onclick}>Submit</button>;
}

function Out(props) {
  return <div>{props.value}</div>;
}

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <But
        onclick={() =>
          fetch("http://localhost:8089/req")
            .then((data) => data.json())
            .then((response) => setText(response.resp))
        }
      />
      <Out value={text} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
