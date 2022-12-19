function App() {
  let project = "Counter Application";
  let btnValue = "Click Me";

  let clickMe = () => alert();
  let increment = () => {};

  return (
    <div>
      <h1>{project}</h1>
      <input type="button" value={btnValue} onClick={clickMe} />
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
export default App;
