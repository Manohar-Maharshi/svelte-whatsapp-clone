<script>
	import Icon from '@iconify/svelte';
</script>

<div class="bg-[#2a2f32] h-14 w-full flex items-center justify-between space-x-3 px-3 py-1 text-[#b1b3b5]">
	<a href="/profile">	
		<div class="flex items-center space-x-2 cursor-pointer">
			<div class="w-10 h-10  border border-gray-700 rounded-full shadow">
				<img class="w-full h-full rounded-full object-cover" src="https://avatars.dicebear.com/api/male/seed.svg" alt="profile">
			</div>
			<div>
				<p class="font-medium  md:text-lg">Manohar Maharshi</p>
			</div>
		</div>
	</a>
	<div class="flex items-center space-x-5 sm:space-x-7">	
		<div class="cursor-pointer hover:text-white">	
			<svg viewBox="0 0 24 24" class="w-6 h-6 text-[#b1b3b5] hover:text-white"><path fill="currentColor" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
		</div>	
		<Icon icon="bi:chat-left-text-fill" class="h-5 w-5 text-[#b1b3b5] hover:text-white cursor-pointer"/>
		<Icon icon="bi:three-dots-vertical" class="h-5 w-5 text-[#b1b3b5] hover:text-white cursor-pointer"/>
	</div>
</div>