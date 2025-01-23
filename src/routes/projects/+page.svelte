<script>
	import Project from '$lib/components/Project.svelte';
	export let data;
	$: ({ projects } = data);
</script>

<h1>Projects</h1>
<div>
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
