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
}

const initPhysicsWorld = () => {
  // module aliases

  // create an engine
  engine = Engine.create()

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
  Render.run(render)

  render.canvas.style.position = 'fixed'
  render.canvas.style.top = '0'
  render.canvas.style.zIndex = '-1'
  render.canvas.style.backgroundColor = 'unset'
}

const createBounds = () => {
  const bottom = Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight,
    window.innerWidth - 50,
    50,
    { isStatic: true }
  )
  const top = Bodies.rectangle(
    window.innerWidth / 2,
    0,
    window.innerWidth - 50,
    50,
    { isStatic: true }
  )
  const left = Bodies.rectangle(
    0,
    window.innerHeight / 2,
    50,
    window.innerHeight - 50,
    { isStatic: true }
  )
  const right = Bodies.rectangle(
    window.innerWidth,
    window.innerHeight / 2,
    50,
    window.innerHeight - 50,
    { isStatic: true }
  )
  World.add(engine.world, [bottom, top, left, right])
}

const createDomPhysicsElements = () => {
  for (const el of physicsDomElements) {
    const loc = el.element.getBoundingClientRect()
    el.initialLoc = loc
  }

  for (const el of physicsDomElements) {
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
    setTimeout(makePhysicsObject, (window.innerHeight - el.initialLoc.y) * 3)
  }
}

const mousePhysics = () => {
  //Need to add MouseConstraint for mouse events
  var mConstraint
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

  //Add event with 'mousemove'

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

    console.log(Vector.magnitude(moveVector))
    if (foundPhysics.length > 0 && Vector.magnitude(moveVector) > 1.8) {
      Body.applyForce(
        foundPhysics[0],
        mousePostion,
        Vector.mult(Vector.normalise(moveVector), 0.1)
      )
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
        el.body.position.x - el.initialLoc.x - el.initialLoc.width / 2
      }px,${
        el.body.position.y - el.initialLoc.y - el.initialLoc.height / 2
      }px) rotate(${el.body.angle * (180 / Math.PI)}deg )`
    }
  }

  requestAnimationFrame(syncDom)
}
