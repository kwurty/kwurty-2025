<script>
	import '../app.css';
	import Header from './Header.svelte';
	let { children } = $props();
</script>

<Header />
<main class="flex w-full justify-center pt-20">
	<div class="max-w-7xl">
		{@render children()}
	</div>
</main>
