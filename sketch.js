const citiesLenght = 5
const width = 640
const height = 480
let cities
let algorithm

const createCities = (number, width, height) => {
  const cities = []
  while (number--) {
    cities.push({
      x: random(10, width - 10),
      y: random(10, height - 10)
    })
  }
  return cities
}

const drawCity = (city, i) => {
  fill('#bada55')
  stroke('#bada55')
  ellipse(city.x, city.y, 5)
}

const drawCities = R.map(drawCity)

function setup() {
  createCanvas(width, height)
  cities = createCities(citiesLenght, width, height)
  algorithm = new GeneticAlgorithm(cities)
}

function draw() {
  fill('black')
  rect(0, 0, width, height)
  drawCities(cities)
  algorithm.update()
  algorithm.draw()
}
