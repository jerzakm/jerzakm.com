<script lang="ts">
  import { physicsDomInit } from './stores'

  export let classes = ''

  let element: HTMLElement

  let innerHtml: string
  let loc: DOMRect

  physicsDomInit.subscribe((physicsInit) => {
    if (physicsInit) {
      loc = element.getBoundingClientRect()
      innerHtml = element.innerHTML
    } else if (!physicsInit && innerHtml) {
      element.innerHTML = innerHtml

      element.style.left = `${loc.left}px`
      element.style.top = `${loc.top}px`
      element.style.width = `${loc.width}px`
      element.style.height = `${loc.height}px`
      element.style.position = 'fixed'

      document.body.appendChild(element)
    }
  })
</script>

<div class={classes} bind:this={element}>
  <slot />
</div>
