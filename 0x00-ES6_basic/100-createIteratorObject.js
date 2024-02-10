export default function createIteratorObject(report) {
  const result = [];
  const items = [];
  for (const value of Object.values(report)) {
    if (typeof value === 'object') {
      for (const v of Object.values(value)) {
        result.push(v);
      }
    }
  }
  for (const item of result) items.push(...item);
  return items;
}
