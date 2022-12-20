import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import React, { useState } from 'react';
import config from './config.jsx';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';
import Bounce from 'react-reveal/Bounce';

export const ChatBotKit = () => {
  const [show, setShow] = useState(false);
  
  function handleBot(e){
    e.preventDefault(e)
  if(show === false){
    setShow(true)
  }else{
    setShow(false)
  }
  }

  return (
    <div>
      {show&&<div id="chatbot-kit">
        <Bounce right>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText="Hazme una pregunta..."
          />
          <button id="button2" onClick={(e)=>handleBot(e)}>Close me!</button>  
        </Bounce>
      </div>}
      {
        !show && <div id="chatbot-button">
             <Bounce>
              <img onClick={(e)=>handleBot(e)} src="https://img.freepik.com/vector-gratis/cute-robot-holding-phone-laptop-cartoon-vector-icon-ilustracion-ciencia-tecnologia-aislada_138676-4870.jpg?w=2000" alt="img-bot" />                                     
             </Bounce>
        </div>
      }
      <div>
      </div>
    </div>
  );
};
