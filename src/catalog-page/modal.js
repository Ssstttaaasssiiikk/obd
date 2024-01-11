import React from "react";

import './modal.css'

function Modal({active, setActive}){
    return(
        <div className={active ? 'modal active' : 'modal'}>
            <div className="modal__content">
                <span className="dialog-title">Заказ №100</span>
                <span className="status">Готов</span>
                <button onClick={() => setActive(false)}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal;