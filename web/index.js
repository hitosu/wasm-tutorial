import { Universe } from '../pkg/wasm_tutorial'

const pre = document.getElementById('game-canvas')
const universe = Universe.new()

const renderLoop = () => {
  pre.textContent = universe.render()
  universe.tick()

  requestAnimationFrame(renderLoop)
}

requestAnimationFrame(renderLoop)
