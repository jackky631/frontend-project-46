import getStylish from './stylish.js'

export default function makeFormat(obj, format = 'stylish') {
  if (format === 'stylish') {
    return getStylish(obj)
  }
}
