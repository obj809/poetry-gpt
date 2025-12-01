// src/components/SquareButton/SquareButton.tsx

import React from 'react';
import './SquareButton.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faSpinner } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onClick: () => void;
  isLoading: boolean;
}

const SquareButton: React.FC<Props> = ({ onClick, isLoading }) => {
  return (
    <div className='spacer'>
    <button className="squareButton" onClick={onClick} disabled={isLoading}>
      {isLoading ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : <FontAwesomeIcon icon={faArrowUp} size="2x" />}
    </button>
    </div>
  );
};

export default SquareButton;
