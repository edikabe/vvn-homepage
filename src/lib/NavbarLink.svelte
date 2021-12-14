<script lang="ts">
  export let href: string;
  export let target: string = "";
</script>

<a
  {href}
  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  target={target}
  ><slot></slot></a
>
