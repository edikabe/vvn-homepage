<script lang="ts">
  import { ExportInfo, mapSignalements, Signalement } from "../lib/models"
  import SignalementsParMois from "$lib/charts/signalements-par-mois.svelte"
  import RepartitionVolsParTypeVelo from "$lib/charts/repartition-vols-par-type-velo.svelte"

  async function fetchStolenBikesData(): Promise<Signalement[]> {
    const response = await fetch("/data/stolen_bikes.json")
    return mapSignalements(await response.json())
  }

  async function fetchExportInfo(): Promise<ExportInfo> {
    const response = await fetch("/data/export-info.json")
    return await response.json()
  }

  let signalementVols: Promise<Signalement[]> = fetchStolenBikesData()
  let exportInfo: Promise<ExportInfo> = fetchExportInfo()
</script>

<svelte:head>
  <title>VéloVoléNantes - Statistiques</title>
</svelte:head>
<main class="container mx-auto w-4/5 min-h-full">
  <div class="p-3">
    <div class="mt-2">
      {#await signalementVols}
        <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
      {:then value}
        <SignalementsParMois data={value} />
      {/await}
    </div>

    <div class="mt-2">
      {#await signalementVols}
        <div class="p-3 border-blue-200 bg-slate-100">chargement...</div>
      {:then value}
        <RepartitionVolsParTypeVelo data={value} />
      {/await}
    </div>

    {#await exportInfo then value}
      <div class="text-xs mt-2">
        date export: {new Date(value.creation * 1000)}
      </div>
    {/await}
  </div>
</main>
