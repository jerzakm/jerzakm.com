import { Body, Engine, World, Bodies, Render } from 'matter-js'

export const physicsDomElements: IDomBody[] = []

let engine: Engine

export const getPhysical = () => {
  initPhysicsWorld()
  createDomPhysicsElements()
  syncDom()
}

export const initPhysicsWorld = () => {
  // module aliases

  // create an engine
  engine = Engine.create()

  // create a renderers
  const renderer = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  })

  const ground = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight,
    window.innerWidth - 50,
    60,
    { isStatic: true }
  )
  World.add(engine.world, ground)

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(renderer)

  renderer.canvas.style.position = 'fixed'
  renderer.canvas.style.top = '0'
  renderer.canvas.style.zIndex = '-1'
  renderer.canvas.style.backgroundColor = 'unset'
}

const createDomPhysicsElements = () => {
  for (const el of physicsDomElements) {
    const loc = el.element.getBoundingClientRect()
    el.initialLoc = loc
    const body = Bodies.rectangle(
      loc.x + loc.width / 2,
      loc.y + loc.height / 2,
      loc.width,
      loc.height,
      {
        isStatic: false,
      }
    )
    el.body = body
    World.add(engine.world, body)
  }
}

let delta = 0
let lastTime = 0
function syncDom(time = 0) {
  delta = time - lastTime
  lastTime = time

  for (const el of physicsDomElements) {
    el.element.style.transform = `translate(${0}px,${0}px)`
  }

  requestAnimationFrame(syncDom)
}

interface IDomBody {
  element: HTMLElement
  body?: Body
  initialLoc?: DOMRect
  id: string
}
