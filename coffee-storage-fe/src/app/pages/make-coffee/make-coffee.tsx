import React, { useState } from 'react';
import { message, Modal } from 'antd';
import { useGetCoffeeQuery } from 'app/store/coffee';

import './styles.scss';

let userIngidientObject: any = {};

export const MakeCoffee: React.FC = () => {
  const { data: coffee = [] } = useGetCoffeeQuery({});

  const coffeeShortArrWithoutZeroIngredients = coffee.map((oneCoffee: any) => {
    const ingridientsFromDB = oneCoffee.recipe;

    const objectFitler = Object.keys(ingridientsFromDB).filter(
      i => ingridientsFromDB[i] !== 0,
    );

    const new_obj: any = {};

    objectFitler.forEach((key: any) => {
      new_obj[key] = ingridientsFromDB[key];
    });

    return new_obj;
  });

  const [ingridient, setIngridient] = useState<string>('');
  const [ingridientCount, setIngridientCount] = useState<number>(0);

  const ingridients: any = {
    espressoCount: 'Эспрессо',
    waterCount: 'Вода',
    milkCount: 'Молоко',
    milkFoamCount: 'Взбитое молоко',
    creamCount: 'Сливки',
    wrippedCreamCount: 'Взбитые сливки',
    iceCreamCount: 'Мороженое',
    lemonJuiceCount: 'Лимонный сок',
    chocolateCount: 'Шоколад',
    whiskeyCount: 'Виски',
    syropCount: 'Сироп',
  };

  const [messageApi, contextHolder] = message.useMessage();

  const add = () => {
    const keyUserIngidientObject = Object.keys(ingridients).find(
      (key: any) => ingridients[key] === ingridient,
    );

    userIngidientObject[`${keyUserIngidientObject}`] = ingridientCount;
    messageApi.info(
      `Вы добавили ${ingridient} в количестве ${ingridientCount}/4`,
    );
  };

  function isEqual(object1: any, object2: any) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);

    if (props1.length !== props2.length) {
      return false;
    }

    for (let i = 0; i < props1.length; i += 1) {
      const prop = props1[i];
      const bothAreObjects =
        typeof object1[prop] === 'object' && typeof object2[prop] === 'object';

      if (
        (!bothAreObjects && object1[prop] !== object2[prop]) ||
        (bothAreObjects && !isEqual(object1[prop], object2[prop]))
      ) {
        return false;
      }
    }

    return true;
  }

  let name = '';
  const [inputRes, setInputRes] = useState<string>(
    'Такого напитка не существует!',
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const check = () => {
    console.log(userIngidientObject);

    coffeeShortArrWithoutZeroIngredients?.forEach(
      async (oneCoffeeRecipe: any) => {
        name = oneCoffeeRecipe?.rusTitle;
        delete oneCoffeeRecipe?.rusTitle;
        delete oneCoffeeRecipe?.id;

        console.log(inputRes);

        if (isEqual(userIngidientObject, oneCoffeeRecipe)) {
          console.log(name);

          setInputRes(`Вы сделали ${name}`);
          setIsModalOpen(true);
        } else {
          setIsModalOpen(true);
        }
      },
    );
    userIngidientObject = {};
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setInputRes('Такого напитка не существует!');
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setInputRes('Такого напитка не существует!');
  };

  return (
    <div className="make-coffee">
      {contextHolder}
      <div className="make-coffee__title">Выберите ингридиент</div>
      <div className="make-coffee__ingridients">
        <div className="make-coffee__ingridients__content">
          {Object.values(ingridients)?.map((oneIngridient: any) => (
            <button
              key={oneIngridient}
              type="button"
              className="make-coffee__ingridients__button"
              onClick={() => setIngridient(oneIngridient)}
            >
              {oneIngridient}
            </button>
          ))}
        </div>
      </div>
      <div className="make-coffee__title">Выберите количество</div>
      <div className="make-coffee__count">
        <div className="make-coffee__count__content">
          <button
            type="button"
            className="make-coffee__count__button__mini"
            onClick={() => setIngridientCount(1)}
          >
            1/4
          </button>
          <button
            type="button"
            className="make-coffee__count__button__mini"
            onClick={() => setIngridientCount(2)}
          >
            2/4
          </button>
          <button
            type="button"
            className="make-coffee__count__button__mini"
            onClick={() => setIngridientCount(3)}
          >
            3/4
          </button>
          <button
            type="button"
            className="make-coffee__count__button__mini"
            onClick={() => setIngridientCount(4)}
          >
            4/4
          </button>
        </div>
      </div>
      <div className="make-coffee__buttons">
        <button
          type="button"
          className="make-coffee__buttons__button__add"
          onClick={() => add()}
        >
          Добавить
        </button>
        <button
          type="button"
          className="make-coffee__buttons__button__check"
          onClick={() => check()}
        >
          Закончить
        </button>
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className="make-coffee__result">{inputRes}</p>
      </Modal>
    </div>
  );
};
