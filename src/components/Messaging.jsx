import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Messaging.css";
import Navbar from "../pages/Navbar";
import Loading from "./Job-listing/Loading";
import { fetchMessages } from "../redux/messages/messages";

const Messages = () => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const messagesSelector = (state) => state.messages;

  const { loading, messages } = useSelector(messagesSelector);

  const dispatch = useDispatch();
  const chatMessagesRef = useRef(null);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      fetchPeople();
    }
  }, [currentUser]);

  const fetchPeople = async () => {
    try {
      const response = await fetch(`https://freelance-fusion-backend.vercel.app/api/users`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPeople(data);
      } else {
        console.error('Failed to fetch people');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() && selectedPerson) {
      const token = localStorage.getItem("token");
      const MESSAGES_API = "https://freelance-fusion-backend.vercel.app/api/messages";
      const response = await fetch(MESSAGES_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: selectedPerson.id,
          message: newMessage,
        }),
      });
      setNewMessage("");
      if (response.ok) {
        alert("Message sent successfully!");
        dispatch(fetchMessages());
      } else {
        alert("Failed to send message.");
      }
    }
  };

  if (loading || !messages || !people) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="people-list">
          {people.map((person) => (
            <div
              key={person.id}
              className="person"
              onClick={() => setSelectedPerson(person)}
            >
              {person.username}
            </div>
          ))}
        </div>
        <div className="chat-area">
          {selectedPerson ? (
            <>
              <div className="chat-header">
                Chat with {selectedPerson.username}
              </div>
              <div className="chat-messages" ref={chatMessagesRef}>
                {messages
                  .filter(
                    (msg) =>
                      (msg.sender.email === currentUser.email &&
                        msg.recipient.email === selectedPerson.email) ||
                      (msg.sender.email === selectedPerson.email &&
                        msg.recipient.email === currentUser.email)
                  )
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`message ${
                        msg.sender.email === currentUser.email
                          ? "sent"
                          : "received"
                      }`}
                    >
                      <span className="text">{msg.message}</span>
                      <p className="message-time">{msg.time}</p>
                    </div>
                  ))}
              </div>
              <div className="chat-form">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message"
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          ) : (
            <div className="chat-header">Select a person to chat with</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Messages;
