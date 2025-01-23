<script>
	let isSticky = false;

	function handleScroll() {
		const nav = document.querySelector('nav');
		const navTop = nav.getBoundingClientRect().top;
		isSticky = navTop <= 0;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<header class="bg-gradient-radial top-0 z-50 from-sky-300 to-blue-400">
	<!-- Top Section -->
	<div class="h-20 bg-opacity-90 py-2 text-center">
		<p class="text-lg font-semibold text-white">Example Text</p>
	</div>

	<!-- Navigation Section -->
	<nav
		class="flex-no-wrap fixed relative top-0 flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 lg:flex-wrap lg:justify-start lg:py-4 dark:bg-neutral-600 dark:shadow-black/10"
		class:fixed={isSticky}
		class:top-0={isSticky}
	>
		<!-- Logo -->
		<div class="flex items-center space-x-2">
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-white">
				<span class="font-bold text-blue-500">Logo</span>
			</div>
		</div>

		<!-- Links -->
		<div class="flex space-x-8 font-medium text-white">
			<a href="/projects" class="transition hover:text-sky-100">Projects</a>
			<a href="/about" class="transition hover:text-sky-100">About</a>
			<a href="/experience" class="transition hover:text-sky-100">Experience</a>
		</div>
	</nav>
</header>

<style>
	/* Extending the gradient background lower than the header */
</style>
