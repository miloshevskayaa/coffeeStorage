import React, { useState } from 'react';
import { CoffeeCards } from 'app/components/ui-kit';
import { useGetCoffeeQuery } from 'app/store/coffee';
import search from 'assets/images/coffee/search.svg';

import './styles.scss';

export const Coffee: React.FC = () => {
  const [searchDishes, setSearchDishes] = useState('');

  const { data: coffee = [] } = useGetCoffeeQuery({
    search: searchDishes,
  });

  function handleChange(event: any) {
    setSearchDishes(event.target.value);
  }

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
      <CoffeeCards coffee={coffee} />
    </div>
  );
};
