import { Body, Engine, World, Bodies, Render, Constraint } from 'matter-js'

export const physicsDomElements: IDomBody[] = []
export const otherPhysicsBodies: any[] = []

export const initPhysicsWorld = () => {
  // module aliases

  // create an engine
  const engine = Engine.create()

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
    0,
    window.innerHeight,
    window.innerWidth * 3,
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
    const socialConstraint = Constraint.create({
      pointA: {
        x: s.body.position.x,
        y:
          header.body.position.y +
          header.element.getBoundingClientRect().height / 2,
      },
      bodyB: s.body,
      pointB: { x: 0, y: -s.element.getBoundingClientRect().height / 2 },
      stiffness: 0.001,
    })
    World.add(engine.world, socialConstraint)
  }

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(renderer)

  syncDom()
}

function syncDom() {
  for (const e of physicsDomElements) {
    if (e.body) {
      e.element.style.left =
        e.body.position.x - e.element.getBoundingClientRect().width / 2 + 'px'
      e.element.style.top =
        e.body.position.y - e.element.getBoundingClientRect().height / 2 + 'px'
      e.element.style.transform = `rotateZ(${
        (e.body.angle * 180) / Math.PI
      }deg)`
    }
  }
  requestAnimationFrame(syncDom)
}

interface IDomBody {
  element: HTMLElement
  body?: Body
  id: string
}
