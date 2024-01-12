import React, { useState } from "react";

import './style.css';

function ChangeModal({active, setActive}) {
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
        <input
            type="text"
            value={number}
            onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Найти</button>
        {success && 
            <div>
                <div className="form">
                    <span>Номер заказа</span>
                    <input/>
                    <span>Тираж</span>
                    <input/>
                    <span>Описание</span>
                    <input/>
                    <button onClick={() => setActive(false)}>Сохранить</button>
                </div>
            </div>
        }
        <button className="closeB" onClick={() => setActive(false)}>Закрыть</button>
        </div>
    </div>
  );
}

export default ChangeModal;