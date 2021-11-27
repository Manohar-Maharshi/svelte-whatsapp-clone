<script>
	import SideBar from '$lib/components/SideBar.svelte'
	import ChatContainer from '$lib/components/ChatContainer.svelte'
</script>
<main class="w-full flex items-start">
	<aside class="w-[30%]">
		<SideBar />
	</aside>
	<aside class="w-[70%]">
		<ChatContainer />
	</aside>
</main>