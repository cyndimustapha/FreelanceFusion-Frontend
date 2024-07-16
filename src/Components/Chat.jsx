import React from "react";
import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

import ChannellListContainer from "./ChannellListContainer";
import ChannelContainer from "./ChannelContainer";
const apiKey = `nf7gevqn84xk`;
const client = StreamChat.getInstance(apiKey);

const MyChat = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <ChannellListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default MyChat;
