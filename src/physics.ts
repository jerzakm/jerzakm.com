import {
  Body,
  Engine,
  World,
  Bodies,
  Render,
  Constraint,
  Composite,
} from 'matter-js'
import { uuidv4 } from './utils'

export const physicsDomElements: IDomBody[] = []
export const otherPhysicsBodies: any[] = []

let engine: Engine

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

  for (const e of physicsDomElements) {
    World.add(engine.world, e.body)
  }

  //setup social ropes
  const header = physicsDomElements.find((r) => {
    return r.id == 'name-header'
  })

  const socials = physicsDomElements.filter((r) => {
    return ['twitter-social', 'github-social', 'linkedin-social'].includes(r.id)
  })

  for (const s of socials) {
    s.body.density = 1
    const socialConstraint = Constraint.create({
      pointA: {
        x: s.body.position.x,
        y:
          header.body.position.y +
          header.element.getBoundingClientRect().height / 2,
      },
      bodyB: s.body,
      pointB: { x: 0, y: -s.element.getBoundingClientRect().height / 2 },
      stiffness: 0.01,
    })
    World.add(engine.world, socialConstraint)
  }

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(renderer)
  syncDom(0)
}

function techRain() {
  const element = document.createElement('img')
  const icons = ['svelte', 'typescript', 'javascript']
  element.src = `icons/${icons[Math.floor(Math.random() * icons.length)]}.svg`
  element.alt = 'Svelte icon'

  // const x = Math.random() * window.innerWidth
  // const y = -200
  const x = window.innerWidth / 2
  const y = window.innerHeight / 1.5

  const sizes = [48]
  const size = sizes[Math.floor(Math.random() * sizes.length)]

  element.style.width = `${size}px`
  element.style.height = `${size}px`
  element.style.position = 'fixed'
  element.style.left = `${x}px`
  element.style.top = `${y}px`
  document.body.appendChild(element)

  const body = Bodies.circle(x + size / 2, y + size / 2, size / 2, {
    restitution: 0.7,
    friction: 0,
  })
  World.add(engine.world, body)

  body.velocity.x = Math.random()

  const svelte = {
    element: element,
    body,
    id: uuidv4(),
  }
  physicsDomElements.push(svelte)
  Body.applyForce(body, body.position, {
    x: (Math.random() - 0.5) * 0.008,
    y: -0.1,
  })
}

let delta = 0
let lastTime = 0

let lastRain = 0
function syncDom(time) {
  delta = time - lastTime
  lastTime = time

  lastRain += delta

  if (lastRain > 250) {
    techRain()
    lastRain = 0
    console.log('rainn ')
  }

  for (const e of physicsDomElements) {
    if (e.body) {
      e.element.style.left =
        e.body.position.x - e.element.getBoundingClientRect().width / 2 + 'px'
      e.element.style.top =
        e.body.position.y - e.element.getBoundingClientRect().height / 2 + 'px'
      e.element.style.transform = `rotateZ(${
        (e.body.angle * 180) / Math.PI
      }deg)`
      e.element.style.transformOrigin = '50% 50%'

      if (e.body.position.y > window.innerHeight + 300) {
        Composite.remove(engine.world, e.body)
        e.body = undefined
        document.body.removeChild(e.element)
      }
    }
  }
  requestAnimationFrame(syncDom)
}

interface IDomBody {
  element: HTMLElement
  body?: Body
  id: string
}
