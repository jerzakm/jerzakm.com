import {
  Body,
  Engine,
  World,
  Bodies,
  Render,
  Mouse,
  MouseConstraint,
  Events,
  Query,
  Vector,
} from 'matter-js'
import { physicsDomElements } from './stores'

let engine: Engine
let render: Render

export const getPhysical = () => {
  initPhysicsWorld()
  createBounds()
  createDomPhysicsElements()
  mousePhysics()
  syncDom()
  dragFix()
}

export const stopPhysics = () => {
  console.log('stopping physics')

  // clearing engine
  Engine.clear(engine)

  // removing body ref
  for (const el of physicsDomElements) {
    el.body = undefined
    el.element.style.transition = `1s cubic-bezier(.81,.24,.67,.71)`
    el.element.style.transform = 'none'
    el.element.style.outline = 'none'
  }
  document.body.removeChild(render.canvas)
}

const initPhysicsWorld = () => {
  // module aliases

  // create an engine
  engine = Engine.create()

  engine.world.gravity.x = 0
  engine.world.gravity.y = 0

  // create a renderers
  render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  })

  // run the engine
  Engine.run(engine)

  // run the renderer
  // Render.run(render)

  render.canvas.style.position = 'fixed'
  render.canvas.style.top = '0'
  render.canvas.style.zIndex = '-1'
  render.canvas.style.backgroundColor = 'unset'
}

const createBounds = () => {
  const bottom = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight + 150,
    window.innerWidth + 200,
    350,
    { isStatic: true }
  )
  const top = Bodies.rectangle(
    window.innerWidth / 2,
    0,
    window.innerWidth + 150,
    50,
    { isStatic: true }
  )
  const left = Bodies.rectangle(
    -135,
    window.innerHeight / 2,
    300,
    window.innerHeight - 50,
    { isStatic: true }
  )
  const right = Bodies.rectangle(
    window.innerWidth + 135,
    window.innerHeight / 2,
    300,
    window.innerHeight - 50,
    { isStatic: true }
  )
  World.add(engine.world, [bottom, top, left, right])
}

const createDomPhysicsElements = () => {
  for (const el of physicsDomElements) {
    //style reset so position change is immediate
    el.element.style.transition = `0s`
    el.element.style.transform = 'none'
    el.element.style.outline = '1px solid #CCCCCC'

    const loc = el.element.getBoundingClientRect()
    el.initialLoc = loc
  }

  physicsDomElements.sort((a, b) => {
    return b.initialLoc.y - a.initialLoc.y
  })

  for (let i = 0; i < physicsDomElements.length; i++) {
    const el = physicsDomElements[i]
    function makePhysicsObject() {
      const loc = el.initialLoc
      console.log(loc.y)
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
    setTimeout(makePhysicsObject, i * 10)
  }
}

const mousePhysics = () => {
  //Need to add MouseConstraint for mouse events
  let mConstraint
  mConstraint = MouseConstraint.create(engine, {
    // mouse: mouse,
    //@ts-ignore
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  })
  World.add(engine.world, mConstraint)

  const moveVector = {
    x: 0,
    y: 0,
  }

  const mousePostion: Vector = {
    x: 0,
    y: 0,
  }

  window.addEventListener('mousemove', (e) => {
    moveVector.x = e.movementX
    moveVector.y = e.movementY

    mousePostion.x = e.clientX
    mousePostion.y = e.clientY
  })

  Events.on(mConstraint, 'mousemove', function (event) {
    //For Matter.Query.point pass "array of bodies" and "mouse position"
    var foundPhysics = Query.point(engine.world.bodies, event.mouse.position)

    if (foundPhysics.length > 0 && Vector.magnitude(moveVector) > 4.4) {
      Body.applyForce(
        foundPhysics[0],
        mousePostion,
        Vector.mult(Vector.normalise(moveVector), 0.01 * foundPhysics[0].mass)
      )
    }
  })
}

const dragFix = () => {
  Events.on(engine, 'beforeUpdate', () => {
    for (let i = 0; i < engine.world.bodies.length; i++) {
      const body = engine.world.bodies[i]
      if (body.velocity.x > 25 || body.velocity.y > 25) {
        body.velocity.x = Math.min(25, body.velocity.x)
        body.velocity.y = Math.min(25, body.velocity.y)
      }
    }
  })
}

let delta = 0
let lastTime = 0
function syncDom(time = 0) {
  delta = time - lastTime
  lastTime = time

  for (const el of physicsDomElements) {
    if (el.body && el.initialLoc) {
      el.element.style.transform = `translate(${
        el.body.position.x - el.initialLoc.x - el.initialLoc.width * 0.5
      }px,${
        el.body.position.y - el.initialLoc.y - el.initialLoc.height * 0.5
      }px) rotate(${el.body.angle * (180 / Math.PI)}deg )`
    }
  }

  requestAnimationFrame(syncDom)
}
