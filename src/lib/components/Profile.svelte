<script>
	import Icon from '@iconify/svelte';

	import { openProfileModel } from '$lib/store/actions'

	let isEditProfileBtnClicked = false;
</script>

<div class="flex items-center justify-center py-10 w-full h-screen">
	<div class="bg-[#2a2f32] w-2/6 h-full px-4 py-3 shadow rounded-sm">
		<div class="flex items-center justify-between mb-3">
			<div  class="flex items-center space-x-2">
				<div title="Back To Home" on:click={() => $openProfileModel = !$openProfileModel}>
					<Icon icon="akar-icons:arrow-left" class="w-5 h-5 cursor-pointer" />
				</div>
				<p class="font-medium text-lg cursor-default">Profile</p>
			</div>
			<div>
				{#if isEditProfileBtnClicked}
					<div class="flex items-centers space-x-3">
						<button on:click={() => isEditProfileBtnClicked = !isEditProfileBtnClicked } class="flex items-center space-x-1 text-red-500 px-2 py-1.5">					
							<p class="font-medium">Cancel</p>
						</button>	
						<button on:click={() => isEditProfileBtnClicked = !isEditProfileBtnClicked } class="flex items-center space-x-1 bg-green-700 px-3 py-1.5">					
							<Icon icon="codicon:save-as" />
							<p class="font-medium">Save</p>
						</button>
					</div>
				{:else}					
					<button on:click={() => isEditProfileBtnClicked = !isEditProfileBtnClicked } class="flex items-center space-x-1 bg-green-700 px-3 py-1.5">					
						<Icon icon="la:pen-alt" />
						<p class="font-medium">Edit</p>
					</button>
				{/if}
			</div>
		</div>
		<div class="w-full flex flex-col items-center space-y-5">
			<div class="w-[9rem] cursor-pointer border-2 border-green-700 rounded-full shadow mb-1">
				<img class="w-full h-full rounded-full object-cover" src="https://avatars.dicebear.com/api/male/seed.svg" alt="profile">
			</div>
			{#if isEditProfileBtnClicked}
				<div class="flex-1 flex flex-col space-y-5 w-full">
					<div class="flex flex-col border-2 border-green-700 rounded-sm py-1 px-2">
						<label for="pic" class="text-xs text-green-600 font-medium">Change Profile Pic</label>
						<input placeholder="loremjn, dmfjndmd khbk" class="focus:outline-none w-full pr-3 py-2 pb-1.5 bg-transparent " id="pic" type="text">
					</div>
					<div class="flex flex-col border-2 border-green-700 rounded-sm py-1 px-2">
						<label for="name" class="text-xs text-green-600 font-medium">Change Name</label>
						<input placeholder="loremjn, dmfjndmd khbk" class="focus:outline-none w-full pr-3 py-2 pb-1.5 bg-transparent " id="name" type="text">
					</div>
					<div class="flex flex-col border-2 border-green-700 rounded-sm py-1 px-2">
						<label for="bio" class="text-xs text-green-600 font-medium">Change Bio</label>
						<input placeholder="loremjn, dmfjndmd khbk" class="focus:outline-none w-full pr-3 py-2 pb-1.5 bg-transparent " id="bio" type="text">
					</div>
				</div>

			{:else}					
				<div class="flex-1 flex flex-col space-y-4 w-full">
					<div class="flex flex-col">
						<small class="text-sm text-green-600">Your name</small>
						<p class="line-clamp-1 leading-relaxed">Lorem ipsum dolor sit amet.</p>
					</div>
					<div class="flex flex-col">
						<small class="text-sm text-green-600">About</small>
						<p class="line-clamp-4 leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, eligendi? Nisi, quod hic eaque quibusdam!</p>
					</div>
					<div class="flex flex-col">
						<small class="text-sm text-green-600">Email</small>
						<p class="line-clamp-1 leading-relaxed">Loremdfmhb@gmail.coms</p>
					</div>
					<div class="opacity-50">
						<small>Last Logged in Time : 8127382Pm</small>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>