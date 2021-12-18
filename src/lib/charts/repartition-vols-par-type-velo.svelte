<script lang="ts">
  import {groupBy, map} from "ramda"
  import type { Signalement } from "$lib/models"
  import Chart from "svelte-frappe-charts"

  export let data: Signalement[] = []

  function parTypeVelo(signalementsVol: Signalement[]): any {
    const byType = groupBy((s: Signalement) => s.typeVelo)(signalementsVol)
    return map((entry: any[]) => entry.length, byType)
  }
  const aggregated = parTypeVelo(data)

  let graphConfig = {
    title: "Count by type",
    labels: Object.keys(aggregated),
    datasets: [
      {
        name: "Signalements par type de vélo",
        values: Object.values(aggregated),
        chartType: "bar",
      },
    ],
  }
</script>

<div class="rounded-sm border-red-300 bg-slate-100 p-2">
  <h1 class="text-gray-700">Signalements par type de vélo sur 2021</h1>
  <Chart data={graphConfig} type="pie" maxSlices={10} />
</div>
