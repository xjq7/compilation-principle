import { Token } from '../token';

enum ASTNodeType {
  IntLiteral = 'IntLiteral',
  Variable = 'Variable',
  AdditiveExpression = 'AdditiveExpression',
}

class TokenReader {
  tokens: Token[];

  peek() {}

  read() {}
}

class ASTNode {
  type: ASTNodeType;
  text: string;
  children: ASTNode[];

  constructor(type: ASTNodeType, text: string) {
    this.type = type;
    this.text = text;
    this.children = [];
  }
}
