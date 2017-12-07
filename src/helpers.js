import { map } from 'ramda'

export const range = number => {
  const arr = []
  for (let i = 0; i < number; i++) {
    arr.push(i)
  }
  return arr
}

const pointDistance = (a, b) => {
  const dx = abs(a.x - b.x)
  const dy = abs(a.y - b.y)
  return sqrt(pow(dx, 2) + pow(dy, 2))
}

export const pathDistance = (cities, order) => {
  let sum = 0
  for (let i = 0; i < order.length - 1; i++) {
    sum += pointDistance(cities[order[i]], cities[order[i + 1]])
  }
  return sum
}

export const createCities = (number, width, height) => {
  const cities = []
  while (number--) {
    cities.push({
      x: random(10, width - 10),
      y: random(10, height - 10)
    })
  }
  return cities
}

export const drawCity = (city, i) => {
  fill('#bada55')
  stroke('#bada55')
  ellipse(city.x, city.y, 5)
}

export const drawCities = map(drawCity)

export const connectCities = (cities, order, color = '#bada55') => {
  stroke(color)
  noFill()
  beginShape()
  for (let i = 0; i < order.length; i++) {
    const city = cities[order[i]]
    vertex(city.x, city.y)
  }
  endShape()
}
