<script>
	let isSticky = false;
	let resize = false;

	function handleScroll() {
		const nav = document.querySelector('nav');
		const navTop = nav.getBoundingClientRect().top;
		if (window.scrollY <= 100) isSticky = false;
		else isSticky = navTop <= 0 && window.scrollY > 20;

		if (window.scrollY >= 90) resize = true;
		else resize = false;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<header class="w-full">
	<!-- Top Section -->
	<div
		class="flex h-[500px] flex-col items-center justify-center bg-accent transition-transform duration-300"
		class:translate-y-0={!isSticky}
		class:-translate-y-full={isSticky}
		class:mb-20={isSticky}
	>
		<img src="" alt="Kwurty" class="h-12 w-12 rounded-full object-cover" />
		<p class="mt-2 text-4xl font-bold">Hi, I'm Kurtis</p>
		<p class="mt-2 text-xl">Dedicated Developer - Solution Oriented - Improvement Focused</p>
	</div>

	<!-- Navigation Section -->
	<nav
		class="navbar flex w-full bg-primary shadow-md transition-all duration-300 ease-in"
		class:fixed={isSticky}
		class:relative={!isSticky}
		class:top-0={isSticky}
	>
		<div
			class="container mx-auto flex items-center justify-between px-4 py-2 text-accent transition-all duration-300 ease-in"
			class:navwidth={resize}
		>
			<div>Logo</div>
			<div>
				<ul class="flex space-x-4">
					<a href="/projects" class="hover:text-secondary"> <li>Projects</li> </a>
					<a href="/about" class="hover:text-secondary"> <li>About</li> </a>
					<a href="/experience" class="hover:text-secondary"> <li>Contact</li> </a>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.navwidth {
		width: 50%;
	}
</style>
