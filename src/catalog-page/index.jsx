import React, { useState, useEffect } from "react";
import { catalogData } from "./catalog-data";

import Header from '../components/header/header';

import Modal from './modal';

import "./index.css"

function Catalog() {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState();
    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    const CatalogItem = ({ image, title, description, setModalActive }) => {
        return (
            <div className="catalog-item">
                <img src={image} alt={title} />
                <h3 className="catalog-title">{title}</h3>
                <p>{description}</p>
                <button onClick={() => setModalActive(true)}>Заказать!</button>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <Modal active={modalActive} setActive={setModalActive} />
            <div>
                {name === "admin" ?
                    <div>
                        <button onClick={() => setModalActive(true)}>Оформить заказ</button>

                    </div>
                    : null}
            </div>
            <div className="catalog-page">
                {catalogData.map(item => (
                    <CatalogItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        setModalActive={setModalActive}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;