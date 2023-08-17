%{

#include <iostream>
#include <cstdlib>
#include <string>
#include <vector>
using namespace std;

extern int yylex();
extern int yyparse();

void yyerror(const char* s);

string table;
vector<string> cols;

%}

%union {
  std::string *strval;
  int ival;
}

%token SELECT FROM ID
%token NEWLINE QUIT 
 
%type <strval> query table column columns ID

%start calculation

%%

calculation: 
	   | calculation line
;

line: NEWLINE
    | query NEWLINE {
      cout << "table:" << endl << table << endl;
      cout << "columns:" << endl;
      for(string col:cols){
        cout << col << endl; 
      }
      cols.clear();
    }
    | QUIT NEWLINE { cout << "bye!" << endl; exit(0); }
;

query: SELECT columns FROM table {}
;

table: ID { table = *$1;  }
;

columns: column
  | columns ',' column 
  | '*'
;

column: ID { cols.push_back(*$1); delete $1; }
;

conditions:   { $$ = nullptr; }
  | WHERE condition_expr { $$ = $2; }
;

condition_expr: condition
  | condition_expr AND condition
;

condition: ID '=' factor { 
    Cond *cond = new Cond(); 
    cond->attr = *$1;
    cond->value = *$3;
    conds.push_back(cond);
    delete $1;
    delete $3; 
  }
;

factor: STRING { $$ = $1; }
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
