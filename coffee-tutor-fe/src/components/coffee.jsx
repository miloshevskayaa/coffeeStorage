import React from 'react'
import './coffee.css'
import { useState, useEffect } from 'react';

function CoffeeInfo(){

    const [coffee, setCoffee] = useState();

    useEffect(() => {
      fetch("http://localhost:9040/coffee")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          setCoffee(data);
        })
        .catch((error) => {
          console.log(error)
        })
    }, [])

    const [close, setClose] = useState();
    const [imgId2, setImgId2] = useState();
    const [background, setBackground] = useState();


    function img2Show(i){
      setImgId2(<img className='coffeePic pic2' src={require(`../assets/${i?.secondary_picture}`)}></img>);
      setClose(<div onClick={() => closeShowing()} className='close'>×</div>);
      setBackground(<div className='background'></div>);
    }

    function closeShowing(){
      setImgId2([]);
      setClose([]);
      setBackground([])
    }

    return(
      <div className=''>
        {background}
      {close}
      {imgId2}
        <div className='coffeeCards'>
          {coffee?.map( i =>(
            <div className='coffeeCard'>
              {/* <img className='coffeePic' id='pic' onClick={() => setImgId(prevMode => !prevMode)}
              src={imgId ? require(`../assets/${i?.secondary_picture}`) : require(`../assets/${i?.primary_picture}`)} ></img> */}
              <img src={require(`../assets/${i?.primary_picture}`)} className='coffeePic' alt="" onClick={() => img2Show(i)}/>
              <div className='name'>{i.name}</div>
              <a className='link' href={i.youtube_link}>Видео-инструкция</a>
            </div>
          ))}

        </div>
      </div>

    )

}

export default CoffeeInfo