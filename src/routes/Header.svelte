<script>
	let isSticky = false;

	function handleScroll() {
		const nav = document.querySelector('nav');
		const navTop = nav.getBoundingClientRect().top;
		if (window.scrollY <= 100) isSticky = false;
		else isSticky = navTop <= 0 && window.scrollY > 20;
	}
</script>

<svelte:window on:scroll={handleScroll} />
<header class="w-full">
	<!-- Top Section -->
	<div
		class="flex h-[150px] flex-col items-center justify-center bg-accent transition-transform duration-300"
		class:translate-y-0={!isSticky}
		class:-translate-y-full={isSticky}
	>
		<img src="/path-to-your-image.jpg" alt="Kwurty" class="h-12 w-12 rounded-full object-cover" />
		<p class="mt-2 text-lg font-bold">Hello</p>
	</div>

	<!-- Navigation Section -->
	<nav
		class="navbar flex w-full bg-primary shadow-md transition-all duration-300"
		class:fixed={isSticky}
		class:relative={!isSticky}
		class:top-0={isSticky}
	>
		<div class="container mx-auto flex items-center justify-between px-4 py-2 text-accent">
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
