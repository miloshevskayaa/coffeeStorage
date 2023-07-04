import React, { useState } from 'react';
import { CoffeeCards } from 'app/components/ui-kit';
import { useGetFavoritesQuery } from 'app/store/favorites';
import search from 'assets/images/coffee/search.svg';

import './styles.scss';

export const Favorites: React.FC = () => {
  const [searchDishes, setSearchDishes] = useState('');

  const { data: favorites = [] } = useGetFavoritesQuery({
    search: searchDishes,
  });

  function handleChange(event: any) {
    setSearchDishes(event.target.value);
  }

  console.log(favorites);

  return (
    <div className="coffee">
      <div className="coffee__search">
        <div className="coffee__search__image">
          <img src={search} alt="" />
        </div>
        <input
          className="coffee__search__input"
          placeholder="Найти напиток..."
          onChange={handleChange}
          value={searchDishes}
        />
      </div>

      <CoffeeCards coffee={favorites.map((item: any) => item.coffee)} />
    </div>
  );
};
