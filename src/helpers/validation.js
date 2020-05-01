const validation = (numbers) => {
  const numbersSplit = String(numbers).split(",");

  const numbersSplitLength = numbersSplit.length;
  const numbersSplitFilteredLength = numbersSplit.filter((num) => {
    return num && !isNaN(Number(num));
  }).length;

  return numbersSplitLength === numbersSplitFilteredLength;
};

export default validation;
