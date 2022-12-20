import "./App.css";

function App() {
  let myStyle = { color: "red", background: "purple" };

  return (
    <div>
      <h1 className="beautify">Hello Universe</h1>
      <h1 style={myStyle}>Hello World</h1>
      <h1 style={{ color: "white", background: "red" }}>Hello</h1>
    </div>
  );
}

export default App;
