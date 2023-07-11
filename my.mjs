import figlet from 'figlet';
const
    hello = 'Hello, Node.js';

console.log(
    figlet.textSync(hello, {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );