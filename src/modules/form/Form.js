import React, { useState } from "react";
import "./styles.scss";

const Form = () => {
  const [escaloes, setEscaloes] = useState(5);

  // eslint-disable-next-line prettier/prettier
  const onChangeEscaloes = (event) => {
    const newNumber = Number(event.target.value);

    setEscaloes(newNumber >= 0 ? newNumber : escaloes);
  };

  return (
    <form className="form">
      <div className="form__field">
        <label htmlFor="quantos" className="form__label">
          Quantos escalões?
        </label>
        <input
          id="quantos"
          className="form__input"
          type="number"
          value={escaloes}
          onChange={onChangeEscaloes}
        />
      </div>
      <hr />

      {[...new Array(escaloes + 1)].fill(0).map((_, index) => {
        return (
          <div className="form__field" key={index}>
            <label className="form__label" htmlFor={"escalao" + index}>
              Escalão {index}
            </label>
            <input
              id={"escalao" + index}
              className="form__input"
              type="number"
            />
          </div>
        );
      })}
    </form>
  );
};

export default Form;
