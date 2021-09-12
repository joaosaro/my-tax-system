import React from "react";
import { useTaxSystem } from "../../app-state/tax-system";
import "./styles.scss";

const Form = () => {
  const { rankCount, setRankCount } = useTaxSystem();

  const onChangeEscaloes = (event) => {
    const newNumber = Number(event.target.value);

    setRankCount(newNumber >= 0 ? newNumber : rankCount);
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
          value={rankCount}
          onChange={onChangeEscaloes}
        />
      </div>
      <hr />

      {[...new Array(rankCount + 1)].fill(0).map((_, index) => {
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
