#!/usr/bin/env node
/* eslint-disable no-undef */

import genDiff from '../src/index.js'
import { Command } from 'commander'
const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, option) => {
    console.log(genDiff(filepath1, filepath2, option.format))
  })

program.parse(process.argv)
