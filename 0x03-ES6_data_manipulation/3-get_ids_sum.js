/* get the sum of ids */
export default function getStudentIdsSum(store) {
  if (!(store instanceof Array)) {
    return 0;
  }
  return store.reduce(
    (accumulator, currentValue) => accumulator.id || accumulator + currentValue.id,
    0,
  );
}
