const canvas = document.querySelector('#canvas') as HTMLCanvasElement
let width = window.innerWidth
let height = window.innerHeight
canvas.width = width
canvas.height = height

window.addEventListener('resize', () => {
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width
  canvas.height = height
})

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

function color(h: number) {
  return `hsl(${h}, 70%, 50%)`
}

let a = 0
let x = Math.random() * width
let y = Math.random() * height
let h = Math.floor(Math.random() * 360)
ctx.strokeStyle = color(h)
ctx.lineWidth = 2
ctx.beginPath()
ctx.moveTo(x, y)
let count = 0
let countDown = 0
let da = 0
let dda = 0

const PI2 = Math.PI * 2

setInterval(() => {
  if (countDown !== 0) {
    countDown--
  } else {
    count = countDown = Math.floor(Math.random() * 20) + 10
    da = (Math.random() - 0.5) * 0.2
    dda = (Math.random() - 0.5) * 0.05
  }
  a += da
  if (a > PI2) {
    a = a - PI2
  } else if (a < 0) {
    a = a + PI2
  }
  da += dda
  dda *= 0.999
  const dx = Math.cos(a) * 4
  const dy = Math.sin(a) * 4
  x += dx
  y += dy
  ctx.lineTo(x, y)
  ctx.stroke()
  ctx.lineWidth = 2
  if (x < 0 || y < 0 || x >= width || y >= height) {
    x = Math.random() * width
    y = Math.random() * height
    h = Math.floor(Math.random() * 360)
  }
  ctx.strokeStyle = color(h)
  ctx.beginPath()
  ctx.moveTo(x, y)
}, 100)
