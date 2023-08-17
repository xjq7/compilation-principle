import { tokenize } from '.';

const str = `
  int a = 20;
  int b = 3;
`;

console.log(tokenize(str));
