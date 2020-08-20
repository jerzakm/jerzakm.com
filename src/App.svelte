<script lang="ts">
  import PhysDiv from './PhysDiv.svelte'
  import { onMount } from 'svelte'
  import { physicsDomInit } from './stores'
  import { initPhysicsWorld } from './physics'

  let windowWidth = window.innerWidth
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth
  })
</script>

<style>
  .divider {
    height: 1px;
    background-color: #121212;
  }
  .project-number {
    position: absolute;
    transform: translateX(-25px);
    color: grey;
  }
</style>

<main class="flex flex-col sm:flex-row p-10 lg:p-24 h-full w-full ">
  <about class="flex-1 flex flex-col">
    <h1 class="leading-none 2xl:text-5xl">Hello!</h1>
    <h2 class="leading-tight 2xl:text-4xl">
      My name is Marcin and I code stuff
    </h2>
    <div class="mt-2 text-xl 2xl:text-3xl text-justify">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      doloremque. Dignissimos temporibus laudantium, ipsa vitae dolore neque
      architecto consequatur iste velit atque vel, saepe nesciunt, enim fuga
      impedit rerum excepturi inventore.
    </div>
    <divider class="divider mt-4 mb-8" />
    <h3 class="font-bold 2xl:text-4xl">Check out some of my work:</h3>
    {#each { length: 5 } as entry, i}
      <project class="mt-6">
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
      </project>
    {/each}
  </about>
  <filler class="xl:flex-1 p-4 xl:p-0" />
  <contact
    class="flex-1 flex flex-col max-w-xl items-end justify-between mt-16 lg:mt-0
    mb-16 lg:mb-0">
    <div class="mr-64 text-xl">
      {#if windowWidth > 1360}
        <div class="get-physical bg-tealime heartbeat absolute">

          <span class="opacity-0 2xl:text-3xl">Let's get physical</span>

        </div>
        <button class="absolute font-bold 2xl:text-3xl">
          Let's get physical
        </button>
      {/if}
    </div>
    <div class="max-w-md">
      <h3 class="font-bold 2xl:text-4xl">
        Let's connect and build something great together
      </h3>
      <ul class="text-lg mt-4 2xl:text-3xl">
        <li>
          email me at
          <a href="#">mail@gmail.com</a>
        </li>
        <li>
          leave a message
          <a href="#">here</a>
          or
        </li>
        <!-- <li>check out my dev socials</li> -->
        <li class="flex">
          <img
            src="icons/github.svg"
            alt="Github profile"
            class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          <img
            src="icons/linkedin.svg"
            alt="LinkedIn profile"
            class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          <img
            src="icons/dev-dot-to.svg"
            alt="dev.to profile"
            class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
          <img
            src="icons/twitter.svg"
            alt="Twitter profile"
            class="w-6 2xl:w-12 mr-4 2xl:mr-8" />
        </li>
      </ul>
    </div>
  </contact>
</main>
