#!/usr/bin/env node

import { genDiff } from '../src/index.js'
import { Command } from 'commander'
const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, formatFile) => {
    console.log(genDiff(filepath1, filepath2, formatFile))
  })

program.parse()
