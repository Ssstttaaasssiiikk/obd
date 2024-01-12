import React, { useState, useEffect } from "react";

function DeleteModal({ active, setActive }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("arrTypePrint"));
    if (storedArray) {
      setArray(storedArray);
    }
  }, []);

  const handleDelete = (index) => {
    const newArray = [...array];
    newArray.splice(index, 1);
    setArray(newArray);
    localStorage.setItem("arrTypePrint", JSON.stringify(newArray));
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal__content">
        <span>
            {array.map((item, index) => (
            <li key={index}>
                {item}
                <button onClick={() => handleDelete(index)}>Удалить</button>
            </li>
            ))}
        </span>
        <button onClick={() => setActive(false)}>Закрыть</button>
      </div>
    </div>
  );
}

export default DeleteModal;