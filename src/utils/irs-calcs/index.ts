import { TaxSystemType } from "../../data/tax-system";

export function calcIRS(anualWage: number, taxSystem: TaxSystemType) {
  const calc = taxSystem.ranks.reduce(
    (acc, rank) => {
      const { taxRate, wageStart: rankWageStart } = rank;

      if (acc.remainingWage < 0) {
        return acc;
      }

      const partToBeTax =
        anualWage > rankWageStart
          ? rankWageStart - acc.previousRankWage
          : acc.remainingWage;

      const rankTaxValue = partToBeTax * (taxRate / 100);

      return {
        total: acc.total + rankTaxValue,
        previousRankWage: rankWageStart,
        remainingWage: anualWage - rankWageStart,
      };
    },
    { total: 0, previousRankWage: 0, remainingWage: anualWage }
  );

  return calc.total;
}
