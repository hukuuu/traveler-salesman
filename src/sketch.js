import GeneticAlgorithm from './algorithms/genetic.js'
import { createCities, drawCities } from './helpers'
import { width, height, citiesLenght } from './constants'

let cities
let algorithm

window.setup = function() {
  createCanvas(width, height)
  cities = createCities(citiesLenght, width, height / 2)
  algorithm = new GeneticAlgorithm(cities)
}

window.draw = function() {
  fill('black')
  rect(0, 0, width, height)
  drawCities(cities)
  algorithm.update()
  algorithm.draw()
}
