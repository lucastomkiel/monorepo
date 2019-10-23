const chalk = require('chalk');
const sum = require('sum');
const _ = require('lodash');

const total = sum(5, 5);

console.log('Total:', chalk.green(total));
console.log('Tamanho da lista:', chalk.green(_.size([1, 2])));