<script lang="ts">
  // import {
  //   DevDotTo,
  //   Github,
  //   Linkedin,
  //   ItchDotIo,
  //   Twitter,
  // } from '@icons-pack/svelte-simple-icons'
</script>

<style>
  .h-name {
    font-size: 5vw;
  }
  .h-name-subtitle {
    font-size: 3.69vw;
    margin-top: -2vw;
  }
</style>

<main class="flex h-full">
  <logo class="text-2xl mt-4 ml-4">
    <h1>jerzakm.com</h1>
  </logo>

  <div class="flex-1 flex flex-col justify-center">
    <header>
      <h1 class="h-name whitespace-no-wrap">Marcin Jerzak</h1>
      <h2 class="h-name-subtitle whitespace-no-wrap text-tealime">
        software developer
      </h2>
      <socials class="flex justify-around">
        <!-- <Github size={60} />
        <Linkedin size={60} />
        <DevDotTo size={60} />
        <ItchDotIo size={60} />
        <Twitter size={60} /> -->
      </socials>
    </header>

    <contact class="mt-10">
      <h1>Connect & talk to me.</h1>
    </contact>

    <about>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse
        obcaecati, facilis sit autem vitae optio dolores a mollitia incidunt
        amet veniam, unde quos sapiente rem earum aperiam fugit dolor.
      </span>
    </about>
  </div>

  <filler class="flex-1" />

  <projects class="flex-1 flex flex-col justify-center">
    <project>
      <h2>Project name</h2>
      <span>Project desc</span>
      <span>Source</span>
    </project>
    <project>
      <h2>Project name</h2>
      <span>Project desc</span>
      <span>Source</span>
    </project>
    <project>
      <h2>Project name</h2>
      <span>Project desc</span>
      <span>Source</span>
    </project>
    <project>
      <h2>Project name</h2>
      <span>Project desc</span>
      <span>Source</span>
    </project>
    <project>
      <h2>Project name</h2>
      <span>Project desc</span>
      <span>Source</span>
    </project>
  </projects>

</main>
