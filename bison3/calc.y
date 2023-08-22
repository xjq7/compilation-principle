%{

#include <iostream>
#include <cstdlib>
#include <string>
#include <vector>
using namespace std;

extern int yylex();
extern int yyparse();

void yyerror(const char* s);

%}

%union {
  std::string* strval;
  std::vector<std::string>* strs;
  int ival;
}

%token SELECT FROM ID COMMA
%token NEWLINE QUIT

%type <strval> table column ID
%type <strs> columns

%start calculation

%%

calculation: 
	   | calculation line
;

line: NEWLINE
    | query NEWLINE {  }
    | QUIT NEWLINE { cout << "bye!" << endl; exit(0); }
;

query: SELECT columns FROM table {
  cout << "table:" << endl;
  cout << "\t" << *$4 << endl;
  cout << "columns:" << endl;
  for(string col:*$2){
    cout << "\t" << col << endl; 
  }
}
;

table: ID { $$ = $1; }
;

columns: column { $$ = new vector<string>(); $$->push_back(*$1); delete $1; }
  | columns COMMA column { if($3!=nullptr){($1)->push_back(*$3);}; $$ = $1; delete $3;}
;

column: { $$ = nullptr; } 
  | ID { $$ = $1; }
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
