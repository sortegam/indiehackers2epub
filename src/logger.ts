import chalk from 'chalk';

export const log = (msg: string) => {
  console.log(chalk.cyan(msg));
};

export const error = (msg: string) => {
  console.log(chalk.red(msg));
};

export const success = (msg: string) => {
  console.log(chalk.green(msg));
};
