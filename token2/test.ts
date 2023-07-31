import { tokenize } from '.';

const str = `
  int c = a + 10;
  int d = a * 2;
  bool bool1 = a > b;
  bool bool2 = c >= d;
`;

console.log(tokenize(str));
