import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  let inputRef = useRef();
  let [title] = useState("API DEMO");
  let [message, setMessage] = useState("");
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  let handleOnChangeMessage = (e) => {
    message = e.target.value;
    setMessage(message);
  };
  let getAllMessages = async () => {
    let url = "http://localhost:3001/messages";
    let response = await axios.get(url);

    messageList = [...response.data];
    setMessageList(messageList);
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001/message`;
    if (!inputRef.current.checkValidity()) {
      alert("Invalid");
      return;
    }
    let data = {
      message: message,
      messageTime: new Date(),
      reply: true,
    };
    await axios.post(url, data);
    setMessage("");
    getAllMessages();
  };

  let checkEnterCode = (e) => {
    if (e.keyCode == 13) {
      createNewMessage();
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Enter The Messages"
        value={message}
        onChange={handleOnChangeMessage}
        onKeyUp={checkEnterCode}
        ref={inputRef}
        required
        minLength={2}
      />

      <input
        type="button"
        value="Make API/AJAX Post Call"
        onClick={createNewMessage}
      />

      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
