// src/components/InputBar/InputBar.tsx

import React from 'react';
import './InputBar.scss';

interface Props {
  input: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const InputBar: React.FC<Props> = ({ input, onInputChange, onKeyPress, isLoading }) => {
  return (
    <div className="inputBar">
      <input 
        className="inputField"
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyPress={onKeyPress}
        placeholder="Message PoetryGPT..."
        disabled={isLoading}
      />
    </div>
  );
};

export default InputBar;