<script>	
	import { openProfileModel } from '$lib/store/actions'
	import Profile from '$lib/components/Profile.svelte'
	import ChatList from '$lib/components/ChatList.svelte'
	import TopNav from '$lib/components/TopNav.svelte'

</script>	

<main class="w-full shadow">		
	<section>
		<TopNav />
	</section>
	<section>
		<ChatList />
	</section>
</main>

{#if $openProfileModel}
	<aside class="absolute w-full bg-[#131c21] bg-opacity-90 inset-0">
		<Profile />
	</aside>
{/if}