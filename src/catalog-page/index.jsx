import React, { useState, useEffect } from "react";
import { catalogData } from "./catalog-data";

import Header from '../components/header/header';

import Modal from './modal';

import "./index.css"

function Catalog() {
    const [modalActive, setModalActive] = useState(false);
    const [name, setName] = useState("");
    const [catalog, setCatalog] = useState(catalogData);
    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    const handleDeleteClick = (id) => {
        const updatedCatalog = catalog.filter(item => item.id !== id);
        setCatalog(updatedCatalog);
        localStorage.setItem('catalogData', JSON.stringify(updatedCatalog));
    };

    const CatalogItem = ({ id, image, title, description }) => {
        return (
            <div className="catalog-item">
                {name === "admin" && (
                    <div>
                        <button onClick={() => handleDeleteClick(id)}>Удалить</button>
                    </div>
                )}
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
                {name === "admin" && (
                    <div>
                        <button onClick={() => setModalActive(true)}>Оформить заказ</button>
                    </div>
                )}
            </div>
            <div className="catalog-page">
                {catalog.map(item => (
                    <CatalogItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
