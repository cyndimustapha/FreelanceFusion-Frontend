import React from "react";
import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import "./App.css";

import ChannellListContainer from "./components/ChannellListContainer";
import ChannelContainer from "./components/ChannelContainer";
import Auth from "./components/Auth";

const apiKey = `nf7gevqn84xk`;
const client = StreamChat.getInstance(apiKey);
const authToken = false;

function App() {
  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <ChannellListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
