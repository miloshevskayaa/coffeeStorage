import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

export const Practice: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="practice">
      <button
        type="button"
        className="practice__button"
        onClick={() => navigate('/modal/test')}
      >
        Пройти тест
      </button>
      <button
        type="button"
        className="practice__button"
        onClick={() => navigate('/main/make')}
      >
        Сделать напиток
      </button>
    </div>
  );
};
