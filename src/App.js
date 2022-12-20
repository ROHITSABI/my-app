import { useState } from "react";

function App() {
  let username = "Rohit";
  let [city, setCity] = useState("Bhilai");

  let clickMe = () => {
    alert();
  };

  let updateCity = () => {
    city = "Raipur" + city;

    setCity(city);
  };

  return (
    <div>
      <h1>{city}</h1>

      <input type="button" value="updateCity" onClick={updateCity} />
      <h1>Hello</h1>
      <input type="button" value="Click On Button" onClick={clickMe} />
    </div>
  );
}
export default App;
