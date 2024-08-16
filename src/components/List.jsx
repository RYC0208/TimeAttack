import React from "react";

const List = ({ countries, setCountries }) => {
  return (
    <div>
      {countries.length === 0 ? (
        <p>등록된 국가가 없습니다</p>
      ) : (
        <table>
          <thead>
            <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td>{country.country}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>
                  <button
                    onClick={() => {
                      const filteredCountry = countries.filter(
                        (c) => c.id !== country.id
                      );
                      setCountries(filteredCountry);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;
