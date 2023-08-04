import Tokenizr from 'tokenizr';
import fs from 'fs';

let lexer = new Tokenizr();

lexer.rule(/let|const/, (ctx, match) => {
  ctx.accept('variable');
});

lexer.rule(/\*/, (ctx, match) => {
  ctx.accept('star');
});

lexer.rule(/\+/, (ctx, match) => {
  ctx.accept('plus');
});

lexer.rule(/=/, (ctx, match) => {
  ctx.accept('assignment');
});

lexer.rule(/;/, (ctx, match) => {
  ctx.accept('semi');
});

lexer.rule(/[0-9]+/, (ctx, match) => {
  ctx.accept('number', parseInt(match[0]));
});

lexer.rule(/[a-zA-Z_][a-zA-Z0-9_]*/, (ctx, match) => {
  ctx.accept('id');
});

lexer.rule(/[ \t\r\n]+/, (ctx, match) => {
  ctx.ignore();
});

lexer.rule(/./, (ctx, match) => {
  ctx.accept('char');
});

let cfg = fs.readFileSync('./token/sample.js', 'utf-8');

lexer.input(cfg);
lexer.tokens().forEach((token) => {
  console.log(token.toString());
});
