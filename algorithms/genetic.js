class GeneticAlgorithm {
  constructor(cities) {
    this.cities = cities
    this.firstOrder = range(cities.length)
    this.currentOrder = shuffle(this.firstOrder)
    this.bestOrder
  }

  drawScore() {
    const score = pathDistance(this.cities, this.currentOrder)
    noFill()
    stroke('white')
    text(score, 10, 20)
  }

  draw() {
    const { cities, currentOrder } = this
    stroke('#bada55')
    noFill()
    beginShape()
    for (let i = 0; i < currentOrder.length; i++) {
      const city = cities[currentOrder[i]]
      vertex(city.x, city.y)
    }
    endShape()
    this.drawScore()
  }

  update() {
    this.currentOrder = shuffle(this.firstOrder)
  }
}
