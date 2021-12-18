<script lang="ts">
  import { monthYearLiteralToMonthName } from "$lib/date-helpers"
  import type { Signalement } from "$lib/models"
  import { worstMonth } from "$lib/stats-helpers"
  import { countBy, maxBy, reduce, mean } from "ramda"
  import Chart from "svelte-frappe-charts"

  export let data: Signalement[] = []
  const theftsByMonth = countBy((s: Signalement) => s.dateVol.substring(3))(
    data
  )
  const monthLabels = Object.keys(theftsByMonth)
  const monthValues = Object.values(theftsByMonth)
  const worstMonthRes = worstMonth(data)
  console.log(worstMonthRes)
  const meanByMonth = Math.floor(mean(monthValues))
  const accumulatedThefts = Object.values(theftsByMonth).reduce((acc, val) => {
    let toPush = acc.length ? acc[acc.length - 1] + val : val
    acc.push(toPush)
    return acc
  }, [])
  let graphConfig = {
    title: "Signalements sur 2021",
    labels: monthLabels,
    datasets: [
      {
        name: "signalements",
        values: monthValues,
        chartType: "bar",
      },
      {
        name: "cumul",
        values: Object.values(accumulatedThefts),
        chartType: "line",
      },
    ],
  }
</script>

<div class="rounded-sm border-red-300 bg-slate-100 p-2">
  <h1 class="text-gray-700">Signalements de vol sur 2021</h1>
  <Chart data={graphConfig} type="axis-mixed" />
  <ul class="analyse text-sm p-3 ml-4 mr-4 mb-2 bg-blue-100">
    <li>
      Nous avons reçu un total de <b>{data.length}</b> signalements sur l'année.
    </li>
    <li>
      En moyenne, nous traitons jusqu'à <b>{meanByMonth}</b> signalements par mois.
    </li>
    <li>
      <b
        >{monthYearLiteralToMonthName(
          worstMonthRes.month
        ).toLocaleUpperCase()}</b
      >
      est le mois où nous avons reçu le plus de signalements avec en moyenne <b>{worstMonthRes.meanByDay}</b>
      signalements par jour.
    </li>
  </ul>
</div>
