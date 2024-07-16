import React, { useState } from "react";
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
  const [createType, setCreateType] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client}>
        <ChannellListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          createType={createType}
          setIsEditing={setIsEditing}
        />
      </Chat>
    </div>
  );
}

export default App;
