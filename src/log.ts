import colors from 'kleur';

export const ARROW = '   ~> ';
export const SPACER = ' '.repeat(6);
const CFW = colors.bold('[CFW]');

function print(color: keyof colors.Kleur, msg: string): void {
	console.log(colors[color](CFW), msg.includes('\n') ? msg.replace(/(\r?\n)/g, '$1' + SPACER) : msg);
}

export const info = (msg: string) => print('white', msg);
export const success = (msg: string) => print('green', msg);
export const warn = (msg: string) => print('yellow', msg);

export function error(msg: string, code=1): void {
	print('red', msg);
	process.exit(code);
}
