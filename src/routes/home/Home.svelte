<script>
  // export let data, helpers;
</script>

<style lang="scss">
  @import '../../styles/variables.scss';

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

  .underline-small:after {
    bottom: -0.22rem;
    height: 0.3rem;
  }

  .header-font {
    font-size: clamp(2rem, 5rem, 3vw);
  }

  tags > el {
    margin-right: 0.8rem;
  }
  tags > el:before {
    content: '#';
  }

  .homegrid {
    display: flex;
    flex-direction: column;
  }

  .about-box {
    @apply px-4 py-6;
    h2 {
      @apply text-primary ml-1;
    }
    h1 {
      @apply flex flex-col leading-none;
      font-size: 4.4rem;
    }
  }

  .work-box {
    @apply row-span-2 bg-light flex text-dark px-8 py-10 flex-col;
    projects {
      .featured-project {
        @apply flex flex-col-reverse col-span-3;
      }
      .normal-project {
        @apply col-span-3;
      }
    }
  }

  blog {
    @apply row-span-2 flex text-light px-8 py-10 flex-col;
    content {
      @apply flex flex-col mt-8;
    }
  }

  @media (min-width: $mobile) {
    .about-box {
      @apply px-12 py-10;
      h1 {
        font-size: 5.2em;
      }
    }
  }

  @media (min-width: $tablet) {
    .work-box {
      @apply px-16;
      projects {
        .featured {
          @apply grid grid-cols-3 gap-10;
        }
        .normal-project {
          @apply col-span-1;
        }
      }
    }

    blog {
      @apply px-16;
      content {
        @apply grid grid-cols-2 gap-10;
      }
    }
  }

  @media (min-width: $small) {
    .homegrid {
      display: grid;
      grid-template-columns: 36.5% 1fr;
    }
  }

  // @media (min-width: $medium) {
  // }

  // @media (min-width: $large) {
  // }
</style>

<svelte:head>
  <title>Elder.js Template: Home</title>
</svelte:head>

<home class="homegrid">
  <!-- ROW 1 -->
  <!-- ABOUT row1 col1 -->
  <about class="about-box">
    <h2 class="font-s7 whitespace-no-wrap">Marcin Jerzak</h2>
    <h1><span class="whitespace-no-wrap">Full stack</span><span class="mb-8">Developer</span></h1>
    <span class="font-s5 ml-1 mt-16">Remote | EU</span>
  </about>
  <!-- FEATURED WORK row1+row2 col1-->
  <work class="work-box font-s5">
    <headerBar class="flex content-between w-full justify-between -mt-2 mb-2">
      <h1>Featured work</h1>
      <!-- <h1>See more..</h1> -->
    </headerBar>
    <projects class="grid grid-cols-3 gap-10">
      <!-- main featured project -->
      <project class="featured-project">
        <content>
          <h1 class="font-s8">Marketflow</h1>
          <p class="font-s2 text-justify mb-6">
            Culpa in consequat exercitation proident Lorem ullamco in id dolor excepteur magna ex. In culpa sunt do
            voluptate voluptate magna sunt magna ad non reprehenderit adipisicing. Id eiusmod id sint cupidatat officia
            consequat id sunt nulla officia est.
          </p>
          <links class="flex text-xl font-bold justify-end">
            <a href="." class="mr-12">code</a>
            <a href=".">live</a>
          </links>
        </content>
        <img src="img/p1.jpg" class="col-span-2" />
      </project>
      {#each { length: 3 } as g, i}
        <project class="normal-project">
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
  <div class=" bg-grey square text-dark px-12 py-16 flex flex-col">
    <h1 class="font-s7 flex flex-col"><span>Let's build something</span> <span class="-mt-4">great together.</span></h1>
    <contact class="flex flex-col mt-8 font-s5 ">
      <span>send an email to <a href="#" class="underline font-bold">hey@jerzakm.com</a></span>
      <span>or drop me a message <a href="#" class="underline font-bold">here</a></span>
    </contact>
  </div>

  <!-- MISC row3 col1 -->

  <div class="square bg-darkGrey text-dark px-12 py-16">
    <h1 class="font-s7">Weekly newsletter</h1>
    <p class="font-s5">
      <a class="underline font-bold">Sign up here</a>
      for a selection of interesting content about both technical and human side of dev world.
    </p>
    <tags class="font-s4 mt-4 flex flex-wrap">
      <el>svelte</el>
      <el>webgl</el>
      <el>serverless</el>
      <el>blockchain</el>
      <el>aws</el>
      <el>typescript</el>
      <el>career</el>
    </tags>
  </div>

  <!-- BLOG POSTS row3 col 2,3 -->
  <blog class="font-s5">
    <headerBar class="flex content-between w-full justify-between -mt-2 mb-2">
      <h1>Blog</h1>
    </headerBar>
    <content>
      <featured class="flex flex-col">
        <img src="img/p1.jpg" class="" />
        <div class="flex justify-between items-end">
          <date class="mt-4 text-darkerGrey font-s2">Feb 15 (6 hours ago)</date>
          <span class="font-s2 text-darkerGrey">5 min read</span>
        </div>
        <h1 class="font-s6 leading-none mt-2">Reviewing sveltekit features.</h1>
        <p class="font-s2 mt-2 text-justify">
          Dolor nulla velit duis minim quis nostrud irure et. Fugiat deserunt officia aliquip laboris eu voluptate
          laboris esse do ipsum non. Commodo Lorem culpa ex aliqua incididunt amet dolor officia anim voluptate mollit
          exercitation. Occaecat aliquip eu laborum nisi esse elit labore.
        </p>
        <div class="flex justify-between items-end">
          <a href="#" alt="Continue reading" class="underline mt-2">Continue reading</a>
          <span class="font-s2 text-darkerGrey">(6 comments)</span>
        </div>
      </featured>
      <posts class="flex flex-col justify-between">
        {#each { length: 3 } as g, i}
          <post class="mb-16">
            <div class="flex justify-between items-end">
              <date class=" text-darkerGrey font-s1">Feb 15 (6 hours ago)</date>
              <span class="font-s1 text-darkerGrey">5 min read</span>
            </div>
            <h1 class="font-s5 leading-none mt-2">Reviewing sveltekit features.</h1>
            <p class="font-s1 mt-2 text-justify">
              Dolor nulla velit duis minim quis nostrud irure et. Fugiat deserunt officia aliquip laboris eu voluptate
              laboris esse do ipsum non. Commodo Lorem culpa ex aliqua incididunt amet dolor officia anim voluptate
              mollit exercitation. Occaecat aliquip eu laborum nisi esse elit labore.
            </p>
            <div class="flex justify-between items-end">
              <a href="#" alt="Continue reading" class="underline underline-small mt-2 font-s3">Continue reading</a>
              <span class="font-s1 text-darkerGrey">(6 comments)</span>
            </div>
          </post>
        {/each}
      </posts>
    </content>
    <h1 class="font-s6">Read more..</h1>
  </blog>

  <!-- DOODLE -->
  <div class=" bg-grey square text-dark px-12 pt-16 flex flex-col">
    <h1 class="font-s6">Mathy doodle #1</h1>
  </div>
</home>
