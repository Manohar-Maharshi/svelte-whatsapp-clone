<script>
	import Tabs from '$lib/components/Tabs.svelte'
	import Icon from '@iconify/svelte'; 
	
	let tabItems = [
		{ label: "CHATS", value: 1 },
		{ label: "GROUPS", value: 2 },
		{ label: "EXPLORE", value: 3 }
	];

	let currentTab;
</script>

<Tabs bind:activeTabValue={currentTab} items={tabItems} />
{#if 1 === currentTab}	
	<section>
		<div class="h-14 flex items-center justify-center border-t border-b border-[#252d32] py-2 px-3 h-12">	
			<div class="rounded-full w-full space-x-2  bg-[#2a2f32] px-2.5 flex items-center justify-center ">	
				<Icon icon="ci:search" class="h-5 w-5 pt-0.5 text-[#b1b3b5]"/>
				<input class="outline-none w-full bg-transparent py-1.5" type="text" placeholder="Search chat">
			</div>
		</div>
	</section>	
	<section class="h-screen pb-[10rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
		{#each Array(20) as _, index}
			<div class="w-full h-[72px] border-b border-gray-800">
				<div class="hover:bg-[#323739] h-full cursor-pointer flex items-center justify-between space-x-3  mx-auto px-3 ">			
					<div class="h-12 w-12 rounded-full border border-gray-700">
						<img class="w-full h-full object-cover rounded-full" src={`https://avatars.dicebear.com/api/male/${index+10}.svg`} alt="contact">
					</div>
					<div class="flex-1 w-full">
						<div class="flex items-center justify-between space-x-2 w-full">
							<h3 class="line-clamp-1 w-full text-base">{index} Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</h3>
							<p class="whitespace-nowrap text-xs text-gray-400">4:35 PM</p>
						</div>
						<p class="line-clamp-1 text-sm text-gray-400">Lorem ipsum dolor sit.</p>
					</div>
				</div>
			</div>
		{/each}
	</section>
{/if}