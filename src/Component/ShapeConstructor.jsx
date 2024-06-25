import React, { useState } from "react";
import "./ShapeConstructor.css";

const color = {
  en: ["blue", "red", "yellow"],
  ru: ["Синий", "Красный", "Желтый"],
};

const form = {
  en: ["square", "circle"],
  ru: ["Квадрат", "Круг"],
};

const ShapeConstructor = () => {
  const [activeColor, setActiveColor] = useState("");
  const [activeForm, setActiveForm] = useState("");

  const colorClickHandler = (str) => {
    setActiveColor(str);
  };

  const formClickHandler = (str) => {
    setActiveForm(str);
  };

  return (
    <div className="page">
      <div className="constructor">
        <h2 className="buttonBlockTitle">Конструктор фигуры</h2>
        <div className="buttonColor">
          {color.en.map((el, i) => (
            <button
              key={i}
              className={activeColor === el ? "red" : ""}
              onClick={() => colorClickHandler(el)}
            >
              {color.ru[i]}
            </button>
          ))}
        </div>
        <div className="buttonForm">
          {form.en.map((el, i) => (
            <button
              key={i}
              className={activeForm === el ? "red" : ""}
              onClick={() => formClickHandler(el)}
            >
              {form.ru[i]}
            </button>
          ))}
        </div>
      </div>
      <div className="result">
        <h2>Результат :</h2>
        <div className={`${activeColor} ${activeForm}`}></div>
      </div>
    </div>
  );
};

export default ShapeConstructor;
