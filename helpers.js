const range = number => {
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

const pathDistance = (cities, order) => {
  let sum = 0
  for (let i = 0; i < order.length - 1; i++) {
    sum += pointDistance(cities[order[i]], cities[order[i + 1]])
  }
  return sum
}
