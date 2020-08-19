<script lang="ts">
  import { physicsDomInit } from './stores'
  import { physicsDomElements, otherPhysicsBodies } from './physics'

  import { uuidv4 } from './utils'
  import { Bodies } from 'matter-js'

  export let classes: string = ''
  export let isStatic: boolean = true
  export let isSensor: boolean = false
  export let id: string = uuidv4()

  let element: HTMLElement

  let innerHtml: string
  let loc: DOMRect

  physicsDomInit.subscribe((physicsInit) => {
    if (physicsInit) {
      loc = element.getBoundingClientRect()
      innerHtml = element.innerHTML

      const body = Bodies.rectangle(
        loc.x + loc.width / 2,
        loc.y + loc.height / 2,
        loc.width,
        loc.height,
        {
          isStatic,
          isSensor,
        }
      )
      physicsDomElements.push({
        element,
        id,
        body,
      })
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
