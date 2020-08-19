<script lang="ts">
  import PhysDiv from './PhysDiv.svelte'
  import { onMount } from 'svelte'
  import { physicsDomInit } from './stores'
  import { initPhysicsWorld } from './physics'
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

<main class="p-24 h-full w-full flex flex-row">
  <about class="flex-1 flex flex-col">
    <h1 class="leading-none">Hello!</h1>
    <h2 class="leading-tight">My name is Marcin and I code stuff</h2>
    <div class="mt-2 text-xl text-justify">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
      doloremque. Dignissimos temporibus laudantium, ipsa vitae dolore neque
      architecto consequatur iste velit atque vel, saepe nesciunt, enim fuga
      impedit rerum excepturi inventore.
    </div>
    <divider class="divider mt-4 mb-8" />
    <h3 class="font-bold">Check out some of my work:</h3>
    {#each { length: 5 } as entry, i}
      <project class="mt-6">
        <span class="project-number">{`${i < 9 ? '0' : ''}${i + 1}`}</span>
        <description class="">
          <div class="text-justify">
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

  <filler class="flex-1" />
  <contact class="flex-1 flex flex-col max-w-xl items-end justify-between">
    <div class="mr-64 text-xl">
      <div class="get-physical bg-tealime heartbeat absolute">
        <span class="opacity-0">Let's get physical</span>
      </div>
      <button class="absolute font-bold">Let's get physical</button>
    </div>
    <div class="max-w-md">
      <h3 class="font-bold">
        Let's connect and build something great together
      </h3>
      <ul class="text-lg mt-4">
        <li>
          email me at
          <a href="#">mail@gmail.com</a>
        </li>
        <li>
          leave a message
          <a href="#">here</a>
          or
        </li>
        <li>check out my dev socials</li>
      </ul>
    </div>
  </contact>
</main>
