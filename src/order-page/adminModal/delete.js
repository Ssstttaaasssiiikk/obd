import React, { useState } from "react";

import './style.css';

function DeleteModal({active, setActive}) {
    const [number, setNumber] = useState("");
    const [success, setSuccess] = useState(false);
  
    const handleInputChange = (e) => {
      setNumber(e.target.value);
    };
  
    const handleButtonClick = () => {
      if (number === "101") {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    };

  return (
    <div className={active ? 'modal active' : 'modal'}>
        <div className="modal__content">
            <h2>Введите номер заказа</h2>
            <input
                type="text"
                value={number}
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>Найти</button>
            {success && 
                <div>
                    <div className="form">
                        <span>Заказ найден</span>
                        <button onClick={() => setActive(false)}>Удалить</button>
                    </div>
                </div>
            }
            <button onClick={() => setActive(false)}>Закрыть</button>
        </div>
    </div>
  );
}

export default DeleteModal;