const chalk = require('chalk');

module.exports = (x, y) => {
  console.log(`Adicionando: ${chalk.blue(x)} + ${chalk.blue(y)}`);
  return x + y;
};