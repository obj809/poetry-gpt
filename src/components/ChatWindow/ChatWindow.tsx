// src/components/ChatWindow/ChatWindow.tsx

import React, { useState, useEffect } from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import FooterMessage from '../FooterMessage/FooterMessage';
import ChatHeader from '../ChatHeader/ChatHeader';
import './ChatWindow.scss';
import { generateCompletion } from '../../services/openaiService';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<{ id: number; text: string; isUser: boolean }[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    console.log("API KEY:", import.meta.env.VITE_OPENAI_API_KEY);
    console.log("API URL:", import.meta.env.VITE_OPENAI_API_URL);
    console.log("MODEL:", import.meta.env.VITE_OPENAI_MODEL);
  }, []);

  const handleSendMessage = (newMessage: string, isUser: boolean) => {
    const newId = messages.length + 1;
    setMessages(messages => [...messages, { id: newId, text: newMessage, isUser }]);
  };

  const handleUserMessage = async (newMessage: string) => {
    handleSendMessage(newMessage, true);

    try {
      const aiResponse = await generateCompletion(newMessage);
      console.log('AI response:', aiResponse);
      setIsAnimating(true);
      animateAiResponse(aiResponse);
    } catch (error) {
      console.error('Failed to fetch AI response:', error);
      handleSendMessage('Failed to fetch response from AI.', false);
    }
  };

  const animateAiResponse = (response: string) => {
    const totalLength = response.length;
    let currentLength = 0;

    setMessages(messages => [...messages, { id: messages.length + 1, text: '', isUser: false }]);

    const intervalId = setInterval(() => {
      if (currentLength < totalLength) {
        const nextChar = response[currentLength];
        currentLength++;
        setMessages(messages => {
          const lastMessage = messages[messages.length - 1];
          if (lastMessage && !lastMessage.isUser) {
            const updatedMessages = messages.slice(0, -1);
            updatedMessages.push({ ...lastMessage, text: lastMessage.text + nextChar });
            return updatedMessages;
          }
          return messages;
        });
      } else {
        clearInterval(intervalId);
        setIsAnimating(false);
      }
    }, 50);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="chatWindow">
      <ChatHeader onClearMessages={clearMessages} />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleUserMessage} isAnimating={isAnimating} />
      <FooterMessage />
    </div>
  );
};

export default ChatWindow;
