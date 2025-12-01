// src/App.tsx

import React from 'react';
import './App.scss';
import ChatWindow from './components/ChatWindow/ChatWindow';

const App: React.FC = () => {
    return (
        <div className="app">
            <ChatWindow />
        </div>
    );
};

export default App;