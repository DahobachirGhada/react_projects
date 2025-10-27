import React,{ useRef, useState,Link } from "react";
import "./pin_input.css";

export default function PinInput({length = 4, onComplete}){
  const [values, setValues] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if(!/^\d*$/.test(value)) return;
    
    const newValues = [...values];
    newValues[index] = value.slice(-1);

    setValues(newValues);
    
    if(value && index < length - 1){
      inputsRef.current[index+1].focus();
    }

    if (newValues.every((v) => v !== "")) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace"){
        if(values[index] === ""){
            if (index > 0){
                inputsRef.current[index - 1].focus();
            }
        }else {
            const newValues = [...values];
            newValues[index] = "";
            setValues(newValues);
        }
    }
  };

  return(
    <div className="inputs">
      {Array.from({ length }).map((_, index) => (
        <input
        key={index}
        ref={(el) => (inputsRef.current[index] = el)}
        type="text"
        maxLength={1}
        inputMode="numeric"
        value={values[index]}
        onChange={(e) => handleChange(e, index)}
        onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}