<script lang="ts">
	import { page } from '$app/stores';
</script>

<header>
	<div class="corner">MJ</div>

	<nav>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/articles'}>
				<a sveltekit:prefetch href="/articles">Articles</a>
			</li>
			<li class:active={$page.path === '/work'}><a sveltekit:prefetch href="/work">Work</a></li>
			<li class:active={$page.path === '/contact'}>
				<a sveltekit:prefetch href="/contact">Contact</a>
			</li>
		</ul>
	</nav>

	<div class="corner" />
</header>

<style>
	@media (max-width: 1024px) {
		header {
			position: fixed;
			bottom: 0;
		}
		li.active {
			background-color: var(--secondary-color);
		}
	}
	header {
		background-color: var(--primary-color);
		left: 0;
		display: flex;
		justify-content: space-between;
		width: 100vw;
		overflow: hidden;
	}

	.corner {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--text-color);
		font-weight: 700;
		font-size: 1.5rem;
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
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
