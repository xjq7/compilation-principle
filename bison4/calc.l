%option noyywrap

%{
#include <iostream>
#include <string>
#include "calc.tab.hpp" // 包含生成的 bison 头文件
using namespace std;
#define YY_DECL int yylex()
%}

%%
select    {return SELECT;}
exit		  {return QUIT;}
,         {return COMMA;}
from      {return FROM;}
where     {return WHERE;}
and       {return AND;}
=         {return ASSIGNMENT;}
\"[^\"\n]+\"      {yylval.strval = new string(yytext);return STRING;}
[a-zA-Z0-9_][a-zA-Z0-9]+ {{
  yylval.strval = new string(yytext);
  return ID;
}}
\n        {return NEWLINE;}
[ \t]	; // ignore all whitespace
%%
