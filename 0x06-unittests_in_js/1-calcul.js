function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type === 'SUM') {
    return a + b;
  } else if (type === 'SUBTRACT') {
    return a - b;
  } else if (type === 'DIVIDE') {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Error';
    }
  }
}

module.exports = calculateNumber;
