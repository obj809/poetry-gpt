// src/components/MessageList/MessageList.tsx

import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import './MessageList.scss';

interface MessageProps {
  id: number;
  text: string;
  isUser: boolean;
}

interface Props {
  messages: MessageProps[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="messageList" ref={messageListRef}>
      {messages.length === 0 ? (
        <div className="emptyMessageContainer">
          <img src="../../../poetry-gpt-logo.png" alt="No messages" className="emptyMessageImage" />
        </div>
      ) : (
        messages.map((message) => (
          <Message key={message.id} text={message.text} isUser={message.isUser} />
        ))
      )}
    </div>
  );
};

export default MessageList;
