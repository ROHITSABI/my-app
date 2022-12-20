import { useState } from "react";

function App() {
  let title = `Map Demo`;
  let [list, setList] = useState([]);

  let addItem = () => {
    let newList = [...list, "Raipur"];

    setList(newList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Add Item into List" onClick={addItem} />

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
export default App;
