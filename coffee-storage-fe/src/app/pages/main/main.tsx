import React from 'react';
import arabica from 'assets/images/coffee/arabika.jpg';
import tree from 'assets/images/coffee/coffee-plant.jpg';
import roasting from 'assets/images/coffee/obzharka.jpg';
import grubiiPomol from 'assets/images/coffee/pomol-grubii.jpg';
import pilPomol from 'assets/images/coffee/pomol-pil.jpg';
import sredniiPomol from 'assets/images/coffee/pomol-srednii.jpg';
import tonkiiPomol from 'assets/images/coffee/pomol-tonkii.jpg';
import robusta from 'assets/images/coffee/robusta.jpg';
import stepenPomola from 'assets/images/coffee/stepen-pomola-kofe.jpg';

import './styles.scss';

export const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main__info">
        <img src={tree} className="main__info__image" alt="" />
        <div className="main__info__text">
          <span>Кофе</span>
          <p>
            - это всемирно известный напиток, сделанный из обжаренных и
            измельчённых зёрен кофейного дерева.
          </p>
          <span>Кофейное дерево</span>
          <p>
            - небольшое вечнозелёное дерево или крупный кустарник высотой до 8
            метров и продолжительностью жизни 60-70 лет.
          </p>
          <p>
            - цветет красивыми белыми цветками c сильным тропическим запахом.
            Плоды красного или бордового цвета имеют от одного до трёх семян
            (зёрен).
          </p>
        </div>
      </div>
      <div className="main__coffee-types">
        <div className="main__coffee-types__title">
          Существует около 100 видов кофейных деревьев
          <p>Целенаправленно культивируются только два вида:</p>
        </div>
        <div className="main__coffee-types__main">
          <div className="main__coffee-types__main__about">
            <div className="main__coffee-types__main__about__text">
              <div>
                Аравийское - сорт <span>арабика</span>.
              </div>
              <p>Первый по объемам производства вид кофе - 61%.</p>
              <div>
                Зерна арабики имеют продолговатую форму, S-образную
                разделительную полосу и отличаются особым ароматом. (Cofféa
                arábica)
              </div>
            </div>
            <img
              src={arabica}
              alt=""
              className="main__coffee-types__main__about__image"
            />
          </div>
          <div className="main__coffee-types__main__about">
            <div className="main__coffee-types__main__about__text">
              <div>
                Конголезское - сорт <span>робуста</span>.
              </div>
              <p>Второй по объемам производства вид кофе - 38%.</p>
              <div>
                Зёрна робусты округлой формы, обладают менее изысканным
                ароматом, зато имеют высокое содержание кофеина. (Coffea
                canephora)
              </div>
            </div>
            <img
              src={robusta}
              alt=""
              className="main__coffee-types__main__about__image"
            />
          </div>
        </div>
      </div>
      <div className="main__coffee-roasting">
        <div className="main__coffee-roasting__title">Обжарка</div>
        <img className="main__coffee-roasting__image" src={roasting} alt="" />
      </div>
      <div className="main__coffee-grinding">
        <div className="main__coffee-grinding__title">Помол</div>
        <div className="main__coffee-grinding__content">
          <div className="main__coffee-grinding__content__grubii">
            <img
              className="main__coffee-grinding__content__grubii__image"
              src={grubiiPomol}
              alt=""
            />
            <p className="main__coffee-grinding__content__grubii__title">
              Грубый
            </p>
          </div>
          <div className="main__coffee-grinding__content__srednii">
            <img
              className="main__coffee-grinding__content__srednii__image"
              src={sredniiPomol}
              alt=""
            />
            <p className="main__coffee-grinding__content__srednii__title">
              Средний
            </p>
          </div>
          <div className="main__coffee-grinding__content__tonkii">
            <img
              className="main__coffee-grinding__content__tonkii__image"
              src={tonkiiPomol}
              alt=""
            />
            <p className="main__coffee-grinding__content__tonkii__title">
              Тонкий
            </p>
          </div>
          <div className="main__coffee-grinding__content__pil">
            <img
              className="main__coffee-grinding__content__pil__image"
              src={pilPomol}
              alt=""
            />
            <p className="main__coffee-grinding__content__pil__title">
              Сверхтонкий (в пыль)
            </p>
          </div>
        </div>
        <div className="main__coffee-grinding__pomol">
          <div className="main__coffee-grinding__pomol__title">
            Помол кофе напрямую зависит от способа его дальнейшего
            приготовления.
          </div>
          <img
            className="main__coffee-grinding__pomol__image"
            src={stepenPomola}
            alt=""
          />
          <div className="main__coffee-grinding__pomol__caption">
            Молотый кофе быстро теряет вкус и аромат, поэтому рекомендуется его
            молоть непосредственно перед употреблением.
          </div>
        </div>
      </div>
    </div>
  );
};
