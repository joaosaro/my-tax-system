export const irsCalc = (rendimentoAnual, escaloes) => {
  let rendimento = rendimentoAnual;
  let rendimentoRestante = rendimentoAnual;
  let escalaoAnterior = 0;
  let irs = 0;

  for (const escalao in escaloes) {
    const tax = escaloes[escalao];
    rendimentoRestante -= escalaoAnterior;

    if (rendimentoRestante < 0) return;

    const rendimentoATaxar =
      rendimentoRestante > escalao - escalaoAnterior
        ? escalao - escalaoAnterior
        : rendimentoRestante;

    escalaoAnterior = escalao;

    console.log(escalao, tax, rendimentoATaxar);
  }

  return { irs, rendimento };
};
