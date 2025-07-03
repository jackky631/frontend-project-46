import path from 'path'
import { readFileSync } from 'node:fs'
import parse from './parsers/parse.js'
import dataComparison from './comparison.js'
import format from './format.js'
import { cwd } from 'node:process'

const getFormat = filepath => path.extname(filepath).slice(1)
const genDiff = (filepath1, filepath2) => {
  const getFileContent1 = readFileSync(path.resolve(cwd(), '.', '__fixtures__', filepath1))
  const getFileContent2 = readFileSync(path.resolve(cwd(), '.', '__fixtures__', filepath2))
  const parseFile1 = parse(getFileContent1, getFormat(filepath1))
  const parseFile2 = parse(getFileContent2, getFormat(filepath2))
  const comparison = dataComparison(parseFile1, parseFile2)
  return format(comparison)
}

export { genDiff }
