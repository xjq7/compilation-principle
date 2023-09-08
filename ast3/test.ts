import { tokenize } from '../token2';
import { AST } from './index';

let str = '1 + 1 + 3 + 5;';

const tokens = tokenize(str);
console.log(tokens);
const ast = new AST(tokens);
console.log(JSON.stringify(ast.build(), null, 4));
