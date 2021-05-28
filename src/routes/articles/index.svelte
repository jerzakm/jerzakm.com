<script context="module" lang="ts">
	import { request, gql } from 'graphql-request';

	const query = gql`
		query getPosts {
			posts {
				title
				slug
				date
				author {
					name
				}
				tags
				coverImage {
					id
				}
				excerpt
			}
		}
	`;

	export async function load({ error, status }) {
		const posts = await request(
			'https://api-eu-central-1.graphcms.com/v2/ckp59h45ukdu401uoa0cveiva/master',
			query
		);

		return {
			props: {
				articles: posts.posts
			}
		};
	}
	// export const prerender = true;
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

<section>
	{#each articles as article}
		<article>
			<h1>{article.title}</h1>
			<p>{article.excerpt}</p>
			<a href={`articles/${article.slug}`}>Read</a>
		</article>
	{/each}
</section>

<style>
</style>
