<script lang="ts">
  import PhysDiv from './PhysDiv.svelte'
  import { physicsActive } from './stores'

  let windowWidth = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
  })

  let physicsLoaded = false
  let physActive = false
  let activatePhysics
  let deactivatePhysics

  physicsActive.subscribe((value) => {
    physActive = value
  })

  $: if (physicsLoaded === true) {
    import('./physics').then((physModule) => {
      activatePhysics = physModule.getPhysical
      deactivatePhysics = physModule.stopPhysics
    })
  }

  function startPhysics() {
    if (activatePhysics) {
      activatePhysics()
    } else {
      setTimeout(startPhysics, 50)
    }
  }

  function stopPhysics() {
    if (deactivatePhysics) {
      deactivatePhysics()
    } else {
      setTimeout(deactivatePhysics, 50)
    }
  }
</script>

<style>
  .project-number {
    position: absolute;
    transform: translateX(-25px);
    color: grey;
  }

  .social-link::before {
    content: '';
  }
  .social-link::after {
    content: '';
  }
</style>

<main class="flex flex-col sm:flex-row p-10 xl:p-20 h-full w-full">
  <about class="flex-1 flex flex-col">

    <h1 class="leading-none 2xl:text-5xl">
      <PhysDiv>Hello!</PhysDiv>
    </h1>
    <h2 class="leading-tight 2xl:text-4xl">
      <PhysDiv>My name is Marcin and I code stuff</PhysDiv>
    </h2>
    <PhysDiv classes="mt-2 text-xl 2xl:text-3xl text-justify">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      doloremque. Dignissimos temporibus laudantium, ipsa vitae dolore neque
      architecto consequatur iste velit atque vel, saepe nesciunt, enim fuga
      impedit rerum excepturi inventore.
    </PhysDiv>
    <PhysDiv classes="divider mt-4 mb-8" />
    <h3 class="font-bold 2xl:text-4xl">
      <PhysDiv>Check out some of my work:</PhysDiv>
    </h3>
    {#each { length: 5 } as entry, i}
      <PhysDiv classes="mt-6">
        <span class="project-number">{`${i < 9 ? '0' : ''}${i + 1}`}</span>
        <description class="">
          <div class="text-justify 2xl:text-2xl">
            <span class="font-bold">Marketflow</span>
            is an app for monitoring costs, profitability and other KPIs on
            allegro.pl marketplace.
            <links class="float-right">
              <a href="#">more</a>
              <a href="#">live</a>
              <a href="#">code</a>
            </links>
          </div>
        </description>
      </PhysDiv>
    {/each}
  </about>
  <filler class="xl:flex-1 p-4 xl:p-0" />
  <contact
    class="flex-1 flex flex-col max-w-xl items-end justify-between mt-16 lg:mt-0
    mb-16 lg:mb-0">
    <div class="mr-64 text-xl">
      {#if windowWidth > 1360}
        <div
          class={`get-physical ${physActive ? 'bg-red-400' : 'bg-tealime'} heartbeat absolute`}>

          <span class="opacity-0 2xl:text-3xl">
            {physActive ? `I don't like physics` : `Let's get physical`}
          </span>

        </div>
        <button
          class="absolute font-bold 2xl:text-3xl"
          on:click={() => {
            physicsLoaded = true
            if (physActive) {
              physicsActive.set(false)
              stopPhysics()
            } else {
              physicsActive.set(true)
              startPhysics()
            }
          }}>
          {physActive ? `I don't like physics` : `Let's get physical`}
        </button>
      {/if}
    </div>
    <div class="max-w-md">
      <PhysDiv>

        <h3 class="font-bold 2xl:text-4xl">
          Let's connect and build something great together
        </h3>
      </PhysDiv>
      <ul class="text-lg mt-4 2xl:text-3xl">
        <li>
          <PhysDiv>
            email me at
            <a href="#">mail@gmail.com</a>
          </PhysDiv>
        </li>
        <li>
          <PhysDiv>
            leave a message
            <a href="#">here</a>
            or
          </PhysDiv>
        </li>
        <!-- <li>check out my dev socials</li> -->

        <li class="flex">

          <PhysDiv>
            <a
              href="https://github.com/jerzakm"
              alt="Github profile link"
              class="social-link">
              <img
                src="icons/github.svg"
                alt="Github profile"
                class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
            </a>

          </PhysDiv>
          <!-- <PhysDiv>
            <img
              src="icons/linkedin.svg"
              alt="LinkedIn profile"
              class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          </PhysDiv>
          <PhysDiv>
            <img
              src="icons/dev-dot-to.svg"
              alt="dev.to profile"
              class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          </PhysDiv>
          <PhysDiv>
            <img
              src="icons/twitter.svg"
              alt="Twitter profile"
              class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          </PhysDiv> -->
        </li>
      </ul>
    </div>
  </contact>
</main>
