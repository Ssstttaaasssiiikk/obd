import React, { useState } from "react";

import './modal.css'

function Modal({ active, setActive }) {
    const [inputValue, setInputValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [noteValue, setNoteValue] = useState('');

    const handleInputChange = (e) => {
        if (e.target.name === 'inputValue') {
            setInputValue(e.target.value);
        } else if (e.target.name === 'quantityValue') {
            setQuantityValue(e.target.value);
        } else if (e.target.name === 'noteValue') {
            setNoteValue(e.target.value);
        }
    };

    const addDataToLocalStorage = () => {
        const existingArray = JSON.parse(localStorage.getItem('orders')) || [];
        const newOrder = {
            name: inputValue,
            quantity: quantityValue,
            note: noteValue
        };
        existingArray.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(existingArray));
        setActive(false);
    };

    return (
        <div className={active ? 'modal active' : 'modal'}>
            <div className="modal__content">
                <span className="dialog-title">Оформление временного заказа</span>
                <div className="form">
                    <span className="text-input">
                        Имя заказа
                        <input type="text" name="inputValue" value={inputValue} onChange={handleInputChange} />
                    </span>
                    <span className="text-input">
                        Тираж
                        <input type="number" name="quantityValue" value={quantityValue} onChange={handleInputChange} />
                    </span>
                    <span className="description">
                        Примечание
                        <textarea name="noteValue" value={noteValue} onChange={handleInputChange}></textarea>
                    </span>
                    <span className="buttons">
                        <button className="order" onClick={addDataToLocalStorage}>Заказать</button>
                        <button className="close" onClick={() => setActive(false)}>Закрыть</button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Modal;