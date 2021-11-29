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
	<section class="w-full h-full min-h-screen">
		<section>
			<div class="h-14 flex items-center justify-between space-x-2 border-b border-[#252d32] py-2 px-3 h-12">	
				<div class="rounded-full w-full space-x-2  bg-[#2a2f32] px-2.5 flex items-center justify-center ">	
					<Icon icon="ci:search" class="h-5 w-5 pt-0.5 text-[#b1b3b5]"/>
					<input class="outline-none w-full bg-transparent py-1.5" type="text" placeholder="Search contacts">
				</div>
				<div class="w-px h-4 bg-gray-700" />
				<button title="New Contact" class="w-7 h-7 hover:bg-gray-700 rounded-full grid place-items-center">
					<Icon icon="akar-icons:circle-plus" class="h-5 w-5 text-[#b1b3b5]"/>
				</button>
			</div>
		</section>	
		<section class="h-screen pb-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
			{#each Array(20) as _, index}
				<a href="/chat">				
					<div class="w-full h-[72px] border-b border-gray-800">
						<div class="hover:bg-[#323739] h-full cursor-pointer flex items-center justify-between space-x-3  mx-auto px-3 ">			
							<div class="h-12 w-12 rounded-full border border-gray-700">
								<img class="w-full h-full object-cover rounded-full" src={`https://avatars.dicebear.com/api/male/${index+10}.svg`} alt="contact">
							</div>
							<div class="flex-1 w-full">
								<div class="flex items-center justify-between space-x-2 w-full">
									<h3 class="line-clamp-1 w-full text-base">{index} Contact Name</h3>
									<p class="whitespace-nowrap text-xs text-gray-400">4:35 PM</p>
								</div>
								<p class="line-clamp-1 text-sm text-gray-400">Lorem ipsum dolor sit.</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</section>
	</section>
{/if}
{#if 2 === currentTab}	
	<section class="w-full h-full min-h-screen">
		<section>
			<div class="h-14 flex items-center justify-between space-x-2 border-b border-[#252d32] py-2 px-3 h-12">	
				<div class="rounded-full w-full space-x-2  bg-[#2a2f32] px-2.5 flex items-center justify-center ">	
					<Icon icon="ci:search" class="h-5 w-5 pt-0.5 text-[#b1b3b5]"/>
					<input class="outline-none w-full bg-transparent py-1.5" type="text" placeholder="Search groups">
				</div>
				<div class="w-px h-4 bg-gray-700" />
				<button title="New Group" class="w-7 h-7 hover:bg-gray-700 rounded-full grid place-items-center">
					<Icon icon="akar-icons:circle-plus" class="h-5 w-5 text-[#b1b3b5]"/>
				</button>
			</div>
		</section>	
		<section class="h-screen pb-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
			{#each Array(20) as _, index}
				<a href="/group">				
					<div class="w-full h-[72px] border-b border-gray-800">
						<div class="hover:bg-[#323739] h-full cursor-pointer flex items-center justify-between space-x-3  mx-auto px-3 ">			
							<div class="h-12 w-12 rounded-full border border-gray-700">
								<img class="w-full h-full object-cover rounded-full" src={`https://avatars.dicebear.com/api/male/${index+10}.svg`} alt="contact">
							</div>
							<div class="flex-1 w-full">
								<div class="flex items-center justify-between space-x-2 w-full">
									<h3 class="line-clamp-1 w-full text-base">{index} Group Name</h3>
									<p class="whitespace-nowrap text-xs text-gray-400">4:35 PM</p>
								</div>
								<p class="line-clamp-1 text-sm text-gray-400">Lorem ipsum dolor sit.</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</section>
	</section>
{/if}
{#if 3 === currentTab}	
	<section class="w-full h-full min-h-screen">
		<section>
			<div class="h-14 flex items-center justify-center border-b border-[#252d32] py-2 px-3 h-12">	
				<div class="rounded-full w-full space-x-2  bg-[#2a2f32] px-2.5 flex items-center justify-center ">	
					<Icon icon="ci:search" class="h-5 w-5 pt-0.5 text-[#b1b3b5]"/>
					<input class="outline-none w-full bg-transparent py-1.5" type="text" placeholder="Search groups">
				</div>
			</div>
		</section>	
		<section class="h-screen pb-[12rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
			{#each Array(20) as _, index}				
				<div class="w-full h-[72px] border-b border-gray-800">
					<div class="hover:bg-[#323739] h-full cursor-pointer flex items-center justify-between space-x-3  mx-auto px-3 ">			
						<div class="h-12 w-12 rounded-full border border-gray-700">
							<img class="w-full h-full object-cover rounded-full" src={`https://avatars.dicebear.com/api/male/${index+10}.svg`} alt="contact">
						</div>
						<div class="flex-1 w-full flex items-center justify-between">
							<div class="w-full">
								<h3 class="line-clamp-1 w-full text-base">{index} Explore Group Name</h3>
								<p class="line-clamp-1 text-sm text-gray-400">Lorem ipsum dolor sit.</p>
							</div>
							<button class="bg-green-600  px-4 py-1 shadow">
								<span class="uppercse text-sm text-gray-900 font-medium">JOIN</span>
							</button>
						</div>
					</div>
				</div>
			{/each}
		</section>
	</section>
{/if}