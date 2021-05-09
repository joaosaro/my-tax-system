const dedutivel = 4104;

const raw = [
  dedutivel,
  7112 + dedutivel,
  10732 + dedutivel,
  20322 + dedutivel,
  25075 + dedutivel,
  36967 + dedutivel,
  80882 + dedutivel,
  Infinity,
];

export const escaloes = {
  [raw[0]]: 0,
  [raw[1]]: 14.5,
  [raw[2]]: 23,
  [raw[3]]: 28.5,
  [raw[4]]: 35,
  [raw[5]]: 37,
  [raw[6]]: 45,
  [raw[7]]: 48,
};
