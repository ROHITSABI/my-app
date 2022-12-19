import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(50);
  let increment = () => {
    counter++;
    console.log(counter);

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
