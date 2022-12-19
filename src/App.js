function App() {
  let counter = 100;
  let increment = () => {
    counter = counter + 1;
    console.log(counter);
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
