import { useState } from "react";

function App() {
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
  );
}

export default App;
