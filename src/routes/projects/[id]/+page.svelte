<script>
	let { data } = $props();
</script>

<article class="mx-auto max-w-3xl p-4">
	<h1 class="mb-2 text-3xl font-bold">{data.project.title}</h1>
	<img src={data.project.image} alt={data.project.title} class="mb-4 h-auto w-full" />
	<p class="mb-4 text-gray-700">{data.project.details}</p>
</article>
