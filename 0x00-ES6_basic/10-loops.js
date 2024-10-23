export default function appendToEachArrayValue(array, appendString) {
  const storeArray = [];
  for (const value of array) {
    storeArray.push(appendString + value);
  }

  return storeArray;
}
