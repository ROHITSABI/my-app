import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("Primary");

  let updateTheme = (p1 = "primary") => {
    theme = p1;
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
          onClick={() => updateTheme("primary")}
        />
        <input
          className="btn btn-success"
          type="button"
          value="Success Theme"
          onClick={() => updateTheme("success")}
        />
        <input
          className="btn btn-danger"
          type="button"
          value="Danger Theme"
          onClick={() => updateTheme("danger")}
        />
      </div>
    </div>
  );
}

export default App;
