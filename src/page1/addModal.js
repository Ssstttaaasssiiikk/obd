import React, { useState } from "react";

function ModalPhone({ active, setActive }) {
  const [inputValue, setInputValue] = useState("");
  const [arrTypePrint, setArrTypePrint] = useState(
    JSON.parse(localStorage.getItem("arrTypePrint")) || []
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newArray = [...arrTypePrint, inputValue];
    setArrTypePrint(newArray);
    setInputValue("");
    localStorage.setItem("arrTypePrint", JSON.stringify(newArray));
    setActive(false);
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__content">
        <span className="dialog-title">Введите тип печати</span>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={() => setActive(false)}>Закрыть</button>
        <button onClick={handleButtonClick}>Сохранить</button>
      </div>
    </div>
  );
}

export default ModalPhone;