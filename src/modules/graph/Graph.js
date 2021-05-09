import React from "react";
import { Line } from "react-chartjs-2";
import { irsCalc } from "./calculos";
import { escaloes } from "./escaloes";
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
  return (
    <div className="results">
      <div className="graph">
        <Line data={data} options={options} />
      </div>
      <hr />
      <table className="table-irs">
        <thead>
          <tr>
            <th>Rendimento anual</th>
            <th>IRS</th>
            <th>Taxa efectiva</th>
            <th>Total com TSU - empregado</th>
            <th>Rendimento líquido</th>
          </tr>
        </thead>
        <tbody>
          {[
            // 665,
            // 750,
            // 875,
            // 1000,
            // 1250,
            1500,
            // 1750,
            // 2000,
            // 2500,
            // 3000,
            // 4000,
            // 5000,
            // 7500,
            // 10000,
          ].map((rendimento, index) => {
            const rendimentoAnual = rendimento * 14;

            return (
              <tr key={index}>
                <td>{rendimentoAnual}€</td>
                <td>{irsCalc(rendimentoAnual, escaloes)}</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Graph;
