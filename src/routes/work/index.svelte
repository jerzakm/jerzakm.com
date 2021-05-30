<script context="module" lang="ts">
	const notionToken = 'secret_DN6HnUpIm4yMYE2FmwyPK69uIrMACUThmFQumt4OtdE';

	const response = fetch(
		'https://api.notion.com/v1/pages/jerzakm-com-content-9909fe2ed9584bd79310313dcd81c17f',
		{
			headers: {
				'Notion-Version': '2021-05-13',
				Authorization: `Bearer ${notionToken}`
			}
		}
	);

	export async function load({ error, status }) {
		const d = 'k';

		return {
			props: {
				articles: d
			}
		};
	}
</script>

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
