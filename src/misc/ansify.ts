// Core Escape Sequences
const ansi = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    underline: "\x1b[4m",
    italic: "\x1b[3m",

    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",

    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgCyan: "\x1b[46m",
};

export function success(text: string): void{
    console.log(`${ansi.green}${ansi.bold}✓ ${text}${ansi.reset}`);
}

export function warn(text: string): void{
    console.log(`${ansi.yellow}${ansi.bold}! ${text}${ansi.reset}`);
}

export function error(text: string): void{
    console.log(`${ansi.yellow}${ansi.bold}✗ ${text}${ansi.reset}`);
}

export function boldText(text:string): string {
    return `${ansi.bold}${text}${ansi.reset}`;
}

export function banner(text: string, colour: string = ansi.blue): void {
    const width = text.length + 6;
    const border = `${colour}${"=".repeat(width)}${ansi.reset}`;

    console.log(border);
    console.log(`${colour}||${ansi.reset} ${ansi.bold}${text}${ansi.reset} ${colour}||${ansi.reset}`);
    console.log(border);
}

export function paint(
    text: string,
    colour: string = "",
    bg: string = "",
    isBold: boolean = false,
    isUnderline: boolean = false
): string {
    let style = "";
    if (colour)      style += colour;
    if (bg)          style += bg;
    if (isBold)      style += ansi.bold;
    if (isUnderline) style += ansi.underline;

    return `${style}${text}${ansi.reset}`;
}

export { ansi };