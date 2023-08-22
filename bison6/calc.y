%{
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
%token PLUS MINUS MULTIPLY DIVIDE
%token NEWLINE QUIT

%left MULTIPLY DIVIDE
%left PLUS MINUS

%type<ival> exp
%type<ival> term
%type<ival> factor

%start calculation

%%

calculation:
	   | calculation line
;

line: NEWLINE
    | exp NEWLINE { 
      cout << "\tResult: " << $1 << endl; 
    }
    | QUIT NEWLINE { cout << "bye!" << endl; exit(0); }
;

exp: 
  term	{ $$ = $1; }
  | exp PLUS term  { $$ = $1 + $3; }
  | exp MINUS term  { $$ = $1 - $3; }
;  

term: factor { $$ = $1; } 
  | term MULTIPLY factor { $$ = $1 * $3; }
  | term DIVIDE factor { $$ = $1 / $3; }
;

factor: INT  { $$ = $1; }
  | 
;

%%

int main() {
	yyparse();
	return 0;
}

void yyerror(const char* s) {
	cout << endl << "Parse error: " << s << endl;
	exit(1);
}
