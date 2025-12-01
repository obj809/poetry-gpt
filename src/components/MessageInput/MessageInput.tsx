// src/components/MessageInput/MessageInput.tsx

import React, { useState } from 'react';
import InputBar from '../InputBar/InputBar';
import SquareButton from '../SquareButton/SquareButton';
import './MessageInput.scss';

interface Props {
  onSendMessage: (message: string) => void;
  isAnimating: boolean;
}

const MessageInput: React.FC<Props> = ({ onSendMessage, isAnimating }) => {
  const [input, setInput] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSend = async () => {
    if (input.trim()) {
      setLoading(true);
      const messageToSend = input;
      setInput('');
      await onSendMessage(messageToSend);
      setLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isLoading && !isAnimating) {
      handleSend();
    }
  };

  return (
    <div className="messageInput">
      <InputBar 
        input={input}
        onInputChange={handleInputChange}
        onKeyPress={handleKeyPress}
        isLoading={isLoading || isAnimating}
      />
      <SquareButton onClick={handleSend} isLoading={isLoading || isAnimating} />
    </div>
  );
};

export default MessageInput;
