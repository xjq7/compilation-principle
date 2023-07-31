import antlr4 from 'antlr4';
const JavaScriptLexer = require('./JavaScriptLexer').JavaScriptLexer;
const JavaScriptParser = require('./JavaScriptParser').JavaScriptParser;

const input = 'var x = 1;\nif (x > 0) {\n  console.log("Positive");\n} else {\n  console.log("Non-positive");\n}';
const chars = new antlr4.InputStream(input);
const lexer = new JavaScriptLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new JavaScriptParser(tokens);
const listener = new JavaScriptParserListener();
parser.buildParseTrees = true;
parser.addParseListener(listener);
parser.program();