import React, { useState, useEffect } from 'react';

import './modal.css';

function Modal({ active, setActive }) {
  const [status, setStatus] = useState('Готов');

  useEffect(() => {
    localStorage.setItem('myStatus', status);
  }, [status]);

  useEffect(() => {
    const storedStatus = localStorage.getItem('myStatus');
    if (storedStatus) {
      setStatus(storedStatus);
    }
  }, []);

  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__content">
        <span className="dialog-title">Заказ №100</span>
        <span className="status">{status}</span>
        <button onClick={() => setActive(false)}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;