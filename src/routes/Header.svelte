<script>
	import { onMount } from 'svelte';
	let scrolled = false;

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class="fixed top-0 z-50 w-full ease-in-out" class:bg-base-100={scrolled}>
	<div
		class="navbar mx-auto flex transform items-center justify-between px-4 py-7 duration-300 ease-in-out sm:px-6"
		class:max-w-3xl={scrolled}
	>
		<div>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<a href="/">
				<img src="" alt="Kwurty" />
			</a>
		</div>
		<nav class="z-50">
			<ul
				class="bg-base-100 menu menu-horizontal z-50 flex gap-x-4 rounded-t-none p-2 px-1 sm:gap-x-6"
			>
				<li>
					<a class="text-link font-semibold" href="/projects">Projects</a>
				</li>
				<li><a class="text-link font-semibold" href="/about">About</a></li>
				<li>
					<a class="text-link font-semibold" href="/experience">Experience</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	:global(.scrolled) .scrolled {
		background-color: rgba(255, 255, 255, 0.9);
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
