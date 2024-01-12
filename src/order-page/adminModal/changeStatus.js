import React, { useState, useEffect } from "react";

import './style.css';

function ChangeStatus({ active, setActive }) {
  const [number, setNumber] = useState("");
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const storedStatus = localStorage.getItem('myStatus');
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, []);

  const handleInputChange = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem('myStatus', status);
  }, [status]);

  const handleButtonClick = () => {
    if (number === "100") {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleSave = () => {
    localStorage.setItem('myNumber', number);
  };

  const handleDelete = () => {
    setStatus("");
    setSuccess(false);
    setActive(false);
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
          <div className="form">
            <span>Заказ найден</span>
            <span>{status}</span>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <button onClick={handleSave}>Сохранить</button>
            <button className="closeB" onClick={handleDelete}>Удалить</button>
          </div>
        }
        <button className="closeB2" onClick={() => setActive(false)}>Закрыть</button>
      </div>
    </div>
  );
}

export default ChangeStatus;