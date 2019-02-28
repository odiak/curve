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
let w = 2
ctx.lineWidth = w
ctx.beginPath()
ctx.moveTo(x, y)
let count = 0
let countDown = 0
let p1 = (Math.random() - 0.5) * 0.2
let p2 = (Math.random() - 0.5) * 0.05

const PI2 = Math.PI * 2

setInterval(() => {
  if (countDown !== 0) {
    countDown--
  } else {
    count = countDown = Math.floor(Math.random() * 7) + 3
    const t = Math.random() * 2 - 1
    p2 = Math.sign(t) * t ** 2 * 0.02 - Math.sign(p1) * Math.abs(p1) ** 2 * 0.1
  }
  // console.log(p1)
  a += p1
  p1 += p2
  if (a > PI2) {
    a = a - PI2
  } else if (a < 0) {
    a = a + PI2
  }
  const dx = Math.cos(a) * 4
  const dy = Math.sin(a) * 4
  x += dx
  y += dy
  ctx.lineTo(x, y)
  ctx.stroke()
  if (x < 0 || y < 0 || x >= width || y >= height) {
    x = Math.random() * width
    y = Math.random() * height
    h = Math.floor(Math.random() * 360)
    w = Math.floor(Math.random() * 6) + 2
  }
  ctx.lineWidth = w
  ctx.strokeStyle = color(h)
  ctx.beginPath()
  ctx.moveTo(x, y)
}, 10)
