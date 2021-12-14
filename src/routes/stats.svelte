<script lang="ts">
  import { onMount } from "svelte"
  import { mapSignalements, Signalement } from "../lib/models"
  import Chart from "svelte-frappe-charts"
  import { countBy } from "ramda"

  let signalements: Signalement[]
  let signalementsParMois: Promise<any> = Promise.resolve()

  let plop: Promise<string> = Promise.resolve("")

  function getMonth(s: Signalement): string {
    return s.dateVol.substring(3)
  }

  onMount(async () => {
    const response = await fetch("/data/stolen_bikes.json")
    signalements = mapSignalements(await response.json())
    const theftsByMonth = countBy(getMonth)(signalements)
    plop = Promise.resolve("kapoueeee")
    signalementsParMois = Promise.resolve({
      title: "Signalements sur 2021",
      labels: Object.keys(theftsByMonth),
      datasets: [
        { name: "signalements", values: Object.values(theftsByMonth) },
      ],
    })
  })
</script>

<svelte:head>
  <title>VéloVoléNantes - Statistiques</title>
</svelte:head>
<main class="container mx-auto w-4/5">
  <div class="p-3">
    {#await signalementsParMois}
      <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
    {:then value}
      <div class="rounded-sm border-red-300 bg-slate-100 p-2">
        <h1 class="text-gray-700">Signalements sur 2021</h1>
        <Chart data={value} type="bar" />
      </div>
    {/await}
  </div>
</main>
