<script lang="ts">
  import PhysDiv from './PhysDiv.svelte'
  import { onMount } from 'svelte'
  import { physicsDomInit } from './stores'
  import { initPhysicsWorld } from './physics'

  function startPhysics() {
    physicsDomInit.set(true)
    document.body.innerHTML = ''
    physicsDomInit.set(false)
    initPhysicsWorld()
  }
  // ff3e99 svelte
  onMount(() => {
    // setTimeout(startPhysics, 200)
    // see if DOM is already available
    // if (
    //   document.readyState === 'complete' ||
    //   document.readyState === 'interactive'
    // ) {
    //   setTimeout(startPhysics, 20)
    // } else {
    //   document.addEventListener('DOMContentLoaded', startPhysics)
    // }
  })
</script>

<style>
  .h-name {
    font-size: 5vw;
  }
  .h-name-subtitle {
    font-size: 3.69vw;
    margin-top: -2vw;
  }

  .social-icon {
    width: 3vw;
    filter: invert(100%);
  }

  .contact-text {
    font-size: 3vw;
    font-family: 'Playfair Display', serif;
    /* font-weight: 700; */
  }

  .contact-underline {
    width: 100%;
    height: 0.4vw;
    margin-top: -0.2vw;
    /* transform: rotateZ(-0.5deg); */
    z-index: -1;
  }

  .projects-header {
    font-size: 2.2vw;
    font-family: 'Playfair Display', serif;
  }

  .project-source-icon {
    height: 1.4vw;
    filter: invert(100%);
  }

  .project-name {
    font-size: 1.2vw;
  }
  .project-desc {
    font-size: 0.8vw;
  }
</style>

<main class="h-full flex flex-col justify-evenly">
  <container class="flex items-stretch flex-1">
    <logo class="mt-4 ml-4">
      <PhysDiv>
        <h1 on:click={() => {}}>jerzakm.com</h1>
      </PhysDiv>
    </logo>

    <div class="flex-1 flex flex-col justify-center">
      <header>
        <PhysDiv id={'name-header'}>
          <h1 class="h-name whitespace-no-wrap">Marcin Jerzak</h1>
          <h2 class="h-name-subtitle whitespace-no-wrap text-tealime">
            software developer
          </h2>
        </PhysDiv>

        <socials class="flex justify-around mt-8">
          <PhysDiv id={'github-social'} isStatic={false}>
            <img src="icons/github.svg" alt="GitHub icon" class="social-icon" />
          </PhysDiv>

          <PhysDiv id={'linkedin-social'} isStatic={false}>
            <img
              src="icons/linkedin.svg"
              alt="LinkedIn icon"
              class="social-icon" />
          </PhysDiv>
          <PhysDiv id="twitter-social" isStatic={false}>
            <img
              src="icons/twitter.svg"
              alt="Twitter icon"
              class="social-icon" />
          </PhysDiv>
        </socials>

      </header>

      <about class="mt-20">
        <PhysDiv classes={'text-3xl text-justify'} isStatic={false}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          esse obcaecati, facilis sit autem vitae optio dolores a mollitia
          incidunt amet veniam, unde quos sapiente rem earum aperiam fugit
          dolor.
        </PhysDiv>
      </about>

      <!-- <contact class="mt-10 flex justify-center">
      <PhysDiv>
        <span class="contact-text">
          Let's connect and work on something cool together.
        </span>
        <div class="contact-underline bg-tealime" />
      </PhysDiv>
    </contact> -->
    </div>

    <filler class="flex-1" />
    <projects class="flex flex-col justify-center">
      <div class="grid grid-cols-1 col-gap-10">
        <span class="projects-header">Stuff I've made:</span>
        {#each { length: 6 } as j, i}
          <PhysDiv>
            <project class="flex flex-col mb-4">
              <span class="text-tealime project-name">Project name</span>
              <span class="text-justify project-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </span>
              <!-- <div class="w-full flex justify-end mt-2">
                <span class="text-xl flex mr-6">
                  <img
                    src="icons/github.svg"
                    alt="GitHub icon"
                    class="project-source-icon mr-2" />
                  Source
                </span>
                <span class="text-xl flex">
                  <img
                    src="icons/netlify.svg"
                    alt="Netlify icon"
                    class="project-source-icon mr-2" />
                  Online
                </span>

              </div> -->
            </project>
          </PhysDiv>
        {/each}
      </div>
    </projects>

    <logo class="text-2xl mt-4 ml-4 opacity-0">
      <h1>jerzakm.com</h1>
    </logo>
  </container>
  <contact class="mt-10 flex justify-center mb-8">
    <PhysDiv>
      <span class="contact-text z-10 relative">
        Let's connect and work on something cool together.
      </span>
      <div class="contact-underline bg-tealime z-0" />
    </PhysDiv>
  </contact>
</main>
