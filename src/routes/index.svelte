<script context="module" lang="ts">
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<home>
	<about>
		<name>Marcin Jerzak</name>
		<professionTitle>software developer</professionTitle>
		<info>
			<socials>Lorem, ipsum dolor.</socials>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, repudiandae.</p>
		</info>
	</about>
	<todo
		><h1>Let's connect and build something great together</h1>
		<p>email me at thisemail@email.com or use LiveChat i built for this website</p></todo
	>
</home>

<style>
	home {
		display: flex;
		flex-direction: column;
	}
	name {
		font-size: 3rem;
		font-family: var(--font-header);
		color: var(--accent-color);
		text-align: center;
	}
	professionTitle {
		font-size: 4rem;
		font-family: var(--font-header);
		line-height: 0.9;
		text-align: center;
	}
	about {
		padding-top: 15vh;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	info {
		display: flex;
		flex-direction: column-reverse;
		margin-top: 2rem;
	}
	socials {
		flex: 1;
	}
	p {
		flex: 1;
	}
	todo {
		flex: 1;
	}

	@media (min-width: 1024px) {
		info {
			flex-direction: row;
		}
		home {
			flex-direction: row;
		}
		professionTitle {
			font-size: 10rem;
		}
	}
</style>
