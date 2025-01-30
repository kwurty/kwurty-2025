<script>
	import About from '$lib/components/About.svelte';
	import Project from '$lib/components/Project.svelte';
	import { projects } from '$lib/projects';
</script>

<div class="mx-10 space-y-8 px-10 lg:max-w-screen-lg">
	<About />

	<div class="rounded-2xl border-t-4 border-t-secondary bg-base-300 p-10 shadow-lg">
		<h1 class="pb-5 text-2xl">Projects</h1>
		<div class="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<a href={`/projects/${project.id}`}>
					<Project
						title={project.title}
						description={project.description}
						descriptors={project.descriptors}
					/>
				</a>
			{/each}
		</div>
	</div>
</div>
