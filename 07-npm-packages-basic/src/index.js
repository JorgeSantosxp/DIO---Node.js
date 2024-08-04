import chalk from 'chalk';
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgGreen.bold('Hello world!'));

console.log(logSymbols.success, chalk.green.italic("Servidor iniciado com sucesso!"))

console.log(logSymbols.error, chalk.red.bgMagenta.italic("Servidor com problema..."))