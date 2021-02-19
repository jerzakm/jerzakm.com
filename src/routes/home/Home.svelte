<script>
  export let data, helpers;
</script>

<style lang="scss">
  @import '../../styles/variables.scss';

  .square {
    min-height: 30rem;
  }

  .underline {
    text-decoration: none;
    position: relative;
    z-index: 1;
  }

  .underline:after {
    position: absolute;
    content: '';
    height: 0.5rem;
    bottom: -0.15rem;
    z-index: -1;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: $primary;
  }

  .header-font {
    font-size: clamp(2rem, 5rem, 3vw);
  }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<!-- ROW 1 -->
<!-- ABOUT row1 col1 -->
<about class="square px-12">
  <h2 class="text-5xl text-primary ml-1">Marcin Jerzak</h2>
  <h1 class="flex flex-col leading-none" style="font-size: 5.2rem;">
    <span>Full stack</span><span class="mt-1 mb-16">Developer</span>
  </h1>
  <span class="text-3xl ml-1">Remote | EU</span>
</about>
<!-- FEATURED WORK row1+row2 col1-->
<work class="row-span-2 bg-light flex text-dark font-s5 px-16 py-10 flex-col">
  <headerBar class="flex content-between w-full justify-between -mt-2 mb-2">
    <h1>Featured work</h1>
    <h1>See more..</h1>
  </headerBar>
  <projects class="grid grid-cols-3 gap-10">
    <!-- main featured project -->
    <project class="col-span-1 flex flex-col justify-end">
      <h1 class="font-s8">Marketflow</h1>
      <p class="font-s2 text-justify mb-6">
        Culpa in consequat exercitation proident Lorem ullamco in id dolor excepteur magna ex. In culpa sunt do
        voluptate voluptate magna sunt magna ad non reprehenderit adipisicing. Id eiusmod id sint cupidatat officia
        consequat id sunt nulla officia est.
      </p>
      <links class="flex text-xl font-bold justify-end"><a href="." class="mr-12">code</a> <a href=".">live</a></links>
    </project>
    <img src="img/p1.jpg" class="col-span-2" />
    {#each { length: 3 } as g, i}
      <project>
        <img src="img/p1.jpg" class="col-span-2" />
        <h1 class="font-s6">Marketflow</h1>
        <p class="font-s1 text-justify">
          Culpa in consequat exercitation proident Lorem ullamco in id dolor excepteur magna ex. In culpa sunt do
          voluptate voluptate magna sunt magna ad non reprehenderit adipisicing.
        </p>
        <links class="flex text-xl font-bold justify-end">
          <a href="." class="mr-12">code</a>
          <a href=".">live</a>
        </links>
      </project>
    {/each}
  </projects>
</work>
<!-- CONTACT row2 col1 -->
<div class=" bg-grey square text-dark px-12 pt-16 flex flex-col">
  <h1 class="font-s7 flex flex-col"><span>Let's build something</span> <span class="-mt-4">great together.</span></h1>
  <contact class="flex flex-col mt-8 font-s5 ">
    <span>send an email to <a href="#" class="underline font-bold">hey@jerzakm.com</a></span>
    <span>or drop me a message <a href="#" class="underline font-bold">here</a></span>
  </contact>
</div>

<!-- MISC row3 col1 -->

<div class="square bg-darkGrey text-dark px-12 pt-16">
  <h1 class="font-s7">Weekly newsletter</h1>
  <p class="font-s5">
    <a class="underline font-bold">Sign up here</a>
    for a selection of interesting content about both technical and human side of dev world.
  </p>
</div>

<div class="square " />
