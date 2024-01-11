import React, { useState } from "react";

import './loginDialog.css';

function Login({ active, setActive }) {
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
      <div className="modal__content">
        <span className="dialog-text">Логин</span>
        <input value={inputValue} onChange={handleChange} />
        <span className="dialog-text">Пароль</span>
        <input type="password" />
        <button className="login-button" onClick={handleSubmit}>
          Авторизоваться
        </button>
        <button className="login-button" onClick={() => setActive(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Login;
