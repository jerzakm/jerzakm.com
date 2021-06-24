<script lang="ts">
	import { onMount } from 'svelte';
	let previewImage;
	let card;

	onMount(() => {
		const cardRect = card.getBoundingClientRect();
		let imageRect = previewImage.getBoundingClientRect();
		const imageCenter = {
			x: imageRect.left + imageRect.width / 2,
			y: imageRect.top + imageRect.height / 2
		};
		console.log(imageRect);
		previewImage.addEventListener('mousemove', (e) => {
			imageRect = previewImage.getBoundingClientRect();
			const ax = (imageCenter.x - e.pageX) * 0.05;
			const ay = (imageCenter.y - e.pageY) * 0.05;
			const az = 0;
			console.log(e);

			const scaleMod = Math.abs((imageCenter.x - e.layerX + imageCenter.y - e.layerY) * 0.0001);
			console.log(scaleMod);

			if (previewImage) {
				previewImage.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg) rotateZ(${az}deg) scale(${
					1.2 + scaleMod
				})`;
			}
		});
	});
</script>

<content>
	<card bind:this={card}>
		<div class="bg-wrapper">
			<img src="bg.jpg" alt="background" class="card-bg" />
		</div>
		<cardContent>
			<info>
				<img src="rLogo.png" alt="project logo" class="project-logo" />
				<div>
					<h1>Banksy.app</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque facilis aperiam, iure
						cum quaerat excepturi quas sit? Id, cumque harum.
					</p>
					<tags>
						<tag>#banking</tag>
						<tag>#firebase</tag>
						<tag>#svelte</tag>
					</tags>
				</div>
			</info>
			<preview>
				<img
					src="dashboardPreview.jpg"
					alt="app preview"
					class="preview-img"
					bind:this={previewImage}
				/>
			</preview>
		</cardContent>
	</card>
</content>

<style>
	card {
		width: 65rem;
		height: 30rem;
		display: inline-block;
		position: relative;

		border-radius: 1.5rem;
		box-shadow: 0 3.9px 4.6px rgba(0, 0, 0, 0.08), 0 12.3px 8.4px rgba(0, 0, 0, 0.056),
			0 18.8px 19.2px rgba(0, 0, 0, 0.037), 0 22px 40px rgba(0, 0, 0, 0.019);
	}

	.bg-wrapper {
		height: 100%;
		width: 100%;
		overflow: hidden;
		position: absolute;
		border-radius: 1.5rem;
	}

	cardContent {
		display: flex;
		height: 100%;
	}

	info {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 3rem;
		justify-content: space-between;
	}

	.project-logo {
		max-height: 3rem;
	}
	preview {
		flex: 1;
		padding: 2rem;
		display: flex;
		align-items: center;
	}

	.preview-img {
		max-height: 80%;
		max-width: 50%;
		position: absolute;
		transform: rotateY(0deg) rotateX(0deg) scale(1.2);
		transform-origin: 50% 50%;
	}

	.preview-img:hover {
		box-shadow: 0 3.9px 4.6px rgba(0, 0, 0, 0.08), 0 12.3px 8.4px rgba(0, 0, 0, 0.056),
			0 18.8px 19.2px rgba(0, 0, 0, 0.037), 0 22px 40px rgba(0, 0, 0, 0.019);
	}

	.card-bg {
		display: block;
		position: absolute;
		min-height: 100%;
		min-width: 100%;
		z-index: -1;
	}

	content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	tags {
		display: flex;
	}

	tag {
		font-size: calc(0.8rem + 0.2vmax);
		font-weight: bold;
		border-radius: 1vmax;
		padding: 0.3rem 0.5rem;
		margin-right: 0.3rem;
		display: flex;
		position: relative;
		border: 2px solid black;
		transition: 0.5s;
		background-color: var(--text-color);
		color: var(--primary-color);
	}

	tag:hover {
		background: unset;
		color: var(--text-color);
	}
</style>
