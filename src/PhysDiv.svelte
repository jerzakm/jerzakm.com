<script lang="ts">
  import { onMount } from 'svelte'
  import { physicsDomElements } from './physics'

  import { uuidv4 } from './utils'

  export let classes: string = ''
  export let isStatic: boolean = true
  export let isSensor: boolean = false
  export let id: string = uuidv4()

  let element: HTMLElement

  let innerHtml: string
  let loc: DOMRect

  onMount(() => {
    loc = element.getBoundingClientRect()
    physicsDomElements.push({
      id,
      element,
    })
  })
</script>

<div class={`inline-block ${classes}`} bind:this={element}>
  <slot />
</div>
