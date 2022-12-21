import { useState } from "react";

function App() {
  let [list] = useState(["delhi", "bangalore", "pune"]);

  return (
    <div>
      <h1>Map Demo</h1>
      {list.map((item) => (
        <div className="alert alert-primary">{item}</div>
      ))}
    </div>
  );
}

export default App;
