import React from "react";
import { useState } from "react";
import List from "./List";

const Parent = () => {
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState({
    country: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const findCountry = countries.find((c) => c.country === formData.country);
  const emptyValue = !formData.country || formData.country.trim() === "";

  const updateFormData = (event) => {
    const { name, value } = event.target;
    setFormData((Data) => ({
      ...Data,
      [name]: name === "country" ? value : Number(value),
    }));
  };

  const addCountry = (event) => {
    event.preventDefault();
    if (emptyValue) {
      alert("국가명을 입력해주세요.");
      return;
    } else if (findCountry) {
      alert("이미 등록된 국가입니다.");
      return;
    }
    setCountries([...countries, formData]);
    initialize();
  };

  const updateCountry = () => {
    if(emptyValue){
        alert("국가명을 입력해주세요.")
        return;
    }
    else if(!findCountry){
        alert("등록된 국가가 없으니 먼저 국가를 추가해주세요.")
        return;
    }
    const updatedCountries = countries.map((country) => country.country === formData.country ? { ...country, ...formData} : country )
    setCountries(updatedCountries);
    initialize();
  }

  const initialize = () => {
    setFormData({
      country: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  return (
    <main>
      <header>
        <h1> 2024 파리 올림픽 </h1>
      </header>
      <form>
        <div>
          <label> 국가명 </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={updateFormData}
            placeholder="국가명을 입력하세요"
          />
        </div>
        <div>
          <label> 금메달 </label>
          <input
            type="number"
            name="gold"
            value={formData.gold}
            onChange={updateFormData}
          />
        </div>
        <div>
          <label> 은메달 </label>
          <input
            type="number"
            name="silver"
            value={formData.silver}
            onChange={updateFormData}
          />
        </div>
        <div>
          <label> 동메달 </label>
          <input
            type="number"
            name="bronze"
            value={formData.bronze}
            onChange={updateFormData}
          />
        </div>
        <button type="submit" onClick={addCountry}>
          국가 추가
        </button>
        <button type="button" onClick={updateCountry}>
          업데이트
        </button>
      </form>
      <List countries={countries} setCountrie={setCountries} />
    </main>
  );
};

export default Parent;
