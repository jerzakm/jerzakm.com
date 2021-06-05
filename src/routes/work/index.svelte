<script lang="ts">
	export let articles: any[];
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(articles);
	});
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section />

<style>
</style>
