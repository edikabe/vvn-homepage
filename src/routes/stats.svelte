<script lang="ts">
  import { onMount } from "svelte"
  import { ExportInfo, mapSignalements, Signalement } from "../lib/models"
  import Chart from "svelte-frappe-charts"
  import { countBy, groupBy, map } from "ramda"

  let signalementsParMois: Promise<any> = Promise.resolve()
  let signalementsParTypeVelo: Promise<any> = Promise.resolve()
  let exportInfo: Promise<ExportInfo> = Promise.resolve(null)

  async function fetchStolenBikesData(): Promise<Signalement[]> {
    const response = await fetch("/data/stolen_bikes.json")
    return mapSignalements(await response.json())
  }

  async function fetchExportInfo(): Promise<ExportInfo> {
    const response = await fetch("/data/export-info.json")
    return await response.json()
  }

  function signalementsParMoisAggregat(signalementsVol: Signalement[]): any {
    const theftsByMonth = countBy((s: Signalement) => s.dateVol.substring(3))(
      signalementsVol
    )
    return Promise.resolve({
      title: "Signalements sur 2021",
      labels: Object.keys(theftsByMonth),
      datasets: [
        { name: "signalements", values: Object.values(theftsByMonth) },
      ],
    })
  }

  function parTypeVelo(signalementsVol: Signalement[]): any {
    const byType = groupBy((s: Signalement) => s.typeVelo)(signalementsVol)
    const countByType = map((entry: any[]) => entry.length, byType)
    return Promise.resolve({
      title: "Count by type",
      labels: Object.keys(countByType),
      datasets: [
        { name: "Nombre signalements par type de vélo", values: Object.values(countByType) },
      ],
    })
  }

  onMount(async () => {
    const signalementsVol = await fetchStolenBikesData()
    signalementsParMois = signalementsParMoisAggregat(signalementsVol)
    signalementsParTypeVelo = parTypeVelo(signalementsVol)
    exportInfo = Promise.resolve(await fetchExportInfo())
  })
</script>

<svelte:head>
  <title>VéloVoléNantes - Statistiques</title>
</svelte:head>
<main class="container mx-auto w-4/5 min-h-full">
  <div class="p-3">
    <div class="mt-2">
      {#await signalementsParMois}
        <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
      {:then value}
        <div class="rounded-sm border-red-300 bg-slate-100 p-2">
          <h1 class="text-gray-700">Signalements de vol sur 2021</h1>
          <Chart data={value} type="bar" />
        </div>
      {/await}
    </div>

    <div class="mt-2">
      {#await signalementsParTypeVelo}
        <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
      {:then value}
        <div class="rounded-sm border-red-300 bg-slate-100 p-2">
          <h1 class="text-gray-700">Signalements par type de vélo sur 2021</h1>
          <Chart data={value} type="pie" maxSlices={10}/>
        </div>
      {/await}
    </div>

    {#await exportInfo then value}
      <div class="text-xs mt-2">
        date export: {new Date(value.creation * 1000)}
      </div>
    {/await}
  </div>
</main>
