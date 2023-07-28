%{
#include <iostream>
#include <string>
using namespace std;
%}

%option noyywrap

%{
int yylval;
string yylval;
%}

%{
#define INTEGER 257
#define STRING  258
#define ID      259
#define SUM     260
#define AVERAGE 261
#define IF      262
#define LEFT    263
%}

%%
SUM             { return SUM; }
AVERAGE         { return AVERAGE; }
IF              { return IF; }
LEFT            { return LEFT; }
"[^"]+          { yylval = yytext; return STRING; }
[0-9]+          { yylval = atoi(yytext); return INTEGER; }
[\+\-\*/\(\)]   { return yytext[0]; }
[ \t\n]         { /* ignore whitespace */ }
.               { cerr << "Invalid token: " << yytext << endl; }
%%

int main(int argc, char** argv) {
    int token;
    while ((token = yylex())) {
        cout << "Token: " << token;
        cout << ", Value: " << yytext;
        cout << endl;
    }
    return 0;
}