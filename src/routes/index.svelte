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
		<professionTitle><span>software</span> <span>developer</span></professionTitle>
		<info> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, repudiandae. </info>
	</about>
	<contact>
		<img src="homePlaceholder.png" alt="abstract geometric art" class="home-img-placeholder" />
		<contactDetails>
			<h1>Let's connect and build something great together</h1>
			<p>email me at thisemail@email.com or use LiveChat i built for this website</p>
		</contactDetails>
	</contact>
</home>

<style>
	.home-img-placeholder {
		max-height: 50vh;
		margin-top: 3rem;
	}

	home {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	name {
		font-size: var(--font-xxl);
		font-family: var(--font-header);
		color: var(--accent-color);
		text-align: center;
	}
	professionTitle {
		font-size: var(--font-xxxl);
		font-family: var(--font-header);
		line-height: 0.9;
		text-align: center;
		display: flex;
		flex-direction: column;
	}
	about {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	info {
		display: flex;
		flex-direction: column-reverse;
		max-width: 70%;
		margin-top: 2rem;
		font-size: var(--font-l);
		text-align: justify;
	}
	p {
		flex: 1;
	}
	contact {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	contactDetails {
		max-width: 60%;
		text-align: center;
	}

	@media (min-width: 1024px) {
		info {
			flex-direction: row;
		}
		home {
			flex-direction: row;
		}
		info {
			font-size: 1.3vw;
		}
		name {
			font-size: 3vw;
		}
		professionTitle {
			font-size: 8vw;
		}
	}
</style>
