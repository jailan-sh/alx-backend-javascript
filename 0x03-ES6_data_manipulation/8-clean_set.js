export default function cleanSet(set, startString) {
  const array = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((element) => element.slice(startString.length));
  return array.join('-');
}
