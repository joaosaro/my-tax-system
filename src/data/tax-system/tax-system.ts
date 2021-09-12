export type RankType = {
  wageStart: number;
  taxRate: number;
};

export type TaxSystemType = {
  ranks: RankType[];
};

const DEDUCTIBLE = 4104;

export const portugueseTaxSystem: TaxSystemType = {
  ranks: [
    {
      wageStart: DEDUCTIBLE,
      taxRate: 0,
    },
    {
      wageStart: 7112 + DEDUCTIBLE,
      taxRate: 14.5,
    },
    {
      wageStart: 10732 + DEDUCTIBLE,
      taxRate: 23,
    },
    {
      wageStart: 20322 + DEDUCTIBLE,
      taxRate: 28.5,
    },
    {
      wageStart: 25075 + DEDUCTIBLE,
      taxRate: 35,
    },
    {
      wageStart: 36967 + DEDUCTIBLE,
      taxRate: 37,
    },
    {
      wageStart: 80882 + DEDUCTIBLE,
      taxRate: 45,
    },
    {
      wageStart: Infinity,
      taxRate: 48,
    },
  ],
};
