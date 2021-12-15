<script lang="ts">
  import { onMount } from "svelte"
  import { ExportInfo, mapSignalements, Signalement } from "../lib/models"
  import Chart from "svelte-frappe-charts"
  import { countBy } from "ramda"

  let signalements: Signalement[]
  let signalementsParMois: Promise<any> = Promise.resolve()
  let exportInfo: Promise<ExportInfo> = Promise.resolve(null);

  function getMonth(s: Signalement): string {
    return s.dateVol.substring(3)
  }

  async function fetchStolenBikesData(): Promise<Signalement[]> {
    const response = await fetch("/data/stolen_bikes.json")
    return mapSignalements(await response.json())
  }

  async function fetchExportInfo(): Promise<ExportInfo> {
    const response = await fetch("/data/export-info.json")
    return await response.json();
  }

  onMount(async () => {
    const signalementsVol = await fetchStolenBikesData();
    const theftsByMonth = countBy(getMonth)(signalementsVol)
    signalementsParMois = Promise.resolve({
      title: "Signalements sur 2021",
      labels: Object.keys(theftsByMonth),
      datasets: [
        { name: "signalements", values: Object.values(theftsByMonth) },
      ],
    })
    exportInfo = Promise.resolve((await fetchExportInfo()));
  })
</script>

<svelte:head>
  <title>VéloVoléNantes - Statistiques</title>
</svelte:head>
<main class="container mx-auto w-4/5 min-h-full">
  <div class="p-3">
    {#await signalementsParMois}
      <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
    {:then value}
      <div class="rounded-sm border-red-300 bg-slate-100 p-2">
        <h1 class="text-gray-700">Signalements de vol sur 2021</h1>
        <Chart data={value} type="bar" />
      </div>
    {/await}
    {#await exportInfo then value}
      <div class="text-xs mt-2">date export: { new Date(value.creation * 1000) }</div>
    {/await}
  </div>
</main>
