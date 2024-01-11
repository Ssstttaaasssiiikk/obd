import React, { useState } from "react";

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Modal from './modal';

import './style.css';

function Order() {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <Header />
            <div className="title">
                <span className="text-title">Введите номер заказа</span>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
            <div className="search">
                <input className="input-search" />
                <button className="button-search" onClick={() => setModalActive(true)}>Найти</button>
            </div>
            <Footer />
        </div>
    );
}


export default Order;
