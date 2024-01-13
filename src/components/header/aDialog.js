import React, { useState } from "react";

import './loginDialog.css';

function A({ active, setActive }) {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('savedValue', inputValue);
    setActive(false);
  };

  const storedValue = localStorage.getItem("savedValue");

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__content1">
            <span>Регистрация</span>
            <input/>
            <span>Логин</span>
            <input/>
            <span>Пароль</span>
            <input/>
            <span>Имя</span>
            <input/>
            <span>Фамилия</span>
            <input/>
            <span>Почта</span>
            <input/>
        <button onClick={handleSubmit}>Зарегистрирроваться</button>
        <button className="login-button" onClick={() => setActive(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default A;
