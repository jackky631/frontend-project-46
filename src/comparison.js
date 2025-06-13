/** Comparision files */

import _ from 'lodash'

export default (parseFile1, parseFile2) => {
  const keysFile1 = Object.keys(parseFile1)
  const keysFile2 = Object.keys(parseFile2)
  const sortedAllKeys = _.sortBy(_.union(keysFile1, keysFile2))
  const result = sortedAllKeys.map((key) => {
    if (!_.has(parseFile1, key)) {
      return { key, status: 'secondFile', value: parseFile2[key] }
    }
    if (!_.has(parseFile2, key)) {
      return { key, status: 'firstFile', value: parseFile1[key] }
    }
    if (parseFile1[key] !== parseFile2[key]) {
      return { key, status: 'diffValues', oldValue: parseFile1[key], newValue: parseFile2[key] }
    }
    return { key, status: 'sameValues', value: parseFile1[key] }
  })
  return result
}
