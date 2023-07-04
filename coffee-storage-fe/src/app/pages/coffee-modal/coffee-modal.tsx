import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { config } from 'app/core/config';
import { useToggleFavorites } from 'app/core/hooks';
import { useGetOneCoffeeQuery } from 'app/store/coffee';
import heartFull from 'assets/images/coffee/heart-full.svg';
import heart from 'assets/images/coffee/heart-thin.svg';

import './styles.scss';

export const CoffeeModal: React.FC<any> = () => {
  const { coffeeId } = useParams();

  const [toggleFavorites, favorites] = useToggleFavorites(coffeeId!);

  const { data: coffee = {} } = useGetOneCoffeeQuery({ coffeeId });

  const navigate = useNavigate();

  const [countDish, setCountDish] = useState(1);

  if (countDish <= 0) {
    setCountDish(1);
  }

  return (
    <div className="modal">
      <div className="modal__close" onClick={() => navigate(-1)}>
        <CloseOutlined style={{ fontSize: '32px' }} />
      </div>
      <div className="modal__left">
        <div className="modal__left__title">
          <div className="modal__left__title__text">
            {coffee?.recipe?.rusTitle}
          </div>
          <div
            className="modal__left__title__favorite"
            onClick={() => toggleFavorites()}
          >
            <img
              src={
                favorites.find((item: any) => item.id === coffee.id)
                  ? heartFull
                  : heart
              }
              alt="like"
            />
          </div>
        </div>
        <div className="modal__left__recipe">
          <img
            className="modal__left__recipe__image"
            src={`${config.API_URL}/${coffee?.imageSecondary}`}
            alt="dish"
          />
        </div>
      </div>
      <div className="modal__right">
        <iframe
          width="713px"
          height="432px"
          src={coffee?.videoLink}
          title="Как приготовить"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};
