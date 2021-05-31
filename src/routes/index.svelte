<script context="module" lang="ts">
</script>

<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<home>
	<about>
		<name>Lorem ipsum</name>
		<professionTitle>Lorem ipsum</professionTitle>
		<info> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, repudiandae. </info>
	</about>
	<contact>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tenetur incidunt ullam
			repellendus odit alias provident adipisci repellat enim dignissimos, vitae veritatis, ducimus
			facere! Provident accusamus fugit nobis, pariatur blanditiis ullam velit asperiores ipsa
			possimus consequatur natus delectus aliquid ratione consectetur officiis eligendi ad iste.
			Iure quos eius quae suscipit voluptas alias ipsam rem nam, dignissimos qui consequatur,
			veritatis in.
		</p>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, totam ab doloribus
			exercitationem voluptatum quos eum. Repellat error assumenda animi.
		</p>
		<h1>Let's connect and build something great together</h1>
		<p>email me at thisemail@email.com or use LiveChat i built for this website</p></contact
	>
</home>

<style>
	home {
		display: flex;
		flex-direction: column;
		flex: 1;
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
		flex: 1;
		display: flex;
		flex-direction: column;
		/* align-self: flex-end; */
		align-self: center;
	}

	info {
		display: flex;
		flex-direction: column-reverse;
		margin-top: 2rem;
		text-align: center;
	}
	p {
		flex: 1;
	}
	contact {
		align-self: center;
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
