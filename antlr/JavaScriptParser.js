// Generated from antlr/JavaScript.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptListener from './JavaScriptListener.js';
const serializedATN = [4,1,31,177,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,5,0,38,8,0,10,0,12,
0,41,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,2,1,2,3,2,
57,8,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,71,8,4,1,5,1,
5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,84,8,6,1,6,3,6,87,8,6,1,6,1,6,
3,6,91,8,6,1,6,1,6,1,6,1,7,1,7,5,7,98,8,7,10,7,12,7,101,9,7,1,7,1,7,1,8,
1,8,1,9,1,9,1,9,3,9,110,8,9,1,10,1,10,1,10,5,10,115,8,10,10,10,12,10,118,
9,10,1,11,1,11,1,11,5,11,123,8,11,10,11,12,11,126,9,11,1,12,1,12,1,12,5,
12,131,8,12,10,12,12,12,134,9,12,1,13,1,13,1,13,5,13,139,8,13,10,13,12,13,
142,9,13,1,14,1,14,1,14,5,14,147,8,14,10,14,12,14,150,9,14,1,15,1,15,1,15,
5,15,155,8,15,10,15,12,15,158,9,15,1,16,1,16,1,16,3,16,163,8,16,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,175,8,17,1,17,0,0,18,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,5,1,0,8,9,1,0,10,13,1,0,14,
15,1,0,16,17,2,0,14,15,18,18,186,0,39,1,0,0,0,2,50,1,0,0,0,4,52,1,0,0,0,
6,60,1,0,0,0,8,63,1,0,0,0,10,72,1,0,0,0,12,78,1,0,0,0,14,95,1,0,0,0,16,104,
1,0,0,0,18,106,1,0,0,0,20,111,1,0,0,0,22,119,1,0,0,0,24,127,1,0,0,0,26,135,
1,0,0,0,28,143,1,0,0,0,30,151,1,0,0,0,32,162,1,0,0,0,34,174,1,0,0,0,36,38,
3,2,1,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,
0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,1,1,0,0,0,44,51,3,4,2,0,45,51,3,6,3,
0,46,51,3,8,4,0,47,51,3,10,5,0,48,51,3,12,6,0,49,51,3,14,7,0,50,44,1,0,0,
0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,
51,3,1,0,0,0,52,53,5,1,0,0,53,56,5,30,0,0,54,55,5,23,0,0,55,57,3,16,8,0,
56,54,1,0,0,0,56,57,1,0,0,0,57,58,1,0,0,0,58,59,5,24,0,0,59,5,1,0,0,0,60,
61,3,16,8,0,61,62,5,24,0,0,62,7,1,0,0,0,63,64,5,2,0,0,64,65,5,19,0,0,65,
66,3,16,8,0,66,67,5,20,0,0,67,70,3,2,1,0,68,69,5,3,0,0,69,71,3,2,1,0,70,
68,1,0,0,0,70,71,1,0,0,0,71,9,1,0,0,0,72,73,5,4,0,0,73,74,5,19,0,0,74,75,
3,16,8,0,75,76,5,20,0,0,76,77,3,2,1,0,77,11,1,0,0,0,78,79,5,5,0,0,79,83,
5,19,0,0,80,84,3,4,2,0,81,84,3,6,3,0,82,84,5,24,0,0,83,80,1,0,0,0,83,81,
1,0,0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,87,3,16,8,0,86,85,1,
0,0,0,86,87,1,0,0,0,87,88,1,0,0,0,88,90,5,24,0,0,89,91,3,16,8,0,90,89,1,
0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,20,0,0,93,94,3,2,1,0,94,13,1,0,
0,0,95,99,5,21,0,0,96,98,3,2,1,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,
0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,22,0,0,103,15,
1,0,0,0,104,105,3,18,9,0,105,17,1,0,0,0,106,109,3,20,10,0,107,108,5,23,0,
0,108,110,3,18,9,0,109,107,1,0,0,0,109,110,1,0,0,0,110,19,1,0,0,0,111,116,
3,22,11,0,112,113,5,6,0,0,113,115,3,22,11,0,114,112,1,0,0,0,115,118,1,0,
0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,21,1,0,0,0,118,116,1,0,0,0,119,124,
3,24,12,0,120,121,5,7,0,0,121,123,3,24,12,0,122,120,1,0,0,0,123,126,1,0,
0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,23,1,0,0,0,126,124,1,0,0,0,127,132,
3,26,13,0,128,129,7,0,0,0,129,131,3,26,13,0,130,128,1,0,0,0,131,134,1,0,
0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,25,1,0,0,0,134,132,1,0,0,0,135,140,
3,28,14,0,136,137,7,1,0,0,137,139,3,28,14,0,138,136,1,0,0,0,139,142,1,0,
0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,27,1,0,0,0,142,140,1,0,0,0,143,148,
3,30,15,0,144,145,7,2,0,0,145,147,3,30,15,0,146,144,1,0,0,0,147,150,1,0,
0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,29,1,0,0,0,150,148,1,0,0,0,151,156,
3,32,16,0,152,153,7,3,0,0,153,155,3,32,16,0,154,152,1,0,0,0,155,158,1,0,
0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,31,1,0,0,0,158,156,1,0,0,0,159,160,
7,4,0,0,160,163,3,32,16,0,161,163,3,34,17,0,162,159,1,0,0,0,162,161,1,0,
0,0,163,33,1,0,0,0,164,175,5,25,0,0,165,175,5,26,0,0,166,175,5,27,0,0,167,
175,5,28,0,0,168,175,5,29,0,0,169,175,5,30,0,0,170,171,5,19,0,0,171,172,
3,16,8,0,172,173,5,20,0,0,173,175,1,0,0,0,174,164,1,0,0,0,174,165,1,0,0,
0,174,166,1,0,0,0,174,167,1,0,0,0,174,168,1,0,0,0,174,169,1,0,0,0,174,170,
1,0,0,0,175,35,1,0,0,0,17,39,50,56,70,83,86,90,99,109,116,124,132,140,148,
156,162,174];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptParser extends antlr4.Parser {

    static grammarFileName = "JavaScript.g4";
    static literalNames = [ null, "'var'", "'if'", "'else'", "'while'", 
                            "'for'", "'||'", "'&&'", "'=='", "'!='", "'<'", 
                            "'<='", "'>'", "'>='", "'+'", "'-'", "'*'", 
                            "'/'", "'!'", "'('", "')'", "'{'", "'}'", "'='", 
                            "';'", null, null, "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, "VAR", "IF", "ELSE", "WHILE", "FOR", 
                             "OR", "AND", "EQ", "NEQ", "LT", "LTE", "GT", 
                             "GTE", "PLUS", "MINUS", "MULT", "DIV", "NOT", 
                             "LPAREN", "RPAREN", "LBRACE", "RBRACE", "ASSIGN", 
                             "SEMICOLON", "NUMBER", "STRING", "TRUE", "FALSE", 
                             "NULL", "IDENTIFIER", "WS" ];
    static ruleNames = [ "program", "statement", "variableDeclaration", 
                         "expressionStatement", "ifStatement", "whileStatement", 
                         "forStatement", "block", "expression", "assignmentExpression", 
                         "logicalOrExpression", "logicalAndExpression", 
                         "equalityExpression", "relationalExpression", "additiveExpression", 
                         "multiplicativeExpression", "unaryExpression", 
                         "primaryExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptParser.ruleNames;
        this.literalNames = JavaScriptParser.literalNames;
        this.symbolicNames = JavaScriptParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2116862006) !== 0)) {
	            this.state = 36;
	            this.statement();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(JavaScriptParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavaScriptParser.RULE_statement);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.variableDeclaration();
	            break;
	        case 14:
	        case 15:
	        case 18:
	        case 19:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.expressionStatement();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.ifStatement();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.whileStatement();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.forStatement();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavaScriptParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(JavaScriptParser.VAR);
	        this.state = 53;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 54;
	            this.match(JavaScriptParser.ASSIGN);
	            this.state = 55;
	            this.expression();
	        }

	        this.state = 58;
	        this.match(JavaScriptParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavaScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.expression();
	        this.state = 61;
	        this.match(JavaScriptParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavaScriptParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(JavaScriptParser.IF);
	        this.state = 64;
	        this.match(JavaScriptParser.LPAREN);
	        this.state = 65;
	        this.expression();
	        this.state = 66;
	        this.match(JavaScriptParser.RPAREN);
	        this.state = 67;
	        this.statement();
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 68;
	            this.match(JavaScriptParser.ELSE);
	            this.state = 69;
	            this.statement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(JavaScriptParser.WHILE);
	        this.state = 73;
	        this.match(JavaScriptParser.LPAREN);
	        this.state = 74;
	        this.expression();
	        this.state = 75;
	        this.match(JavaScriptParser.RPAREN);
	        this.state = 76;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaScriptParser.RULE_forStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(JavaScriptParser.FOR);
	        this.state = 79;
	        this.match(JavaScriptParser.LPAREN);
	        this.state = 83;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 80;
	            this.variableDeclaration();

	        } else if(la_===2) {
	            this.state = 81;
	            this.expressionStatement();

	        } else if(la_===3) {
	            this.state = 82;
	            this.match(JavaScriptParser.SEMICOLON);

	        }
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2114764800) !== 0)) {
	            this.state = 85;
	            this.expression();
	        }

	        this.state = 88;
	        this.match(JavaScriptParser.SEMICOLON);
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 2114764800) !== 0)) {
	            this.state = 89;
	            this.expression();
	        }

	        this.state = 92;
	        this.match(JavaScriptParser.RPAREN);
	        this.state = 93;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavaScriptParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(JavaScriptParser.LBRACE);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2116862006) !== 0)) {
	            this.state = 96;
	            this.statement();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(JavaScriptParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavaScriptParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.assignmentExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentExpression() {
	    let localctx = new AssignmentExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JavaScriptParser.RULE_assignmentExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.logicalOrExpression();
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 107;
	            this.match(JavaScriptParser.ASSIGN);
	            this.state = 108;
	            this.assignmentExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalOrExpression() {
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavaScriptParser.RULE_logicalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.logicalAndExpression();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 112;
	            this.match(JavaScriptParser.OR);
	            this.state = 113;
	            this.logicalAndExpression();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JavaScriptParser.RULE_logicalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.equalityExpression();
	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 120;
	            this.match(JavaScriptParser.AND);
	            this.state = 121;
	            this.equalityExpression();
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JavaScriptParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.relationalExpression();
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8 || _la===9) {
	            this.state = 128;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 129;
	            this.relationalExpression();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JavaScriptParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.additiveExpression();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0)) {
	            this.state = 136;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 137;
	            this.additiveExpression();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JavaScriptParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143;
	        this.multiplicativeExpression();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 144;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 145;
	            this.multiplicativeExpression();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JavaScriptParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.unaryExpression();
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===17) {
	            this.state = 152;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 153;
	            this.unaryExpression();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JavaScriptParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 311296) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 160;
	            this.unaryExpression();
	            break;
	        case 19:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.primaryExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JavaScriptParser.RULE_primaryExpression);
	    try {
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.match(JavaScriptParser.NUMBER);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.match(JavaScriptParser.STRING);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.match(JavaScriptParser.TRUE);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.match(JavaScriptParser.FALSE);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 168;
	            this.match(JavaScriptParser.NULL);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 169;
	            this.match(JavaScriptParser.IDENTIFIER);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 170;
	            this.match(JavaScriptParser.LPAREN);
	            this.state = 171;
	            this.expression();
	            this.state = 172;
	            this.match(JavaScriptParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JavaScriptParser.EOF = antlr4.Token.EOF;
JavaScriptParser.VAR = 1;
JavaScriptParser.IF = 2;
JavaScriptParser.ELSE = 3;
JavaScriptParser.WHILE = 4;
JavaScriptParser.FOR = 5;
JavaScriptParser.OR = 6;
JavaScriptParser.AND = 7;
JavaScriptParser.EQ = 8;
JavaScriptParser.NEQ = 9;
JavaScriptParser.LT = 10;
JavaScriptParser.LTE = 11;
JavaScriptParser.GT = 12;
JavaScriptParser.GTE = 13;
JavaScriptParser.PLUS = 14;
JavaScriptParser.MINUS = 15;
JavaScriptParser.MULT = 16;
JavaScriptParser.DIV = 17;
JavaScriptParser.NOT = 18;
JavaScriptParser.LPAREN = 19;
JavaScriptParser.RPAREN = 20;
JavaScriptParser.LBRACE = 21;
JavaScriptParser.RBRACE = 22;
JavaScriptParser.ASSIGN = 23;
JavaScriptParser.SEMICOLON = 24;
JavaScriptParser.NUMBER = 25;
JavaScriptParser.STRING = 26;
JavaScriptParser.TRUE = 27;
JavaScriptParser.FALSE = 28;
JavaScriptParser.NULL = 29;
JavaScriptParser.IDENTIFIER = 30;
JavaScriptParser.WS = 31;

JavaScriptParser.RULE_program = 0;
JavaScriptParser.RULE_statement = 1;
JavaScriptParser.RULE_variableDeclaration = 2;
JavaScriptParser.RULE_expressionStatement = 3;
JavaScriptParser.RULE_ifStatement = 4;
JavaScriptParser.RULE_whileStatement = 5;
JavaScriptParser.RULE_forStatement = 6;
JavaScriptParser.RULE_block = 7;
JavaScriptParser.RULE_expression = 8;
JavaScriptParser.RULE_assignmentExpression = 9;
JavaScriptParser.RULE_logicalOrExpression = 10;
JavaScriptParser.RULE_logicalAndExpression = 11;
JavaScriptParser.RULE_equalityExpression = 12;
JavaScriptParser.RULE_relationalExpression = 13;
JavaScriptParser.RULE_additiveExpression = 14;
JavaScriptParser.RULE_multiplicativeExpression = 15;
JavaScriptParser.RULE_unaryExpression = 16;
JavaScriptParser.RULE_primaryExpression = 17;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(JavaScriptParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_variableDeclaration;
    }

	VAR() {
	    return this.getToken(JavaScriptParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	SEMICOLON() {
	    return this.getToken(JavaScriptParser.SEMICOLON, 0);
	};

	ASSIGN() {
	    return this.getToken(JavaScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(JavaScriptParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitExpressionStatement(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(JavaScriptParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(JavaScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JavaScriptParser.RPAREN, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(JavaScriptParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(JavaScriptParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(JavaScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JavaScriptParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(JavaScriptParser.FOR, 0);
	};

	LPAREN() {
	    return this.getToken(JavaScriptParser.LPAREN, 0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.SEMICOLON);
	    } else {
	        return this.getToken(JavaScriptParser.SEMICOLON, i);
	    }
	};


	RPAREN() {
	    return this.getToken(JavaScriptParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(JavaScriptParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(JavaScriptParser.RBRACE, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitBlock(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_expression;
    }

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitExpression(this);
		}
	}


}



class AssignmentExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_assignmentExpression;
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	ASSIGN() {
	    return this.getToken(JavaScriptParser.ASSIGN, 0);
	};

	assignmentExpression() {
	    return this.getTypedRuleContext(AssignmentExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterAssignmentExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitAssignmentExpression(this);
		}
	}


}



class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_logicalOrExpression;
    }

	logicalAndExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalAndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalAndExpressionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.OR);
	    } else {
	        return this.getToken(JavaScriptParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitLogicalOrExpression(this);
		}
	}


}



class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_logicalAndExpression;
    }

	equalityExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityExpressionContext);
	    } else {
	        return this.getTypedRuleContext(EqualityExpressionContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.AND);
	    } else {
	        return this.getToken(JavaScriptParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitLogicalAndExpression(this);
		}
	}


}



class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_equalityExpression;
    }

	relationalExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RelationalExpressionContext,i);
	    }
	};

	EQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.EQ);
	    } else {
	        return this.getToken(JavaScriptParser.EQ, i);
	    }
	};


	NEQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.NEQ);
	    } else {
	        return this.getToken(JavaScriptParser.NEQ, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitEqualityExpression(this);
		}
	}


}



class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_relationalExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	LT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.LT);
	    } else {
	        return this.getToken(JavaScriptParser.LT, i);
	    }
	};


	LTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.LTE);
	    } else {
	        return this.getToken(JavaScriptParser.LTE, i);
	    }
	};


	GT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.GT);
	    } else {
	        return this.getToken(JavaScriptParser.GT, i);
	    }
	};


	GTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.GTE);
	    } else {
	        return this.getToken(JavaScriptParser.GTE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitRelationalExpression(this);
		}
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.PLUS);
	    } else {
	        return this.getToken(JavaScriptParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.MINUS);
	    } else {
	        return this.getToken(JavaScriptParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_multiplicativeExpression;
    }

	unaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExpressionContext,i);
	    }
	};

	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.MULT);
	    } else {
	        return this.getToken(JavaScriptParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.DIV);
	    } else {
	        return this.getToken(JavaScriptParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}


}



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_unaryExpression;
    }

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(JavaScriptParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(JavaScriptParser.MINUS, 0);
	};

	NOT() {
	    return this.getToken(JavaScriptParser.NOT, 0);
	};

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitUnaryExpression(this);
		}
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_primaryExpression;
    }

	NUMBER() {
	    return this.getToken(JavaScriptParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(JavaScriptParser.STRING, 0);
	};

	TRUE() {
	    return this.getToken(JavaScriptParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(JavaScriptParser.FALSE, 0);
	};

	NULL() {
	    return this.getToken(JavaScriptParser.NULL, 0);
	};

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	LPAREN() {
	    return this.getToken(JavaScriptParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(JavaScriptParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JavaScriptListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}


}




JavaScriptParser.ProgramContext = ProgramContext; 
JavaScriptParser.StatementContext = StatementContext; 
JavaScriptParser.VariableDeclarationContext = VariableDeclarationContext; 
JavaScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
JavaScriptParser.IfStatementContext = IfStatementContext; 
JavaScriptParser.WhileStatementContext = WhileStatementContext; 
JavaScriptParser.ForStatementContext = ForStatementContext; 
JavaScriptParser.BlockContext = BlockContext; 
JavaScriptParser.ExpressionContext = ExpressionContext; 
JavaScriptParser.AssignmentExpressionContext = AssignmentExpressionContext; 
JavaScriptParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
JavaScriptParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
JavaScriptParser.EqualityExpressionContext = EqualityExpressionContext; 
JavaScriptParser.RelationalExpressionContext = RelationalExpressionContext; 
JavaScriptParser.AdditiveExpressionContext = AdditiveExpressionContext; 
JavaScriptParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
JavaScriptParser.UnaryExpressionContext = UnaryExpressionContext; 
JavaScriptParser.PrimaryExpressionContext = PrimaryExpressionContext; 
