import React, { useState, useEffect } from 'react';

import Header from '../components/header/header';
import ModalPhone from './modalPhone';
import ModalAdres from './modalAdres';

import './style.css';


function Contact(){

    const [phone, setPhone] = useState('0 559/509/777 568 505');
    const [adres, setAdres] = useState('Бишкек, ул. Токтогула, 228/1');

    const [name, setName] = useState();

    const [modalActive, setModalActive] = useState(false);
    const [modalActiveAdres, setModalActiveAdres] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('savedValue');
        const value = storedValue ? storedValue : 'Авторизоваться';
        setName(value);
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('phone');
        const value = storedValue ? storedValue : '0 559/509/777 568 505';
        setPhone(value);
    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('adres');
        const value = storedValue ? storedValue : 'Бишкек, ул. Токтогула, 228/1';
        setAdres(value);
    }, []);


    return(
        <>
           <Header/>
            <div className='body'>
                <div className='div-text'>
                    <span className='text'>Номер телефона</span>
                    <span className='text'>{phone}</span>
                    <span className='text'>Адрес</span>
                    <span className='text'>{adres}</span>
                </div>
                <div>
                    {name == "admin" ? 
                    <div>
                        <button onClick={() => setModalActive(true)}>Изменить номер</button> 
                        <button onClick={() => setModalActiveAdres(true)}>Изменить адрес</button>
                    </div>
                    : null}
                </div>
                <span className='text-sm'>Социальные сети</span>
                <ModalPhone active={modalActive} setActive={setModalActive}/>
                <ModalAdres active={modalActiveAdres} setActive={setModalActiveAdres}/>
                <div className='icon'>
                    <a href='https://api.whatsapp.com/send/?phone=996559568505&text&type=phone_number&app_absent=0'>
                        <img className='sm' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png'/>
                    </a>

                    <a href='https://t.me/+996509568505'>
                        <img className='sm' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png'/>
                    </a>

                    <a href='https://www.instagram.com/domino_print'>
                        <img className='sm' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png'/>
                    </a>

                    <a href='https://www.facebook.com/domino.bishkek'>
                        <img className='sm' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpqCR-f8kBrydYZwKylu2UQTKc1h6AYDqd90HbWVtgfQ&s'/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Contact;