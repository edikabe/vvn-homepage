import { countBy, maxBy, reduce, prop, findIndex, max } from "ramda";
import type { Signalement } from "./models";

export function countByMonth(signalements: Signalement[]): {[key: string]: number} {
  return countBy((s: Signalement) => s.dateVol.substring(3))( signalements);
}

function decimalAdjust(type, value, exp) {
  // Si l'exposant vaut undefined ou zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;
  // Si value n'est pas un nombre
      // ou si l'exposant n'est pas entier
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  }
  // Décalage
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
  // Re "calage"
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}
function round10(value, exp) {
  return decimalAdjust('round', value, exp);
};

export function worstMonth(signalements: Signalement[]): {month: string, count: number, meanByDay: number} | null {
  const countbyMonthRes = countByMonth(signalements);
  const flattenCountByMonth = Object.keys(countbyMonthRes).map(k => ({m: k, c: countbyMonthRes[k]}));
  const maxVal = Math.max(...Object.values(countbyMonthRes));
  const itemsWithMaxVal = flattenCountByMonth.filter((s: {m: string, c: number}) => s.c === maxVal);
  return itemsWithMaxVal.length ? {
    month: itemsWithMaxVal[0].m,
    count: itemsWithMaxVal[0].c,
    meanByDay: round10(itemsWithMaxVal[0].c / 30, -1)
  } : null
}