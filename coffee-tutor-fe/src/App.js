import React from 'react';
import CoffeeInfo from './components/coffee';
import Examination from './components/examination';
import Home from './components/home';
import './app.css';
import { BrowserRouter as Router, Routes, Link, Route  } from "react-router-dom";

export const App = () => {

  return (
    <div className="App">
      <nav className='navbar'>
                <div class="logo"><a href = "#">Coffee<span>Storage</span></a></div>
                <ul class="menu">
                    <li><a href="home">Главная</a></li>
                    <li><a href="#espresso">Кофе</a></li>
                    <li><a href="#variety">Разновидность</a></li>
                    <li><a href="education">Обучение</a></li>
                    <li><a href="examination">Практика</a></li>
                </ul>
            </nav>

            <div className='content'>
            <Router>
                {/* <Link to="/">Главная</Link>
                <Link id='education' className='button' to="/education">Обучение</Link>   
                <Link id='examination' className='button' to="/examination">Практика</Link>*/}
                <Routes>
                <Route id='home' path="/home" index element={<Home/>} />
                <Route id='education' path="/education" element={<CoffeeInfo/>} />
                <Route id='examination' path="/examination" element={<Examination/>} />
                </Routes>
            </Router> 
            </div>

    </div>
  );
}
