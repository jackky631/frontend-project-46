import getPlain from './plain.js'
import getStylish from './stylish.js'

export default function makeFormat(obj, format = 'stylish') {
  if (format === 'stylish') {
    return getStylish(obj)
  }
  if (format === 'plain') {
    return getPlain(obj)
  }
  if (format === 'json') {
    return JSON.stringify(obj)
  }
}
