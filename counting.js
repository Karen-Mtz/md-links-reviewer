const chalk = require('chalk');

const counting = (links) => {
  console.log(chalk.cyan('Total: ') + chalk.whiteBright(links.length));
  let uniqs = new Set(links);
  console.log(chalk.cyan('Uniques: ') + chalk.whiteBright(uniqs.size));
};
module.exports.counting = counting;
