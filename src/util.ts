export const formatDollar = (dollar: number) => {
  let result = "$ ";
  let current = dollar;
  while (current >= 999) {
    let num = Math.floor(current / 1000);
    result += num.toString();
    result += ",";
    current %= 1000;
  }
  if (current === 0) {
    result += "000.00";
  } else {
    result += current;
    result += ".00";
  }

  return result;
};
