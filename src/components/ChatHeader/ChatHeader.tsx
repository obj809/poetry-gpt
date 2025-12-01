// src/components/ChatHeader/ChatHeader.tsx

import React from 'react';
import './ChatHeader.scss';

interface ChatHeaderProps {
  onClearMessages: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearMessages }) => {
  return (
    <div className="controlPanel">
      <button className="clearMessagesButton" onClick={onClearMessages}>
        <i className="fa-solid fa-pen-to-square customIconSize"></i>
      </button>
      <span className="poetryGPTLabel">PoetryGPT</span>
    </div>
  );
};

export default ChatHeader;
