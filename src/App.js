import { useState } from "react";

function App() {
  let [list] = useState([1, 1, 1, 1]);
  let [theme, setTheme] = useState("Primary");

  let primaryTheme = () => {
    theme = "primary";

    setTheme(theme);
  };

  let successTheme = () => {
    theme = "success";

    setTheme(theme);
  };

  let dangerTheme = () => {
    theme = "danger";

    setTheme(theme);
  };
  return (
    <div>
      <div className="sticky-top">
        <h1 className={`bg-${theme} text-dark p-3`}>BootStrap Styling</h1>
        <input
          className="btn btn-primary"
          type="button"
          value="Primary Theme"
          onClick={primaryTheme}
        />
        <input
          className="btn btn-success"
          type="button"
          value="Success Theme"
          onClick={successTheme}
        />
        <input
          className="btn btn-danger"
          type="button"
          value="Danger Theme"
          onClick={dangerTheme}
        />
      </div>

      {list.map((item) => (
        <div className={`alert alert-${theme} my-1`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          unde dolore corporis enim nobis nostrum officiis ab obcaecati? Odit
          dolorem soluta commodi, aperiam repellat dolores sunt numquam? Ut,
          ipsa aspernatur!
        </div>
      ))}
    </div>
  );
}

export default App;
