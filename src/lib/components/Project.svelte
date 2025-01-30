<script>
	export let imageUrl = 'https://placehold.co/400';
	export let title = 'Project Title';
	export let description = 'This is a brief description of the project.';
	export let descriptors = [];
</script>

<div class="card h-full rounded-lg bg-accent shadow-xl transition-all duration-100 hover:scale-105">
	<figure class="min-h-34">
		<img
			src={imageUrl}
			alt={title}
			class="mb-4 h-48 w-full rounded-lg object-cover lg:mb-0 lg:mr-4 lg:h-auto lg:w-1/3"
		/>
	</figure>

	<div class="card-body">
		<h2 class="card-title">{title}</h2>

		<p class="ext-center mb-4 text-sm lg:mb-2 lg:text-left lg:text-base">
			{description}
		</p>

		<!-- Descriptors -->
		<div class="card-actions">
			{#each descriptors as descriptor}
				<span
					class="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-content"
				>
					{descriptor}
				</span>
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
