import axios from "axios";
import { useEffect, useState } from "react";

function App() {
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
    let data = {
      message: message,
      messageTime: new Date(),
      reply: true,
    };
    await axios.post(url, data);
    setMessage("");
    getAllMessages();
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Enter The Messages"
        value={message}
        onChange={handleOnChangeMessage}
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
