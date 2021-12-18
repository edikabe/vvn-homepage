import type { Signalement } from "../../src/lib/models"
import { countByMonth, worstMonth } from "../../src/lib/stats-helpers"
import { range } from "ramda"

function signalement(date: string): Signalement {
  return {
    marqueVelo: "",
    dateVol: date,
    couleurVelo: "",
    typeSignalement: "Vélo volé",
    typeVelo: "",
  }
}

function generateSignalements(monthYear: string, n: number): Signalement[] {
  return range(0, n).map((n) => signalement(`01/${monthYear}`))
}

const SIGNALEMENTS: Signalement[] = generateSignalements("01/2021", 20)
  .concat(generateSignalements("05/2021", 15))
  .concat(generateSignalements("11/2021", 7))

describe("stats-helpers", () => {
  test("groupByMonth", () => {
    //given

    //when
    let result = countByMonth(SIGNALEMENTS)

    //then
    expect(Object.keys(result)).toStrictEqual(["01/2021", "05/2021", "11/2021"])
    expect(Object.values(result)).toStrictEqual([20, 15, 7])
  })

  test("worstMonth", () => {
    //When
    const result = worstMonth(SIGNALEMENTS);

    //then
    console.log(result)
  })
})
