import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import React from 'react';
import config from './config.jsx';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

export const ChatBotKit = () => {
  return (
    <div id="chatbot-kit">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        placeholderText="Hazme una pregunta..."
      />
    </div>
  );
};
