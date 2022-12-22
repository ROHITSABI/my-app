import axios from "axios";
import { useState } from "react";

function App() {
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  let getAllMessages = async () => {
    let url = "http://localhost:3001/messages";
    let response = await axios.get(url);

    messageList = [...response.data];
    setMessageList(messageList);
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001/message`;
    let data = {
      message: "Test Message",
      messageTime: new Date(),
      reply: true,
    };
    await axios.post(url, data);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="Make API/AJAX Call"
        onClick={getAllMessages}
      />

      <input
        type="button"
        value="Make API/AJAX Post Call"
        onClick={createNewMessage}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}
export default App;
