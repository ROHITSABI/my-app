import { useState } from "react";

function App() {
  let [list] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "How r u", messageTime: new Date() },
    { message: "I'm Good", messageTime: new Date() },
    { message: "Thanku", messageTime: new Date() },
  ]);

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging Demo</h1>

      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-4">
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
