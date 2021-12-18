<script>
  import Navbar from "$lib/components/Navbar.svelte"
  import "../app.css"
</script>

<Navbar />
<slot />
<footer class="bg-gray-200 p-3 text-center text-white bottom-0 w-full">
  <a href="https://velovolenantes.fr">#VéloVoléNantes</a>, 2021.
</footer>
