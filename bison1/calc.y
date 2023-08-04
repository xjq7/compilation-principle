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

%token<ival> T_INT
%token T_PLUS T_MINUS T_MULTIPLY T_DIVIDE T_LEFT T_RIGHT
%token T_NEWLINE T_QUIT
%left T_MULTIPLY T_DIVIDE
%left T_PLUS T_MINUS

%type<ival> expression
%type<ival> term
%type<ival> factor

%start calculation

%%

calculation:
	   | calculation line
;

line: T_NEWLINE
    | expression T_NEWLINE { 
      cout << "\tResult: " << $1 << endl; 
    }
    | T_QUIT T_NEWLINE { cout << "bye!" << endl; exit(0); }
;

expression: 
  term	{ $$ = $1; }
  | expression T_PLUS term  { $$ = $1 + $3; }
;
term: T_INT  { $$ = $1; }
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
