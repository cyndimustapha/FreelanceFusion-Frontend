import React from "react";
import { Chat } from "stream-chat-react";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";
import "./App.css";

import ChannellListContainer from "./components/ChannellListContainer";
import ChannelContainer from "./components/ChannelContainer";
const apiKey = `nf7gevqn84xk`;
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
