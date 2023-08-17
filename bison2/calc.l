%option noyywrap

%{
#include <iostream>
#include "calc.tab.hpp" // 包含生成的 bison 头文件
#define YY_DECL int yylex()
%}

%%

[ \t]	; // ignore all whitespace
[0-9]+		{yylval.ival = atoi(yytext); return INT;}
\n		{return NEWLINE;}
"+"		{return PLUS;}
"-"		{return MINUS;}
"*"		{return MULTIPLY;}
"/"		{return DIVIDE;}
"exit"		{return QUIT;}

%%
