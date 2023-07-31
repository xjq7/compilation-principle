import antlr4 from 'antlr4';
import JavaScriptLexer from './JavaScriptLexer.js';
import JavaScriptParser from './JavaScriptParser.js';

const input = 'var x = 1; if (x > 0) { } else { }';

const chars = new antlr4.InputStream(input);
const lexer = new JavaScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JavaScriptParser(tokens);

const ast = parser.program();
console.log(ast.toStringTree(parser.ruleNames, parser));
