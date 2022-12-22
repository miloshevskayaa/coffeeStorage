import React from 'react';
import './examination.css';
import { useState, useEffect } from 'react';

let arrUserIngridient = [];

function Examination(){
  const [recipe, setRecipe] = useState();

  useEffect(() => {
    fetch("http://localhost:9040/examination")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipe(data);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const ingridients = {
    espresso : 'Эспрессо', water : 'Вода', milk : 'Молоко', milkFoam : 'Взбитое молоко', cream :'Сливки', wrippedCream : 'Взбитые сливки', iceCream : 'Мороженое', lemonJuice : 'Лимонный сок', chocolate : 'Шоколад', whiskey : 'Виски', syrop : 'Сироп'
  };

  let arrIngridient = [];

  for(let i in recipe){
    let objIngridient ={};
    objIngridient.name = recipe[i].name;
    if(recipe[i].espresso.count !== 0) {objIngridient.espresso = recipe[i].espresso.count;}
    if(recipe[i].countWater !== 0){objIngridient.water = recipe[i].countWater};
    if(recipe[i].milk.count !== 0){objIngridient.milk = recipe[i].milk.count};
    if(recipe[i].countMilkFoam !== 0){objIngridient.milkFoam = recipe[i].countMilkFoam};
    if(recipe[i].countCream !== 0){objIngridient.cream = recipe[i].countCream};
    if(recipe[i].countWrippedCream !== 0){objIngridient.wrippedCream = recipe[i].countWrippedCream} ;
    if(recipe[i].countIceCream !== 0){objIngridient.iceCream = recipe[i].countIceCream}
    if(recipe[i].countLemonJuice !== 0){objIngridient.lemonJuice = recipe[i].countLemonJuice};
    if(recipe[i].chocolate.count !== 0){objIngridient.chocolate = recipe[i].chocolate.count};
    if(recipe[i].whiskey.count !== 0){objIngridient.whiskey = recipe[i].id_whiskey};
    if(recipe[i].syrop.count !== 0){objIngridient.syrop = recipe[i].id_syrop};
    arrIngridient.push(objIngridient);
  }
  // console.log(arrIngridient);

  let compValue, compKey;

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  const [inputList, setInputList] = useState([]);
  const [inputRes, setInputRes] = useState([]);

  function toggle(i) {
    console.log(i);
    compKey = getKeyByValue(ingridients, i);
  }

  function add(n){
    console.log(compKey);
    if(typeof(compKey) != 'undefined'){

      compValue = ingridients[compKey];
        
      if(Array.isArray(inputList)){
        setInputList(inputList.concat(<div className='addDrink'>{`Вы добавили в напиток ${compValue} в количестве ${n}/4`}</div>));
      } else {
        console.log('not arr')
        setInputList((<div className='addDrink'>{`Вы добавили в напиток ${compValue} в количестве ${n}/4`}</div>));
      }

      arrUserIngridient.push({[`${compKey}`] : n});
      
      console.log(arrUserIngridient)
      setInputRes([]);

    } else {
      console.log('type und')
      setInputList(<div className='addDrink'>{`Выберите элемент`}</div>);

    }
  }

  function isEqual(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
  
    if (props1.length !== props2.length) {
      return false;
    }
  
    for (let i = 0; i < props1.length; i += 1) {
      const prop = props1[i];
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
    return true;
  }


  let newArrUserIngridient = Object.assign({}, ...arrUserIngridient);
  let name, count=0;

  function check(){
    // setInputList([]);
    setInputRes([]);

    console.log(arrUserIngridient)
    console.log(newArrUserIngridient);

    if(arrUserIngridient.length === 0){
      setInputList(inputList.concat(<div className='result'>{`Выбирете количество напитка`}</div>));
      console.log('empty')
    } 
    else {
      for(let j in arrIngridient){
        console.log(arrIngridient[j])
        name = arrIngridient[j].name;
        delete arrIngridient[j].name;

        if(isEqual(newArrUserIngridient, arrIngridient[j]) === true){
          setInputRes(inputRes.concat(<div className='result'>{`Вы сделали ${name}`}</div>));
        }else{
          console.log('false');
          count++;
          if(count === 12){
            setInputRes(inputRes.concat(<div className='result'>{`Такого напитка не существует`}</div>));
          }else{
            console.log('one right')
          }
        }
      }
      arrUserIngridient=[]
      setInputList([]);

      }
    }


    return(
        <div className='all'>
          <span>Сделайте напиток самостоятельно</span>
          <p>1. Выберите ингридиент</p>

          <div className='ingredients' > 
          {
            Object.values(ingridients)?.map(
              i => (
                <button onClick={()=> toggle(i)} className='ingredient'>{i}</button>
              )
            )
          }

          {/* <p>{recipe?.map( i=>(<p key="{item1}">{i.espresso.count}</p>))}</p> */}

          </div>

          <p>2. Выберите количество</p>

          <div className='parts'>                  
              <button onClick={() => add(1)}>1/4</button>
              <button onClick={() => add(2)}>2/4</button>
              <button onClick={() => add(3)}>3/4</button>
              <button onClick={() => add(4)}>4/4</button>
            </div>

            {inputList}

            <button className='resultButt' onClick={() => check()}>Закончить</button>

            {inputRes}
        </div>
    )
}

export default Examination