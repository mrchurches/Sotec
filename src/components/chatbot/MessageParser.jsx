import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
   if(message.toLowerCase().includes("hello") || message.toLowerCase().includes("hola")){
    actions.handleHello();
   }
   else if(message.toLowerCase().includes("email") || message.toLowerCase().includes("mail")){
    actions.handleQuestions("email")
   }
   else{
    actions.error();
   }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;