//* parsing the file contents *//
import { load } from 'js-yaml'

export default (readFile, format) => {
  if (format === 'json') {
    return JSON.parse(readFile)
  }
  if (format === 'yml' || format === 'yaml') {
    return load(readFile)
  }
}
