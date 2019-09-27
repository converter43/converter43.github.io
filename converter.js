const length = (str) => str.length;
const toUpperCase = str => str.toUpperCase();
const converter = (str) => {
  let result = '';
  let nstr = toUpperCase(str)
  for (let i = 0; i < length(str); i += 1) {
    if (nstr[i] === 'A') {
      result += 'U';
      }
    else if (nstr[i] === 'C') {
      result += 'G';
      }
    else if (nstr[i] === 'G') {
      result += 'C';
      }
    else if (nstr[i] === 'T') {
      result += 'A';
      }
    else {
        throw new Error('В строке недопустимый символ!');
      }
    }
  return result;
  }
export default converter;