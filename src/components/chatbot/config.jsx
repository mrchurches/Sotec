import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
const botName = "Chatec"

const config = {
  initialMessages: [createChatBotMessage(`Hola soy ${botName}, el chatbot amigable de sotec y estoy para ayudarte a encontrar lo que estás buscando...`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: '#5ccc9d', padding: "3px", borderRadius: "4px" }}>
    Chatea con Chatec</div>,
   // Replaces the default bot avatar
  //  botAvatar: (props) => <MyAvatar {...props} />,
  //  // Replaces the default bot chat message container
  //  botChatMessage: (props) => <MyCustomChatMessage {...props} />,
  //  // Replaces the default user icon
  //  userAvatar: (props) => <MyCustomAvatar {...props} />,
  //  // Replaces the default user chat message
  //  userChatMessage: (props) => <MyCustomUserChatMessage {...props} />
 },
};

export default config;