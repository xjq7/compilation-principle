all: calc

calc.tab.cpp calc.tab.hpp:	calc.y
	bison -d -o calc.tab.cpp calc.y

lex.yy.cpp: calc.l calc.tab.hpp
	flex -o calc.lex.cpp calc.l

calc: lex.yy.cpp calc.tab.cpp calc.tab.hpp
	g++ -o calc calc.tab.cpp calc.lex.cpp 

clean:
	rm calc calc.tab.cpp calc.lex.cpp calc.tab.hpp calc.output
