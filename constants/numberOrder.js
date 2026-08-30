export default function numberPronoun(num) {
  const safeNum = Number(num);

  if (!Number.isInteger(safeNum)) return "th";
  if (safeNum % 100 >= 11 && safeNum % 100 <= 13) return "th";

  switch (safeNum % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
