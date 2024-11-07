/* get all ids from an array */
export default function getListStudentIds(store) {
  /* input check */
  if (!(store instanceof Array)) {
    return [];
  }
  return store.map((item) => (item.id));
}
