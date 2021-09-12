export function parseCurrency(value: number) {
  return value.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
}

export function parsePercentage(value: number) {
  return `${(value * 100).toFixed(1)} %`;
}
