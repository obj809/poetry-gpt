// src/components/Message/Message.tsx

import React from 'react';
import './Message.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
    text: string;
    isUser: boolean;
}

const Message: React.FC<Props> = ({ text, isUser }) => {
    const messageClass = isUser ? "message userMessage" : "message aiMessage";

    return (
        <div className={messageClass}>
            <span className="icon">
                {isUser ? (
                    <FontAwesomeIcon icon={faUser} size="lg" />
                ) : (
                    <img src="/poetry-gpt-logo.png" alt="AI" style={{ width: '100%', height: 'auto' }} />
                )}
            </span>
            <p className="messageText">{text}</p>
        </div>
    );
};

export default Message;
