<script>
  export let templateHtml, settings;

  import Navigation from '../components/Navigation.svelte';
</script>

<style lang="scss">
  @import '../styles/variables.scss';

  :global(body) {
    background-color: $darker;
    color: $light;
    padding: 0;
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>

<main>
  <Navigation />
  {@html templateHtml}
</main>
