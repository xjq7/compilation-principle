%{
#include <iostream>
#include <cstdlib>
#include <vector>
using namespace std;
extern int yylex();
extern int yyparse();

void yyerror(const char* s);
vector<int> v1;
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
  | expression T_PLUS term  { $$ = $1 + $3; v1.push_back($1); }
  | expression T_MINUS term { $$ = $1 - $3; cout << v1.size(); }
;
term: 
  factor  { $$ = $1; }
  | term T_MULTIPLY factor  { $$ = $1 * $3; }
  | term T_DIVIDE factor  { $$ = $1 / $3; }
;
factor: 
  T_INT  { $$ = $1; }
  | T_LEFT expression T_RIGHT { $$ = $2; }
;


%%

int main() {
	yyparse();
  for(int i=0;i<v1.size();i++){
    cout << v1[i] << endl;
  }
	return 0;
}

void yyerror(const char* s) {
	cout << endl << "Parse error: " << s << endl;
	exit(1);
}
