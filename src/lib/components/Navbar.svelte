<script lang="ts">
  import MobileMenuLink from "./MobileMenuLink.svelte";
  import NavbarLink from "./NavbarLink.svelte";
  import { page } from "$app/stores";

  let mobileMenuOpened: boolean = false;
  page.subscribe(() => {
    mobileMenuOpened = false;
  });
</script>

<nav class="bg-gray-700">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="">
        <a href="/" title="Accueil">
          <span class="font-bold text-white"
            >#<span class="text-green-600">Vélo</span>VoléNantes</span
          ></a
        >
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => (mobileMenuOpened = !mobileMenuOpened)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="{mobileMenuOpened ? 'hidden' : 'block'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="{mobileMenuOpened ? 'block' : 'hidden'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
      >
        <div class="hidden sm:block sm:ml-6">
          <div class="flex space-x-4">
            <NavbarLink href="/signaler">Formulaire de signalement</NavbarLink>
            <NavbarLink
              target="_blank"
              href="https://www.facebook.com/pg/velovolenantes/photos/?tab=album&album_id=111364296977406"
            >
              Photos
            </NavbarLink>
            <NavbarLink href="/stats">Statistiques</NavbarLink>
            <!--<NavbarLink href="/bilan-2020">Bilan 2020</NavbarLink>-->
          </div>
        </div>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      />
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div
    class="sm:hidden {mobileMenuOpened ? 'block' : 'hidden'}"
    id="mobile-menu"
  >
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <MobileMenuLink href="/signaler">
        Formulaire de signalement
      </MobileMenuLink>
      <MobileMenuLink
        target="_blank"
        href="https://www.facebook.com/pg/velovolenantes/photos/?tab=album&album_id=111364296977406"
      >
        Photos
      </MobileMenuLink>
      <MobileMenuLink href="/stats">Statistiques</MobileMenuLink>
      <!--<MobileMenuLink href="/bilan-2020">Bilan 2020</MobileMenuLink>-->
    </div>
  </div>
</nav>
