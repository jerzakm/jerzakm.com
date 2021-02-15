<script>
  export let templateHtml, settings;
</script>

<style lang="scss">
  @import '../variables.scss';

  :global(body) {
    background-color: $darker;
    padding: 0;
    margin: 0;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
</svelte:head>
<div class="container">
  {@html templateHtml}
</div>
