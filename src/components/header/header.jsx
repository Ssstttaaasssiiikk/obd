import React, { useState, useEffect } from "react";

import Logo from '../../assets/logo.png';
import Login from './loginDialog';
import A from './aDialog';

import './header.css';

function Header(){
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveA, setModalActiveA] = useState(false);
    const [name, setName] = useState();

    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    return(
        <>
            <div className="header">
                <a href="/">
                    <img src={Logo} alt=""/>
                </a>
                <div>
                    <a href="/catalog">Каталог</a>
                    <a href="/order">Заказы</a>
                    <a href="/contact">Контакты</a>
                </div>
                <button onClick={() => setModalActive(true)}>{name}</button>
                <button onClick={() => setModalActiveA(true)}>Регистрация</button>
                <Login active={modalActive} setActive={setModalActive}/>
                <A active={modalActiveA} setActive={setModalActiveA}/>
            </div>     
        
        </>
    );
}

export default Header;
