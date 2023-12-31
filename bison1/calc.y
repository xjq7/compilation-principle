%{
// 头文件定义区
#include <iostream>
#include <cstdlib>
using namespace std;
extern int yylex();
extern int yyparse();

void yyerror(const char* s);
%}

%union {
	int ival;
}

%token<ival> INT
%token PLUS MINUS 
%token NEWLINE QUIT

%left PLUS MINUS

%type<ival> expression

%%

calculation:
	   | calculation line
;

line: NEWLINE
    | expression NEWLINE { 
      cout << "\tResult: " << $1 << endl; 
    }
    | QUIT NEWLINE { cout << "bye!" << endl; exit(0); }
;

expression: 
  INT	{ $$ = $1; }
  | expression PLUS INT  { $$ = $1 + $3; }
  | expression MINUS INT  { $$ = $1 - $3; }
;  

%%

int main() {
	yyparse();
	return 0;
}

void yyerror(const char* s) {
	cout << "Parse error: " << s << endl;
	exit(1);
}
