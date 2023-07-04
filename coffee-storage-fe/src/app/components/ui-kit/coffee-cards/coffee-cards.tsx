import React from 'react';
import { OneCoffeeCard } from '../one-coffee-card';

import './styles.scss';

export const CoffeeCards: React.FC<any> = ({ coffee }) => {
  return (
    <div className="cards">
      {coffee.map((itemCoffee: any) => {
        return (
          <div key={itemCoffee.id}>
            <OneCoffeeCard
              id={itemCoffee.id}
              imagePrimary={itemCoffee.imagePrimary}
              imageSecondary={itemCoffee.imageSecondary}
              title={itemCoffee.recipe.rusTitle}
              videoLink={itemCoffee.videoLink}
              recipe={itemCoffee.recipe}
            />
          </div>
        );
      })}
    </div>
  );
};
