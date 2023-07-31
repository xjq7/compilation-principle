grammar JavaScript;

program
  : statement* EOF
  ;

statement
  : variableDeclaration
  | expressionStatement
  | ifStatement
  | whileStatement
  | forStatement
  | block
  ;

variableDeclaration
  : VAR IDENTIFIER (ASSIGN expression)? SEMICOLON
  ;

expressionStatement
  : expression SEMICOLON
  ;

ifStatement
  : IF LPAREN expression RPAREN statement (ELSE statement)?
  ;

whileStatement
  : WHILE LPAREN expression RPAREN statement
  ;

forStatement
  : FOR LPAREN (variableDeclaration | expressionStatement | SEMICOLON)? expression? SEMICOLON expression? RPAREN statement
  ;

block
  : LBRACE statement* RBRACE
  ;

expression
  : assignmentExpression
  ;

assignmentExpression
  : logicalOrExpression (ASSIGN assignmentExpression)?
  ;

logicalOrExpression
  : logicalAndExpression (OR logicalAndExpression)*
  ;

logicalAndExpression
  : equalityExpression (AND equalityExpression)*
  ;

equalityExpression
  : relationalExpression ((EQ | NEQ) relationalExpression)*
  ;

relationalExpression
  : additiveExpression ((LT | LTE | GT | GTE) additiveExpression)*
  ;

additiveExpression
  : multiplicativeExpression ((PLUS | MINUS) multiplicativeExpression)*
  ;

multiplicativeExpression
  : unaryExpression ((MULT | DIV) unaryExpression)*
  ;

unaryExpression
  : (PLUS | MINUS | NOT) unaryExpression
  | primaryExpression
  ;

primaryExpression
  : NUMBER
  | STRING
  | TRUE
  | FALSE
  | NULL
  | IDENTIFIER
  | LPAREN expression RPAREN
  ;

VAR : 'var';
IF : 'if';
ELSE : 'else';
WHILE : 'while';
FOR : 'for';
OR : '||';
AND : '&&';
EQ : '==';
NEQ : '!=';
LT : '<';
LTE : '<=';
GT : '>';
GTE : '>=';
PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';
NOT : '!';
LPAREN : '(';
RPAREN : ')';
LBRACE : '{';
RBRACE : '}';
ASSIGN : '=';
SEMICOLON : ';';

NUMBER : [0-9]+;
STRING : '"' (~["\\\r\n] | '\\' [\\"\\r\\n])* '"';
TRUE : 'true';
FALSE : 'false';
NULL : 'null';
IDENTIFIER : [a-zA-Z_][a-zA-Z0-9_]*;
WS : [ \t\r\n]+ -> skip;