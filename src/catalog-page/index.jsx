import React from "react";
import { catalogData } from "./catalog-data";

import Header from '../components/header/header';
import Footer from "../components/footer/footer";

import Modal from './modal';

import "./index.css"

function Catalog() {
    const [modalActive, setModalActive] = useState(false);

    const CatalogItem = ({ image, title, description, setModalActive }) => {
        return (
            <div className="catalog-item">
                <img src={image} alt={title} />
                <h3 className="aaa">{title}</h3>
                <p>{description}</p>
                <button onClick={() => setModalActive(true)}>Заказать!</button>
            </div>
        );
    };

    return (
        <div>
            <Header />
            <Modal active={modalActive} setActive={setModalActive} />
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
            <Footer />
        </div>
    );
}

export default Catalog;