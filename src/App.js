function App() {
  let clickMe1 = () => {
    console.log("Hello World");
  };

  let clickMe2 = (e) => {
    console.log(e);
  };

  let clickMe3 = (p1) => {
    console.log(p1);
  };

  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };
  return (
    <div>
      <h1>Btn Click Demo</h1>
      <input type="button" value="Click Me1" onClick={clickMe1} />
      <input type="button" value="Click Me2" onClick={clickMe2} />
      <input
        type="button"
        value="Click Me3"
        onClick={() => clickMe3("primary")}
      />
      <input
        type="button"
        value="Click Me4"
        onClick={(e) => clickMe4(e, "hello moto")}
      />
    </div>
  );
}

export default App;
