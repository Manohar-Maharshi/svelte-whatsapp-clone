<script>
  import { onMount } from "svelte";

  export let items = [];
  export let activeTabValue;

  onMount(() => {
    // Set default tab value
    if (Array.isArray(items) && items.length && items[0].value) {
      activeTabValue = items[0].value;
    }
  });

  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<main class="w-full h-12">
	<ul class="w-full flex items-center justify-between space-x-2 h-full text-center ">
	  {#if Array.isArray(items)}
	    {#each items as item}
	      <li on:click={handleClick(item.value)} class="{activeTabValue === item.value ? 'border-b-2 text-green-500 border-green-700' : ''} cursor-pointer w-full h-full text-center flex items-center justify-center">
	        <span class="font-medium text-sm">{item.label}</span>
	      </li>
	    {/each}
	  {/if}
	</ul>
</main>