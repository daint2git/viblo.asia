const handleAsyncAwait = async () => {
  const greeting = await Promise.resolve('hi')
  return greeting
}

const myMap = new Map()
const myArray = Array.from([1, 2, 3], (x) => x + x)
const isExistedInArray = ['a', 'b'].includes('a')
