<script>
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';


	let isEditPage = false;
</script>


<main class="flex flex-col h-screen">
	<div class="bg-[#2a2f32] h-14 w-full flex items-center justify-between space-x-3 px-3 py-1 text-[#b1b3b5]">
		<div class="flex items-center space-x-2 select-none">
			<button title="Go Back" on:click={() => goto('/')} class="focus:outline-none hover:bg-[#2a2f32] focus:bg-[#2a2f32] active:bg-[#2a2f32] grid place-items-center h-6 w-6 rounded-full">
				<Icon icon="akar-icons:arrow-left" class="h-5 w-5 text-[#b1b3b5] hover:text-white cursor-pointer"/>
			</button>
			<div>
				<p class="font-medium  md:text-lg">Profile</p>
			</div>
		</div>
		<div class="flex items-center space-x-5 sm:space-x-4">	
			<div on:click={() => isEditPage = !isEditPage} title="Edit Profile">
				<Icon icon="akar-icons:edit" class="h-5 w-5 text-[#b1b3b5] hover:text-white cursor-pointer"/>
			</div>
			<div class="w-px h-5 bg-gray-500" />
			<div title="Log Out" class="text-red-500">
				<Icon icon="fa-solid:power-off" class="h-5 w-5 text-red-500 hover:text-red-600 cursor-pointer"/>	
			</div>
		</div>
	</div>
	<div class="flex-1 h-full">
		<div class="px-3 flex items-center md:flex-row  justify-center py-7 space-x-3 md:space-x-5 max-w-md mx-auto">
			<div class="flex-1">			
				<div class="h-15 w-15 md:h-[7rem] md:w-[7rem] rounded-full border border-gray-700">
					<img class="w-full h-full object-cover rounded-full" src={`https://avatars.dicebear.com/api/male/10.svg`} alt="contact">
				</div>
			</div>
			<div class="">
				<h3 class="md:text-3xl text-xl font-medium md:pb-1">Manohar Maharshi</h3>
				<p class="text-gray-500 md:text-base text-sm">manoharmaharshipadala123@gmail.com</p>
			</div>
		</div>
		<div class="w-full h-1 bg-gray-800" />
		<div class="px-3 py-2">
			{#if isEditPage}
				<div class="max-w-md mx-auto flex flex-col space-y-3">
					<div class="flex flex-col space-y-1">
						<label for="name" class="text-sm font-medium text-green-500">Change Display Name:</label>
						<input id="name" class="focus:border-green-600 rounded-sm px-3 py-2 bg-transparent focus:outline-none border border-gray-700" type="text" placeholder="Change Display Name">
					</div>
					<div class="flex flex-col space-y-1">
						<label for="pic" class="text-sm font-medium text-green-500">Change Proflie Pic:</label>
						<input id="pic" class="focus:border-green-600 rounded-sm px-3 py-2 bg-transparent focus:outline-none border border-gray-700" type="text" placeholder="Change Profile Pic (URL)">
					</div>
					<div class="flex flex-col space-y-1">
						<label for="bio" class="text-sm font-medium text-green-500">Change Bio:</label>
						<textarea placeholder="Change Bio" maxlength="250" name="bio" id="bio" rows="5" class="resize-none focus:border-green-600 rounded-sm px-3 py-1.5 bg-transparent focus:outline-none border border-gray-700"></textarea>
					</div>
					<div class="self-end pt-1">
						<button class="rounded bg-green-700 text-gray-100 font-medium px-3.5 py-1.5 text-base">Save</button>
					</div>
				</div>
			{:else}			
				<div class="mb-4">
					<p class="font-medium text-green-500">Bio: </p>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nisi fugiat cumque necessitatibus, reiciendis dolores voluptatibus nostrum velit laborum quasi pariatur? Aliquid delectus accusamus harum autem laboriosam ab. Et, corrupti.</p>
				</div>
				<div class="mb-4">
					<p class="font-medium text-green-500">Email: </p>
					<p>manoharmaharshipadala123@gmail.com</p>
				</div>
				<p class="text-sm text-gray-500">last loggedin: 12:40PM</p>
			{/if}
		</div>
	</div>	
	<div class="py-3 flex items-center justify-between px-3 bg-[#11191d]">
		<a href="https://kit.svelte.dev/">
			<Icon icon="logos:svelte" />
		</a>
		<p class="font-medium text-sm">Made with &#10084; by <a href="https://twitter.com/Maharshine" target="_blank" class="hover:underline">Manohar Maharshi</a></p>
	</div>
</main>