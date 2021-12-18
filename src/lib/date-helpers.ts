export const MONTH_NUMBER_TO_MONTH_NAME = {
  "01": "janvier",
  "02": "février",
  "03": "mars",
  "04": "avril",
  "05": "mai",
  "06": "juin",
  "07": "juillet",
  "08": "août",
  "09": "septembre",
  "10": "octobre",
  "11": "novembre",
  "12": "décembre",
}

export const monthYearLiteralToMonthName = (monthYear: string): string =>
  MONTH_NUMBER_TO_MONTH_NAME[monthYear.substring(0, 2)]
