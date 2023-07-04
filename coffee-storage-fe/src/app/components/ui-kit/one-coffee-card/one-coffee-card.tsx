import React from 'react';
import { useNavigate } from 'react-router-dom';
import { config } from 'app/core/config';
import { useToggleFavorites } from 'app/core/hooks';
import heartFull from 'assets/images/coffee/heart-full.svg';
import heart from 'assets/images/coffee/heart-thin.svg';

import './styles.scss';

export const OneCoffeeCard: React.FC<any> = ({ id, imagePrimary, title }) => {
  const [toggleFavorites, favorites] = useToggleFavorites(id);
  const navigate = useNavigate();

  const modalOpen = async () => {
    console.log(id);
    navigate(`/modal/${id}`);
  };

  return (
    <div className="card">
      <div className="card__image" onClick={() => modalOpen()}>
        <img
          className="card__image__coffee"
          src={`${config.API_URL}/${imagePrimary}`}
          alt=""
        />
        <div
          className="card__image__favorite"
          onClick={e => {
            e.stopPropagation();
            toggleFavorites();
          }}
        >
          <img
            src={
              favorites.find((item: any) => item.id === id) ? heartFull : heart
            }
            alt="empty"
          />
        </div>
      </div>
      <span className="card__title">{title}</span>
    </div>
  );
};
