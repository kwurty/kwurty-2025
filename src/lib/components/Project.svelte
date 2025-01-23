<script>
	export let imageUrl = 'https://placehold.co/400';
	export let title = 'Project Title';
	export let description = 'This is a brief description of the project.';
	export let descriptors = [];
</script>

<div
	class="mx-auto flex max-w-xl flex-col items-center rounded-lg border p-4 shadow-lg lg:flex-row lg:items-start"
>
	<!-- Image Section -->
	<img
		src={imageUrl}
		alt={title}
		class="mb-4 h-48 w-full rounded-lg object-cover lg:mb-0 lg:mr-4 lg:h-auto lg:w-1/3"
	/>

	<!-- Content Section -->
	<div class="flex flex-1 flex-col justify-between">
		<!-- Title -->
		<h2 class="mb-2 text-center text-xl font-semibold lg:text-left">{title}</h2>

		<!-- Description -->
		<p
			class="mb-4 text-center text-sm text-gray-700 lg:mb-2 lg:text-left lg:text-base"
			class:truncate={window.innerWidth < 640}
		>
			{description}
		</p>

		<!-- Descriptors -->
		<div class="hidden flex-wrap gap-2 lg:flex">
			{#each descriptors as descriptor}
				<span
					class="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800"
				>
					{descriptor}
				</span>
			{/each}
		</div>

		<!-- Icons for medium and small screens -->
		<div class="flex justify-center gap-4 lg:hidden">
			{#each descriptors as descriptor, i}
				{#if i < 4}
					<!-- Show max 4 icons on small screens -->
					<span
						class="inline-block flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white"
					>
						{descriptor[0].toUpperCase()}
					</span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	/* Ensure truncation only happens for small screens */
	@media (max-width: 640px) {
		.truncate {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
</style>
