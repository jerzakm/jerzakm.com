<script>
  export let templateHtml, settings;

  import Navigation from '../components/Navigation.svelte';
</script>

<style lang="scss">
  @import '../styles/variables.scss';

  :global(body) {
    background-color: $darker;
    color: $light;
    padding: 1rem;
    margin: 0;
    @apply flex flex-col;
  }
  main {
    width: 100%;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<Navigation />
<main>
  {@html templateHtml}
</main>
