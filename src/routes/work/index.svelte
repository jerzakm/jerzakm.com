<script lang="ts">
	export let articles: any[];
	import { onMount } from 'svelte';

	onMount(() => {
		console.log(articles);
	});
</script>

<svelte:head>
	<title>MJ projects</title>
</svelte:head>

<h1>
	There's going to be something much more interesting here soon. Please visit soon to check on the
	progress.
</h1>
