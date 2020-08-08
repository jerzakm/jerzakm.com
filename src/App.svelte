<script lang="ts">

</script>

<style>
  .h-name {
    font-size: 5vw;
  }
  .h-name-subtitle {
    font-size: 3.69vw;
    margin-top: -2vw;
  }

  .social-container {
    filter: invert(100%);
  }

  .social-icon {
    width: 3vw;
  }

  .contact-text {
    font-size: 3vw;
  }

  .contact-underline {
    width: 100%;
    height: 0.3vw;
    margin-top: -1.1vw;
    transform: rotateZ(-0.5deg);
  }

  .project-source-icon {
    height: 1.4vw;
    filter: invert(100%);
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
      <socials class="flex justify-around social-container mt-8">
        <img src="icons/github.svg" alt="GitHub icon" class="social-icon" />
        <img src="icons/linkedin.svg" alt="LinkedIn icon" class="social-icon" />
        <img src="icons/twitter.svg" alt="Twitter icon" class="social-icon" />

      </socials>
    </header>

    <about class="text-3xl mt-20 text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse
      obcaecati, facilis sit autem vitae optio dolores a mollitia incidunt amet
      veniam, unde quos sapiente rem earum aperiam fugit dolor.
    </about>

    <contact class="mt-10 flex justify-center">
      <div>
        <span class="contact-text">Connect & talk to me.</span>
        <div class="contact-underline bg-tealime" />
      </div>
    </contact>
  </div>

  <filler class="flex-1" />

  <projects class="flex-1 flex flex-col justify-center ">
    <project class="flex flex-col">
      <span class="text-tealime text-3xl">Project name</span>
      <span class="text-xl text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempora natus nulla cupiditate quibusdam aliquam impedit reprehenderit,
        magnam dolore vero.
      </span>
      <div class="w-full flex justify-end mt-2">
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

      </div>
    </project>
    <project class="flex flex-col">
      <span class="text-tealime text-3xl">Project name</span>
      <span class="text-xl text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempora natus nulla cupiditate quibusdam aliquam impedit reprehenderit,
        magnam dolore vero.
      </span>
      <div class="w-full flex justify-end mt-2">
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

      </div>
    </project>

    <project class="flex flex-col">
      <span class="text-tealime text-3xl">Project name</span>
      <span class="text-xl text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempora natus nulla cupiditate quibusdam aliquam impedit reprehenderit,
        magnam dolore vero.
      </span>
      <div class="w-full flex justify-end mt-2">
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

      </div>
    </project>

    <project class="flex flex-col">
      <span class="text-tealime text-3xl">Project name</span>
      <span class="text-xl text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
        tempora natus nulla cupiditate quibusdam aliquam impedit reprehenderit,
        magnam dolore vero.
      </span>
      <div class="w-full flex justify-end mt-2">
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

      </div>
    </project>

  </projects>

  <logo class="text-2xl mt-4 ml-4 opacity-0">
    <h1>jerzakm.com</h1>
  </logo>
</main>
