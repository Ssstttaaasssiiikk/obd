import React, { useState, useEffect } from 'react';

import Modal from './addModal';
import DeleteModal from './deleteModal';

import Header from '../components/header/header';


function Page(){

    const [modalActive, setModalActive] = useState(false);
    const [modalActiveDelete, setModalActiveDelete] = useState(false);

    const [arrTypePrint, setArrTypePrint] = useState(['dtf', 'uf', 'large-format', 'ofset', 'sublimation']);
    
    const [name, setName] = useState();
    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    useEffect(() => {
        localStorage.setItem('arrTypePrint', JSON.stringify(arrTypePrint));
      }, [arrTypePrint]);

    return(
        <div>
                <Header/>
                <div>
                    {name == "admin" ? 
                    <div>
                        <button onClick={() => setModalActive(true)}>Добавление печатных материалов</button> 
                        <button onClick={() => setModalActiveDelete(true)}>Удаление печатных материалов</button>
                    </div>
                    : null}
                </div>
                <div className="o-nas">
                    <span className="o-nas">
                        Мы предлагаем инновационные решения для печати брендов на различной продукции, помогая компаниям выделиться и оставить 
                        свой неповторимый след. Наши профессионалы объединяют техническое мастерство с творческим подходом, обеспечивая высококачественную и стильную печать. 
                    </span>
                    <Modal active={modalActive} setActive={setModalActive}/>
                    <DeleteModal active={modalActiveDelete} setActive={setModalActiveDelete}/>
                </div>
        </div>
    );
}

export default Page;