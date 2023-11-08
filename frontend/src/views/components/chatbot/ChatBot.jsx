import React, { useState } from 'react'
import * as services from '../../../services/index';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [mensaje, setMensaje] = useState('')
    const [conversation, setConversations] = useState([]);
    const toggleChat = () => {
      setIsOpen(!isOpen);
    }
    const handleSubmit = async (event) => {
      if (event) {
        event.preventDefault();
      }
    
      try {
        const response = await services.chatBotResponse(mensaje);
        const chatbotMessage = response.data.response;
        setConversations(prevConversations => [
          ...prevConversations,
          {
            id: prevConversations.length + 1,
            sender: 'You',
            message: mensaje,
            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg',
            seen: true,
          }
        ]);
        setConversations(prevConversations => [
          ...prevConversations,
          {
            id: prevConversations.length + 1,
            sender: 'Ghost',
            message: chatbotMessage,
            avatar: 'https://api.dicebear.com/6.x/pixel-art/svg',
            seen: true,
          }
        ]);
        setMensaje("")
      } catch (error) {
        console.error(error);
      }
    };
    const onChangeMensaje = (e) => {
      setMensaje(e.target.value);
    }
  return (
    <React.Fragment>
        <div className={`GM__ChatBot__container${isOpen ? '-open' : ''}`}>
            <div className="GM__ChatBot__container-header">
                <img src="https://api.dicebear.com/7.x/bottts/png" alt="Chatbot" />
                <h2>Nombre del Chatbot</h2>
                <button onClick={toggleChat}>X</button>
            </div>
            <div className="GM__ChatBot__container-conversation">
            {conversation.map((message) => (
            <div key={message.id} className={`message ${message.sender === 'You' ? 'user-message' : 'chatbot-message'}`}>
              <img style={{with:"10px", height: "10px"}} src={message.avatar} alt={message.sender} />
              <p>{message.message}</p>
            </div>
          ))}
            </div>
            <div className="GM__ChatBot__container-input">
                <input onChange={()=> onChangeMensaje} type="text" placeholder="Escribe un mensaje" />
                <button onClick={()=>handleSubmit()}>Enviar</button>
            </div>
        </div>
        <div className="GM__ChatBot"><img onClick={toggleChat} src="https://api.dicebear.com/7.x/bottts/png" alt="chatbot" /></div>
    </React.Fragment>
    
  )
}
