/* get students by locations */
export default function getStudentsByLocation(store, nameOfCity) {
  /* input check */
  if (!(store instanceof Array)) {
    return [];
  }
  return store.filter((item) => (item.location === nameOfCity));
}
