import antlr4 = require('antlr4');
const JavaScriptLexer = require('./JavaScriptLexer').JavaScriptLexer;
const JavaScriptParser = require('./JavaScriptParser').JavaScriptParser;

const input =
  'var x = 1; if (x > 0) { console.log("Positive"); } else { console.log("Non-positive"); }';

const chars = new antlr4.InputStream(input);
const lexer = new JavaScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JavaScriptParser(tokens);

const ast = parser.program();

console.log(ast.toStringTree(parser.ruleNames));
