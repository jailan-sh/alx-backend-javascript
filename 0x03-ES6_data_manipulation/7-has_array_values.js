export default function hasValuesFromArray(set, array) {
  // const mySet = new Set(array);
  //  return Array.from(mySet).every((element) => set.has(element))
  return array.every((element) => set.has(element));
}
