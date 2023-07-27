import { tokenize } from '.';

const str = `
  int a = 2;
  int b = 3;
`;

console.log(tokenize(str));
