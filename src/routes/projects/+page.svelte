<script>
	import Project from '$lib/components/Project.svelte';
	export let data;
	$: ({ projects } = data);
</script>

<h1 class="mb-5 text-2xl">Projects</h1>
<div class="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
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
