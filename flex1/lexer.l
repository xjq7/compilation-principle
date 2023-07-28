%{
#include <iostream>
using namespace std;
%}

%option noyywrap

%{
int yylval;
%}

%{
#define INTEGER 257
%}

%%
[0-9]+          { yylval = atoi(yytext); return INTEGER; }
[\+\-\*/\(\)]   { return yytext[0]; }
[ \t\n]         { /* ignore whitespace */ }
.               { cerr << "Invalid token: " << yytext << endl; }
%%

int main(int argc, char** argv) {
    int token;
    while ((token = yylex())) {
        cout << "Token: " << token;
        if (token == INTEGER) {
            cout << ", Value: " << yylval;
        }
        cout << endl;
    }
    return 0;
}