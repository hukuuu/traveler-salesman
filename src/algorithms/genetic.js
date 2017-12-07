import { range, pathDistance, connectCities } from '../helpers'
import { height } from '../constants'
import { take } from 'ramda'

const population = 100
const transl = height / 2
const mutationRate = 70

class GeneticAlgorithm {
  constructor(cities) {
    this.cities = cities
    this.firstOrder = range(cities.length)
    this.generation = this.makeFirstGeneration()
    this.bestOrder = this.generation[0]
    this.bestScore = pathDistance(cities, this.generation[0])
  }

  makeFirstGeneration() {
    const generation = []
    for (let i = 0; i < population; i++) {
      generation.push(shuffle(this.firstOrder))
    }
    return generation
  }

  drawBestScore() {
    noFill()
    stroke('white')
    text(this.bestScore, 10, 20)
  }

  draw() {
    this.calculateBestOrder()

    const { cities, bestOrder, currentBestOrder } = this

    connectCities(cities, bestOrder)
    translate(0, transl)
    connectCities(cities, currentBestOrder, 'white')
    translate(0, -transl)
    this.drawBestScore()
  }

  update() {
    this.generation = this.mutateGeneration()
  }

  calculateBestOrder() {
    const { cities, bestOrder, generation } = this

    let currentBestOrder = generation[0]
    let currentBestScore = pathDistance(cities, generation[0])

    for (let i = 0; i < generation.length; i++) {
      const current = pathDistance(cities, generation[i])
      if (currentBestScore > current) {
        currentBestScore = current
        currentBestOrder = generation[i]
      }
    }

    const bestScore = pathDistance(cities, bestOrder)

    if (bestScore > currentBestScore) {
      this.bestScore = currentBestScore
      this.bestOrder = currentBestOrder
    }

    this.currentBestOrder = currentBestOrder
    this.currentBestScore = currentBestScore
  }

  mutateGeneration() {
    const { generation } = this

    const top = floor(mutationRate * generation.length / 100)

    const first = take(
      top,
      generation.sort((a, b) => {
        return pathDistance(this.cities, b) - pathDistance(this.cities, a)
      })
    )

    const mutatedGeneration = []

    for (let i = 0; i < population; i++) {
      const order = first[i % (first.length - 1)].slice()
      for (let j = 0; j < floor(mutationRate * top / 100); j++) {
        const a = floor(random(order.length - 1))
        const b = (a + 1) % (order.length - 1)
        this.swap(order, a, b)
      }
      mutatedGeneration.push(order)
    }

    return mutatedGeneration
  }

  swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}

export default GeneticAlgorithm
