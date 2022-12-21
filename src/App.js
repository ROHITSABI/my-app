import { useState } from "react";

function App() {
  let [message, setMessage] = useState("abc");
  let updateMessage = (e) => {
    message = e.target.value;

    setMessage(message);
  };

  return (
    <div>
      <h1>Working With Input</h1>
      <input
        type="text"
        placeholder="Enter Message"
        value={message}
        onChange={updateMessage}
      />
      <h1>{message}</h1>
    </div>
  );
}

export default App;
