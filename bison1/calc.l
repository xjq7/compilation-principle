%option noyywrap

%{
#include <iostream>
#include "calc.tab.hpp" // 包含生成的 bison 头文件
#define YY_DECL int yylex()
%}

%%

[ \t]	; // ignore all whitespace
[0-9]+		{yylval.ival = atoi(yytext); return T_INT;}
\n		{return T_NEWLINE;}
"+"		{return T_PLUS;}
"-"		{return T_MINUS;}
"*"		{return T_MULTIPLY;}
"/"		{return T_DIVIDE;}
"("		{return T_LEFT;}
")"		{return T_RIGHT;}
"exit"		{return T_QUIT;}
"quit"		{return T_QUIT;}

%%
