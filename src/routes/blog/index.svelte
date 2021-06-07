<script context="module" lang="ts">
	// import { request, gql } from 'graphql-request';

	// const query = gql`
	// 	query getPosts {
	// 		posts {
	// 			title
	// 			slug
	// 			date
	// 			author {
	// 				name
	// 			}
	// 			tags
	// 			coverImage {
	// 				id
	// 			}
	// 			excerpt
	// 		}
	// 	}
	// `;

	// export async function load({ error, status }) {
	// 	const posts = await request(
	// 		'https://api-eu-central-1.graphcms.com/v2/ckp59h45ukdu401uoa0cveiva/master',
	// 		query
	// 	);

	// 	return {
	// 		props: {
	// 			articles: posts.posts
	// 		}
	// 	};
	// }
	// export const prerender = true;
</script>

<script lang="ts">
	// export let articles: any[];
	// import { onMount } from 'svelte';

	// onMount(() => {
	// 	console.log(articles);
	// });
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Weekly blog posts scheduled to start late June 2021. Thank you for your patience 💖</h1>

<!--
<section>
	<h1>Articles</h1>
	{#each articles as article}
		<article>
			<h2>{article.title}</h2>
			<p>{article.excerpt}</p>
			<info>
				<date>{article.date}</date>
				<a class="read-link" href={`blog/${article.slug}`}>Read</a>
			</info>
		</article>
	{/each}
</section>

<style>
	.read-link {
		color: var(--primary-color);
		background-color: var(--text-color);
		padding: 0.3rem 1.4rem;
		border-radius: 0.8rem;
	}
	.read-link::hover {
		color: var(--primary-color);
		background-color: var(--accent-color);
	}
	info {
		display: flex;
		justify-content: space-between;
	}
</style> -->
