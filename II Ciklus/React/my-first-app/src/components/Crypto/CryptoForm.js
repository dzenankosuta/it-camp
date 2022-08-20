import React, { useState } from "react";
import "./CryptoForm.css";
import CryptoList from "./CryptoList";

const listOfCrypto = [
  { id: 0, name: "Bitcoin", value: 21355 },
  { id: 1, name: "Ethereum", value: 1650 },
  { id: 2, name: "Cardano", value: 0.465 },
  { id: 3, name: "Dogecoin", value: 0.071 },
  { id: 4, name: "Polkadot", value: 7.54 },
  { id: 5, name: "BNB", value: 291.39 },
  { id: 6, name: "Avalanche", value: 23.07 },
];

const CryptoForm = () => {
  const [cryptoList, setCryptoList] = useState(listOfCrypto);
  const [userData, setUserData] = useState({
    name: "",
    value: "",
  });

  const onAddCrypto = (event) => {
    event.preventDefault();
    if (
      userData.name.trim().length === 0 ||
      userData.value.trim().length === 0
    ) {
      return alert("You must enter the name and value of Crypto.");
    } else if (+userData.value <= 0) {
      return alert("Value must be above 0.");
    }
    setCryptoList((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2, 7),
        name: userData.name,
        value: +userData.value,
      },
    ]);
    setUserData({
      name: "",
      value: "",
    });
  };

  const deleteCrypto = (id) => {
    const newCryptoList = cryptoList.filter((value) => value.id !== id);
    setCryptoList(newCryptoList);
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="CryptoName"></label>
        <input
          type="text"
          name="CryptoName"
          id="CryptoName"
          placeholder="Crypto Name"
          required
          value={userData.name}
          onChange={(event) =>
            setUserData((prev) => ({
              ...prev,
              name: event.target.value,
            }))
          }
        ></input>

        <label htmlFor="CryptoValue"></label>
        <input
          type="number"
          name="CryptoValue"
          id="CryptoValue"
          placeholder="Crypto Value"
          required
          value={userData.value}
          onChange={(event) =>
            setUserData((prev) => ({
              ...prev,
              value: event.target.value,
            }))
          }
        ></input>

        <button className="btn1" type="submit" onClick={onAddCrypto}>
          ADD
        </button>
      </form>

      <h3 className="h3">Crypto List Items</h3>

      {cryptoList.map((value) => (
        <CryptoList
          key={value.id}
          name={value.name}
          value={value.value}
          deleteCrypto={() => deleteCrypto(value.id)}
        />
      ))}
    </div>
  );
};

export default CryptoForm;
