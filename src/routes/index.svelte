<script lang="ts">
  import logo from "../assets/vvn-logo.png"
  import Icon from "../lib/components/Icon.svelte"
  import TwitterTimelineWidget from "../lib/components/TwitterTimelineWidget.svelte"
</script>
<svelte:head>
  <title>VéloVoléNantes - Accueil</title>
</svelte:head>
<main class="container lg:w-1/2 mx-auto pb-16 pl-5 pr-5">
  <img class="w-full h-auto mt-3" src={logo} alt="Logo Vélo volé Nantes" />
  <div class="p-2 mt-3 text-justify">
    <h3 class="font-bold">Notre mission</h3>
    <p class="mt-3">
      Un vélo volé (ou trouvé) à #Nantes et sa
      métropole? <br />
      Nous mettons à votre disposition un
      <a
        class="tool-link"
        href="https://framaforms.org/velo-vole-ou-trouve-a-nantes-metropole-1573917572"
        target="_blank">formulaire</a
      >
      pour le signaler. <br />
      Suite à votre signalement, nous diffusons celui-ci sur les réseaux sociaux.
    </p>
    <p>Nous lançons l'alerte & recherche pour vous !!</p>
    <hr class="separator" />
    <h3 class="font-bold">Nos outils</h3>
    <p class="mt-3">
      Vous pouvez consulter notre <a
        class="tool-link"
        href="https://www.facebook.com/pg/velovolenantes/photos/?tab=album&album_id=111364296977406"
        target="_blank">base de données de photos</a
      >.
    </p>
    <p class="mt-3">
      Une fois les données de ces signalements compilées nous mettons à
      disposition des bilans:
    </p>
    <ul class="list-disc ml-10 mt-2">
      <li>
        <a
          class="tool-link"
          href="http://velovolenantes.fr/data/velovolenantes_bilan_2020_CCBYSA3.0FR.pdf"
          target="_blank">Bilan 2020</a
        >
      </li>
    </ul>

    <hr class="separator" />
    <h3 class="font-bold">Vous souhaitez nous aider?</h3>
    <div>
      Abonnez-vous / partagez sur: <br />
      <div class="mt-3">
        <a
          rel="noreferrer noopener"
          href="https://twitter.com/velovolenantes/"
          target="_blank"
          class="tool-link block"
        >
          <Icon name="twitter" width="30" height="30" />@velovolenantes</a
        >
        <a
          rel="noreferrer noopener"
          href="https://www.facebook.com/velovolenantes/"
          target="_blank"
          class="tool-link block"
        >
          <Icon name="facebook" width="30" height="30" />velovolenantes</a
        >
      </div>
    </div>
  </div>
  <hr class="separator" />
  <div class="container mx-auto w-80 mt-6">
    <TwitterTimelineWidget />
  </div>
</main>
<style lang="postcss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .separator {
    @apply border-t-gray-300 border-dashed mt-3 mb-3;
  }
  .tool-link {
    @apply text-blue-700 font-bold;
  }
  .tool-link:hover {
    @apply underline;
  }
</style>
