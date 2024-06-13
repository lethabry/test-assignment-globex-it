// Приведение номеров телефонов к единообразному стилю
export const restylePhoneNumber = (phone: string) => {
  const onlyNums = phone.replace(/[^0-9]+/g, '');
  let resultNumber = '';
  if (onlyNums.length === 11) {
    resultNumber += '+' + onlyNums[0];
    for (let i = 1; i < onlyNums.length; i++) {
      if (i === 1) {
        resultNumber += ' (' + onlyNums[i];
      } else if (i === 3) {
        resultNumber += onlyNums[i] + ') ';
      } else if (i === 6) {
        resultNumber += onlyNums[i] + '-';
      } else if (i === 8) {
        resultNumber += onlyNums[i] + '-';
      } else {
        resultNumber += onlyNums[i];
      }
    }
  } else {
    resultNumber += '+1';
    for (let i = 0; i < onlyNums.length; i++) {
      if (i === 0) {
        resultNumber += ' (' + onlyNums[i];
      } else if (i === 2) {
        resultNumber += onlyNums[i] + ') ';
      } else if (i === 5) {
        resultNumber += onlyNums[i] + '-';
      } else if (i === 7) {
        resultNumber += onlyNums[i] + '-';
      } else {
        resultNumber += onlyNums[i];
      }
    }
  }
  return resultNumber;
};
