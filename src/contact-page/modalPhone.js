import React, { useState } from "react";


function ModalPhone({active, setActive}){
    const [inputValue, setInputValue] = useState("");
  
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('phone', inputValue);
        setActive(false);
    };

    const storedValue = localStorage.getItem("phone");
        return(
            <div className={active ? 'modal active' : 'modal'}>
                <div className="modal__content">
                    <span className="dialog-title">Введите новый номер телефона</span>
                    <input value={inputValue} onChange={handleChange} />
                    <button onClick={() => setActive(false)}>Закрыть</button>
                    <button onClick={handleSubmit}>Сохранить</button>
                </div>
            </div>
        );
}

export default ModalPhone;