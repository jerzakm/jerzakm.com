<script context="module" lang="ts">
</script>

<script lang="ts">
	import { copyTextToClipboard } from '$lib/util';

	let emailButton;
</script>

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
				><strong>So do I!</strong>
				<!-- Check out my <a href="/work">work</a>,
				<a href="/blog">stuff I wrote</a> or just keep scrolling.</span
			> -->
			</span></info
		>
	</about>
	<contact>
		<contactDetails>
			<h1>Let's connect and build something great together</h1>

			<email class="email" bind:this={emailButton}>
				hey@jerzakm.com
				<button
					class="copy-email-button"
					aria-label="Copy e-mail"
					on:click={() => {
						copyTextToClipboard('hey@jerzakm.com');
						emailButton.animate(
							{
								transformOrigin: '50% 100%',
								transform: [
									'rotate(0deg)',
									'rotate(2deg)',
									'rotate(-4deg)',
									'rotate(4deg)',
									'rotate(-2deg)',
									'rotate(2deg)',
									'rotate(0)'
								],
								easing: ['ease-in', 'ease-out']
							},
							500
						);
					}}
				>
					<svg class="copy-icon" viewBox="0 0 20 20">
						<path
							fill="none"
							d="M18.378,1.062H3.855c-0.309,0-0.559,0.25-0.559,0.559c0,0.309,0.25,0.559,0.559,0.559h13.964v13.964
								c0,0.309,0.25,0.559,0.559,0.559c0.31,0,0.56-0.25,0.56-0.559V1.621C18.938,1.312,18.688,1.062,18.378,1.062z M16.144,3.296H1.621
								c-0.309,0-0.559,0.25-0.559,0.559v14.523c0,0.31,0.25,0.56,0.559,0.56h14.523c0.309,0,0.559-0.25,0.559-0.56V3.855
								C16.702,3.546,16.452,3.296,16.144,3.296z M15.586,17.262c0,0.31-0.25,0.558-0.56,0.558H2.738c-0.309,0-0.559-0.248-0.559-0.558
								V4.972c0-0.309,0.25-0.559,0.559-0.559h12.289c0.31,0,0.56,0.25,0.56,0.559V17.262z"
						/>
					</svg>
				</button>
			</email>
		</contactDetails>
	</contact>
</home>

<style>
	email {
		font-size: calc(1rem + 0.5vmax);
		font-weight: bold;
		border-radius: 1vmax;
		padding: 0.8rem 1rem;
		margin: 1rem;
		display: flex;
		background-color: unset;
		position: relative;
		border: 2px solid black;
		transition: 0.5s;
	}

	email:after {
		position: absolute;
		content: '';
		height: 3px;
		bottom: 0.6rem;

		margin: 0 auto;
		left: 0;
		right: 0;
		width: 80%;
		background: var(--accent-color);
		transition: 0.5s;
	}
	email:hover:after {
		width: 90%;
		height: 6px;
	}

	email:hover {
		background-color: var(--text-color);
		color: var(--primary-color);
	}

	email:hover path {
		fill: var(--primary-color);
	}

	.copy-email-button {
		background: unset;
		border: 0;
		transition: 0.5s;
		position: relative;
		z-index: 11;
		cursor: pointer;
	}

	.copy-email-button:hover:after {
		position: absolute;
		bottom: 0px;
		content: 'Copy email to clipboard';
		background-color: var(--primary-color);
		color: var(--text-color);
		min-width: 100px;
		border: 2px solid var(--text-color);
	}

	.copy-email-button:hover {
		transform: scale(1.2) rotate(15deg);
	}

	.copy-icon {
		width: 2vmax;
		height: 2vmax;
	}

	.copy-icon path {
		fill: var(--text-color);
	}

	aboutDetails {
		font-size: var(--font-sm);
		margin-top: 1.2rem;
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
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 1280px) {
		contact {
			align-self: flex-end;
		}

		home {
			flex-direction: row;
		}
	}
</style>
