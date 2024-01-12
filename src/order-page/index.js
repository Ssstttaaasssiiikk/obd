import React, { useState, useEffect } from 'react';

import Header from '../components/header/header';

import Modal from './modal';

import './style.css';

function Order() {
    const [modalActive, setModalActive] = useState(false);

    const [name, setName] = useState();
    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    return (
        <div>
            <Header />
            <div>
                {name == "admin" ? 
                <div>
                    <button onClick={() => setModalActive(true)}>Добавление записи</button> 
                    <button onClick={() => setModalActive(true)}>Изменение записи</button>
                    <button onClick={() => setModalActive(true)}>Удаление записи</button>
                    <button onClick={() => setModalActive(true)}>Изменение статуса</button>
                </div>
                : null}
            </div>
            <div className="title">
                <span className="text-title">Введите номер заказа</span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
            <div className="search">
                <input className="input-search" />
                <button className="button-search" onClick={() => setModalActive(true)}>Найти</button>
            </div>
        </div>
    );
}


export default Order;
