%{

#include "sql.hpp"
#include <iostream>
#include <cstdlib>
#include <string>
#include <vector>

using namespace std;

extern int yylex();
extern int yyparse();

void yyerror(const char* s);

%}

%code requires {
  #include "sql.hpp"
}

%union {
  std::string *strval;
  std::vector<std::string>* strs;
  std::vector<Cond*>* conds;
  Cond* cond;
  int ival;
}

%token SELECT FROM WHERE ID AND COMMA ASSIGNMENT
%token STRING
%token NEWLINE QUIT 
 
%type <strval> query table column ID  
%type <strval> factor STRING
%type <strs> columns
%type <conds> condition_expr conditions
%type <cond> condition

%start calculation

%%

calculation: 
	   | calculation line
;

line: NEWLINE
    | query NEWLINE { }
    | QUIT NEWLINE { cout << "bye!" << endl; exit(0); }
;

query: SELECT columns FROM table conditions {
  cout << "table:" << endl;
  cout << "\t" << *$4 << endl;
  cout << "columns:" << endl;
  for(string col:*$2){
    cout << "\t" << col << endl; 
  }
  cout << "conditions:" << endl;
  for(Cond *cond:*$5){
    cout << "\tattr: " << (*cond).attr << endl;
    cout << "\tvalue: " << (*cond).value << endl;
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

conditions:   { $$ = nullptr; }
  | WHERE condition_expr { $$ = $2; }
;

condition_expr: condition { $$ = new vector<Cond*>(); $$->push_back($1); }
  | condition_expr AND condition {  ($1)->push_back($3); }
;

condition: ID ASSIGNMENT factor { 
  Cond *cond = new Cond(); 
  cond->attr = *$1;
  cond->value = *$3;
  $$ = cond; 
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
