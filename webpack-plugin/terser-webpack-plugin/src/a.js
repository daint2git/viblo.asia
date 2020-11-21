export default function a(arg) {
  console.log('function a')

  if (arg === 1) {
    return '11'
  }

  if (arg === 2) {
    return '22'
  }

  const objectA = {
    ['abc']: 'abc',
    ['123']: '123',
  }

  console.log(objectA)
}
