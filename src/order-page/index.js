import React, { useState, useEffect } from 'react';

import Header from '../components/header/header';

import Modal from './modal';
import ModalAdd from './adminModal/add';
import ChangeModal from './adminModal/change';
import DeleteModal from './adminModal/delete';
import ChangeStatus from './adminModal/changeStatus';

import './style.css';

function Order() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAdd, setModalActiveAdd] = useState(false);
    const [modalActiveChange, setModalActiveChange] = useState(false);
    const [modalActiveDelete, setModalActiveDelete] = useState(false);
    const [modalActiveChangeStatus, setModalActiveChangeStatus] = useState(false);

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
                {name === "admin" ? 
                <div>
                    <button onClick={() => setModalActiveAdd(true)}>Добавление записи</button> 
                    <button onClick={() => setModalActiveChange(true)}>Изменение записи</button>
                    <button onClick={() => setModalActiveDelete(true)}>Удаление записи</button>
                    <button onClick={() => setModalActiveChangeStatus(true)}>Изменение статуса</button>
                </div>
                : null}
            </div>
            <div className="title">
                <span className="text-title">Введите номер заказа</span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
            <ModalAdd active={modalActiveAdd} setActive={setModalActiveAdd}/>
            <ChangeModal active={modalActiveChange} setActive={setModalActiveChange}/>
            <DeleteModal active={modalActiveDelete} setActive={setModalActiveDelete}/>
            <ChangeStatus active={modalActiveChangeStatus} setActive={setModalActiveChangeStatus}/>
            <div className="search">
                <input className="input-search" />
                <button className="button-search" onClick={() => setModalActive(true)}>Найти</button>
            </div>
        </div>
    );
}


export default Order;
