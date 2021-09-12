import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { useTaxSystem } from "../../app-state/tax-system";
import { portugueseTaxSystem } from "../../data/tax-system";
import { wages } from "../../data/wages";
import { calcIRS } from "../../utils/irs-calcs";
import { parseCurrency, parsePercentage } from "../../utils/parseValues";
import "./styles.scss";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const Graph = () => {
  const [isMonthlyWage, setIsMonthlyWage] = useState(false);
  const [taxSystem, setTaxSystem] = useState(portugueseTaxSystem);

  return (
    <div className="results">
      <div className="graph">
        <Line data={data} options={options} />
      </div>
      <hr />
      <div>
        <button onClick={() => setIsMonthlyWage(!isMonthlyWage)}>
          {isMonthlyWage ? "Mudar para anual" : "Mudar para mensal"}
        </button>
      </div>
      <table className="table-irs">
        <thead>
          <tr>
            <th>Rendimento {isMonthlyWage ? "mensal" : "anual"}</th>
            <th>IRS</th>
            <th>Taxa efectiva</th>
            <th>Total com TSU - empregado</th>
            <th>Rendimento líquido</th>
          </tr>
        </thead>
        <tbody>
          {wages.map((monthlyWage) => {
            const anualWage = monthlyWage * 14;
            const irs = calcIRS(anualWage, taxSystem);
            const tsu = anualWage * 0.11;
            const netWage = anualWage - irs - tsu;

            // To present
            const wage = parseCurrency(isMonthlyWage ? monthlyWage : anualWage);
            const irsParsed = parseCurrency(isMonthlyWage ? irs / 12 : irs);
            const effectiveRank = parsePercentage(irs / anualWage);
            const ssParsed = parseCurrency(isMonthlyWage ? tsu / 12 : tsu);
            const netParsed = parseCurrency(
              isMonthlyWage ? netWage / 12 : netWage
            );

            return (
              <tr key={monthlyWage}>
                <td>{wage}</td>
                <td>{irsParsed}</td>
                <td>{effectiveRank}</td>
                <td>{ssParsed}</td>
                <td>{netParsed}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Graph;
