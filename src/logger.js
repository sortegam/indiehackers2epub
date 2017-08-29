import chalk from 'chalk';

export const log = (msg) => {
  console.log(chalk.cyan(msg));
};

export const error = (msg) => {
  console.log(chalk.red(msg));
};

export const success = (msg) => {
  console.log(chalk.green(msg));
};
