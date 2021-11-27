<script>
	import Icon from '@iconify/svelte';
</script>

<main class="w-full flex flex-col justify-between h-screen">
	<div class="shadow-sm border-l border-gray-700 bg-[#2a2f32] h-14 w-full flex items-center space-x-3 justify-between px-3 py-1 text-[#b1b3b5]">
		<div class="flex-1 flex items-center space-x-3">
			<div class="w-10 h-10 cursor-pointer border border-gray-700 rounded-full shadow">
				<img class="w-full h-full rounded-full object-cover" src="https://avatars.dicebear.com/api/male/seed.svg" alt="profile">
			</div>
			<div class="w-full">
				<h3 class="text-white font-medium line-clamp-1">New Group Under Constraction</h3>
				<p class="text-xs line-clamp-1">
					{#each Array(10) as item, index}
						<span>Group Member Name </span>
					{/each}
				</p>
			</div>
		</div>
		<div class="">	
			<Icon icon="bi:three-dots-vertical" class="h-5 w-5 text-[#b1b3b5] hover:text-white cursor-pointer"/>
		</div>
	</div>
	<div class="flex-1 border-l border-gray-700  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
		<div class="mt-4 mb-1 px-3 text-[#f1f1f2f2]">
			{#each Array(10) as item, index}
				<div class="w-full flex items-center justify-start">
					<div class="shadow w-[65%] max-w-max bg-[#2a2f32] rounded-md px-2.5 py-1 my-1">
						<div class="flex justify-between pb-1">
							<p class="text-xs font-medium text-gray-400 line-clamp-1">Manohar Maharshi</p>
							<p class="text-xs font-medium text-gray-400">10:51 AM</p>
						</div>
						<p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa inventore magnam accusantium voluptas, sed nisi est laborum, quibusdam illum ducimus cupiditate eligendi, ex hic labore! Atque corporis amet officiis. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed!</p>				
					</div>
				</div>
				<div class="w-full flex items-center justify-end">
					<div class="shadow w-[65%] max-w-max bg-[#056162] rounded-md px-2.5 py-1 my-1">
						<div class="flex justify-between pb-1">
							<p class="text-xs font-medium text-green-300 line-clamp-1">Manohar Maharshi</p>
							<p class="text-xs font-medium text-green-300">10:51 AM</p>
						</div>
						<p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sed!</p>				
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="px-3 w-full border-l border-gray-700 bg-[#1e2428] h-16 flex items-center justify-center">
		<div class="w-full flex items-center space-x-2">
			<button class="focus:outline-none focus:bg-[#2a2f32] active:bg-[#2a2f32] grid place-items-center h-10 w-10 rounded-full">
				<Icon icon="bx:bxs-image-add" class="h-6 w-6 text-[#b1b3b5] hover:text-white cursor-pointer"/>
			</button>
			<div class="flex-1 bg-[#2a2f32] shadow rounded-full">
				<input placeholder="Type a message" class="px-4 w-full bg-transparent py-2.5 rounded-full focus:outline-none" type="text">
			</div>
			<button class="focus:outline-none focus:bg-[#2a2f32] active:bg-[#2a2f32] grid place-items-center h-10 w-10 rounded-full">
				<Icon icon="fluent:send-16-filled" class="h-6 w-6 text-[#b1b3b5] hover:text-white cursor-pointer"/>
			</button>
		</div>
	</div>
</main>