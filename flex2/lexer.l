%{
#include <iostream>
#include <string>
using namespace std;
%}

%option noyywrap

%{
int yylval;
string yylstr;
%}

%{
#define INTEGER 257
#define STRING  258
#define SUM     260
#define AVERAGE 261
#define IF      262
#define LEFT    263
#define COMMA   264
#define ID      265
%}

%%
SUM                     { return SUM; }
AVERAGE                 { return AVERAGE; }
IF                      { return IF; }
LEFT                    { return LEFT; }
,                       { return COMMA; }
[a-zA-Z_][a-zA-Z0-9_]*  { yylstr = yytext; return ID; }
\"[^\"\n]+\"            { yylstr = yytext; return STRING; }
[0-9]+                  { yylval = atoi(yytext); return INTEGER; }
[\+\-\*/\(\)]           { return yytext[0]; }
[ \t\n]                 { /* ignore whitespace */ }
.                       { cerr << "Invalid token: " << yytext << endl; }
%%

int main(int argc, char** argv) {
    int token;
    while ((token = yylex())) {
        switch(token){
          case IF:
          case LEFT:
          case SUM:
          case AVERAGE:
          case COMMA:
            cout << "Token: " << token;
            break;
          case INTEGER:
            cout << "Token: " << token;
            cout << ", Value: " << yylval;
            break;
          case STRING:
          case ID:
            cout << "Token: " << token;
            cout << ", Value: " << yylstr;
            break;

        }
        cout << endl;
    }
    return 0;
}