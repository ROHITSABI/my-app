import { useState } from "react";

function App() {
  //let counter = useState(100);

  let [counter, setCounter] = useState(100);
  let increment = () => {
    counter = counter + 1;

    setCounter(counter);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <h1>{counter}</h1>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
export default App;
