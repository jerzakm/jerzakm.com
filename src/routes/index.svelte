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
		<aboutDetails> He/Him. EU/Remote 🌍 </aboutDetails>
		<info>
			<p>
				Do you like visual experiments🎆interactive web💻 data driven apps📓 and exploring new
				technologies🤯?
			</p>
			<span
				><strong>So do I!</strong> Check out my <a href="/work">work</a>,
				<a href="/blog">stuff I wrote</a> or just keep scrolling.</span
			>
		</info>
	</about>
	<contact>
		<!-- <img src="homePlaceholder.png" alt="abstract geometric art" class="home-img-placeholder" /> -->
		<contactDetails>
			<h1>Let's connect and build something great together</h1>
			<p>email me at thisemail@email.com or use LiveChat i built for this website</p>
		</contactDetails>
	</contact>
</home>

<style>
	aboutDetails {
		font-size: 0.9vmax;
		margin-top: 1.2rem;
		/* color: var(--accent-color); */
		max-width: 70%;
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
		align-self: center;
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	info {
		max-width: 70%;
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

	@media (min-width: 1280px) {
		contact {
			align-self: flex-end;
		}

		home {
			flex-direction: row;
		}
		info {
			font-size: 1.3vmax;
		}
		name {
			font-size: 3vmax;
		}
		professionTitle {
			font-size: 8vmax;
		}
	}
</style>
