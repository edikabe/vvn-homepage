<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import logo from "./assets/vvn-logo.png"
</script>
<Navbar/>
<main class="container mx-auto">
  <img class="w-full h-auto lg:w-1/2" src={logo} alt="Logo Vélo volé Nantes" />
  <p class="p-6 text-center">
    Un v&eacute;lo vol&eacute; (ou trouv&eacute;) &agrave; #Nantes ?
  </p>
  <p>
    <a
      href="https://framaforms.org/velo-vole-ou-trouve-a-nantes-metropole-1573917572"
      >Formulaire pour le signaler</a
    >
  </p> 
  <p>
    <a
      href="https://www.facebook.com/pg/velovolenantes/photos/?tab=album&album_id=111364296977406"
      >Base de donn&eacute;es photo</a
    >
  </p>
  <p>
    <a
      href="http://velovolenantes.fr/data/velovolenantes_bilan_2020_CCBYSA3.0FR.pdf"
      >Bilan 2020</a
    >
  </p>
  <p>
    Nous lan&ccedil;ons l'alerte & recherche pour vous !!
  </p>
  <p>
    Abonnez-vous / Partagez sur Twitter et Facebook
  </p>
  <p>
    <img src="https://velovolenantes.fr/84ZlKNyIrsW.png" alt="" />
  </p>
  <p>
    <a
      rel="noreferrer noopener"
      href="https://twitter.com/velovolenantes/"
      target="_blank">@velovolenantes</a
    >
  </p>
  <p>
    <img src="https://velovolenantes.fr/_Nw2lbNqxok.png" alt="" />
  </p>
  <p>
    <a
      rel="noreferrer noopener"
      href="https://www.facebook.com/velovolenantes/"
      target="_blank">velovolenantes</a
    >
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    p {
      max-width: none;
    }
  }
</style>
