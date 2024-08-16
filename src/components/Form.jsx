import React from "react";

const Form = ({ formData, updateFormData }) => {
  const inputFields = [
    {label: "국가명", type: "text", name: "country", placeholder: "국가명을 입력하세요.",},
    { label: "금메달", type: "number", name: "gold", placeholder: "0" },
    { label: "은메달", type: "number", name: "silver", placeholder: "0" },
    { label: "동메달", type: "number", name: "bronze", placeholder: "0" },
  ];
  return (
    <form>
      {inputFields.map( ({ label, type, name, placeholder }) => {
        <div>
          <label>{label}</label>
          <input
            name={name}
            type={type}
            value={formData[name]}
            onChange={updateFormData}
            placeholder={placeholder}
          />
        </div>;
      })}
      <div>
        <button type="submit">국가 추가</button>
        <button type="button">업데이트</button>
      </div>
    </form>
  );
};

export default Form;
