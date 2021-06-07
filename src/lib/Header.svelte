<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">
		<a sveltekit:prefetch href="/" class="home-link">MJ</a>
	</div>

	<nav>
		<ul>
			<li class:active={$page.path === '/work'}><a sveltekit:prefetch href="/work">Work</a></li>
			<li class:active={$page.path === '/blog'}>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
			<li class:active={$page.path === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

<style>
	header {
		position: fixed;
		border: solid black;
		bottom: 0;
		width: 100%;
		border-width: 2px 0 0 0;
		background-color: var(--primary-color);
		left: 0;
		display: flex;
		justify-content: space-between;
		overflow: hidden;
		z-index: 9999;
	}
	@media (min-width: 1024px) {
		header {
			border-width: 0 0 2px 0;
			bottom: auto;
			top: 0;
			position: static;
		}
	}

	.corner {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		font-weight: 700;
		font-size: 1.5rem;
	}
	.home-link {
		color: var(--text-color);
	}

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1rem;
		color: var(--heading-color);
		font-weight: 700;
		font-size: var(--font-sm);
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
	@media (min-width: 1024px) {
		a {
			font-size: 1vw;
		}
		nav a {
			font-size: 1vw;
		}
	}
</style>
