import { useState } from "react";

function App() {
  let [list, setList] = useState([
    { message: "Hi", messageTime: new Date() },
    { message: "How r u", messageTime: new Date() },
    { message: "I'm fine", messageTime: new Date() },
    { message: "Thanku", messageTime: new Date() },
  ]);

  let addMessage = () => {
    let newMessage = { message: "Looking Hot", messageTime: new Date() };
    list = [newMessage, ...list];
    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging Demo</h1>
      <input
        className="btn btn-success"
        type="button"
        value="Add Message"
        onClick={addMessage}
      />

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
