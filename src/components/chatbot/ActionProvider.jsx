import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hola! en que puedo ayudarte?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleQuestions = (word) => {
    let botMessage
    if(word==="email") botMessage = createChatBotMessage("Puedes comunicarte con nosotros completando el form que se encuentra en la página, sino, nuestro mail es este sotecorg@gmail.com ");

    

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const error = () => {
    const botMessage = createChatBotMessage("Oops, no conozco la respuesta a tu pregunta. Intentalo de nuevo o comunicate con nosotros por mail completando nuestro form de contacto.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleQuestions,
            error
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
