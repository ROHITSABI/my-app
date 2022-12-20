function App() {
  let title = "Map Demo";
  let list = ["Bhilai", "Raipur", "Bilaspur"];

  return (
    <div>
      <h1>{title}</h1>
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}
export default App;
