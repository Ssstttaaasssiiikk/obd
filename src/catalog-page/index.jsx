import React from "react";

import Header from '../components/header/header';
import Footer from "../components/footer/footer";

import BackPackImage from "../assets/catalog-images/backpack.jpg";
import DairyImage from "../assets/catalog-images/dairys.jpg";
import HatsImage from "../assets/catalog-images/hats.jpg";
import PensImage from "../assets/catalog-images/pens.jpg";
import TermosImage from "../assets/catalog-images/termos.jpg";
import UmbrelaImage from "../assets/catalog-images/umbrelas.jpg";

import "./index.css"

const CatalogItem = ({ image, title, description }) => {
    return (
        <div className="catalog-item">
            <img src={image} alt={title} />
            <h3 className="aaa">{title}</h3>
            <p>{description}</p>
            <button>Заказать!</button>
        </div>
    );
};

function Catalog() {
    const catalogData = [
        {
            id: 1,
            image: BackPackImage,
            title: 'Рюкзак',
            description: 'Цель нашей развивающейся типографии - создание эксклюзивной и качественной полиграфии, будь то визитки, конверты, буклеты, календари, брошюры, ручки и многое другое.',
        },
        {
            id: 2,
            image: DairyImage,
            title: 'Ежедневник',
            description: 'рузья, сегодня хочется поговорить об очень знакомом ощущении когда ты весь день, что-то делал, работал/учился, очень устал, но никаких успешных результатов.',
        },
        {
            id: 3,
            image: HatsImage,
            title: 'Кепка',
            description: 'Этот яркий головной убор любят различные фирмы, которые заботятся о своем продвижении. Любят за то, что эта характерная кепка сразу бросается в глаза. Особенно, если она красуется на головах всех сотрудников компании.',
        },
        {
            id: 4,
            image: PensImage,
            title: 'Ручка',
            description: 'Ежедневник и ручка — предметы такие же обязательные, для занятых людей, как телефон или компьютер. Они незаменимы, когда нужно быстро записать контактные данные, время встречи или интересную мысль.',
        },
        {
            id: 5,
            image: TermosImage,
            title: 'Термос',
            description: 'Выбирая цветовую гамму, надо представить себе человека, для которого вы это делаете. Это директора серьезных фирм? Или молодые и активные люди? Или женщины? Если директора, то мы бы рекомендовали стараться использовать более спокойную гамму цветов, говорящую о надежности вас, как партнеров. Для молодых людей цвета могут быть ярче и интенсивнее.',
        },
        {
            id: 6,
            image: UmbrelaImage,
            title: 'Зонтик',
            description: 'Востребованный чуть ли не весь год сувенир, зонт с напечатанным логотипом укроет от непогоды и сообщит всему проспекту о вашем бренде. ⁣⁣⠀',
        }
    ];

    return (
        <div>
            <Header />
            <div className="catalog-page">
                {catalogData.map(item => (
                    <CatalogItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Catalog;