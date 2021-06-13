<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Marcin Jerzak - full stack software developer portfolio. Landing pages, webapps, games, visualizations, business insights and more."
	/>
	<title>MJ - software developer</title>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 80vh;
	}
</style>
