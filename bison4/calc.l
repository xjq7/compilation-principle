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
from      {return FROM;}
where     {return WHERE;}
exit		  {return QUIT;}
and       {return AND;}
,         {return COMMA;}
=         {return ASSIGNMENT;}
\"[^\"\n]+\"      {yylval.strval = new string(yytext);return STRING;}
[a-zA-Z0-9_][a-zA-Z0-9]+ {{
  yylval.strval = new string(yytext);
  return ID;
}}
\n        {return NEWLINE;}
[ \t]	; // ignore all whitespace
%%
