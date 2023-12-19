import { useState, useEffect } from 'react';
import database from './firebase';
import { ref, onValue, push } from 'firebase/database';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Set up a real-time listener for messages
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      }
    });
  }, []);

  const handleSendMessage = () => {
    // Add a new message to the database
    if (newMessage.trim() !== '') {
      const messagesRef = ref(database, 'messages');
      push(messagesRef, {
        text: newMessage,
        timestamp: Date.now(),
      });
      setNewMessage('');
    }
  };

  return (
    <div className="App">
      <div>
        <h2>Chat</h2>
        <ul>
          {messages.map((message) => (
            <li key={message.timestamp}>
              {new Date(message.timestamp).toLocaleTimeString()}: {message.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
