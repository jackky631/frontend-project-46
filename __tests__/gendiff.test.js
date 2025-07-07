/* eslint-disable no-undef */
import { genDiff } from '../src/index.js'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename => path.join(__dirname, '..', '__fixtures__', filename)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

test('gendiffJSON-stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('result.txt'))
})
test('gendiffYAML-stylish', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile('result.txt'))
})
test('gendiffJSON-plain', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('result-json-plain.txt'))
})
test('gendiffYAML-json', () => {
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(readFile('result-yaml-json.txt'))
})
