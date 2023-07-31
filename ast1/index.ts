import { DfaState, Token } from '../token2';

enum ASTNodeType {
  Program = 'Program',
  IntLiteral = 'IntLiteral',
  Variable = 'Variable',
  AdditiveExpression = 'AdditiveExpression',
  MultiplicativeExpression = 'MultiplicativeExpression',
  IntDeclaration = 'IntDeclaration',
}

class TokenReader {
  tokens: Token[];
  pos = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  peek() {
    return this.tokens[this.pos];
  }

  read() {
    return this.tokens[this.pos++];
  }
}

class ASTNode {
  type: ASTNodeType;
  text?: string;
  children?: (ASTNode | null | undefined)[];

  constructor(type: ASTNodeType, text?: string) {
    this.type = type;
    this.text = text;
  }

  addChild(child?: ASTNode | null) {
    if (!this.children) this.children = [];
    this.children.push(child);
  }
}

export class AST {
  tokenReader: TokenReader;
  error: string[] = [];
  warn: string[] = [];

  constructor(tokens: Token[]) {
    this.tokenReader = new TokenReader(tokens);
  }

  build() {
    const root = new ASTNode(ASTNodeType.Program);
    root.addChild(this.expression(this.tokenReader));
    return root;
  }

  primary(tokenReader: TokenReader) {
    const peekToken = tokenReader.peek();
    if (peekToken) {
      if (peekToken.type === DfaState.Id) {
        const token = tokenReader.read();
        return new ASTNode(ASTNodeType.Variable, token.text);
      } else if (peekToken.type === DfaState.IntLiteral) {
        const token = tokenReader.read();
        return new ASTNode(ASTNodeType.IntLiteral, token.text);
      }
    }
    return null;
  }

  additive(tokenReader: TokenReader) {
    let child1 = this.multiplicative(tokenReader);

    if (child1) {
      while (true) {
        const peekToken = tokenReader.peek();
        if (peekToken && peekToken.type === DfaState.Plus) {
          const node = new ASTNode(ASTNodeType.AdditiveExpression);
          tokenReader.read();
          const child2 = this.multiplicative(tokenReader);

          if (child2) {
            node.addChild(child1);
            node.addChild(child2);
            child1 = node;
          } else {
            throw new Error('无法解析加法表达式!');
          }
        } else {
          break;
        }
      }
      return child1;
    }
    return null;
  }

  multiplicative(tokenReader: TokenReader) {
    let child1 = this.primary(tokenReader);
    if (child1) {
      while (true) {
        const peekToken = tokenReader.peek();
        if (peekToken && peekToken.type === DfaState.Star) {
          const node = new ASTNode(ASTNodeType.MultiplicativeExpression);
          tokenReader.read();
          const child2 = this.primary(tokenReader);
          if (child2) {
            node.addChild(child1);
            node.addChild(child2);
            child1 = node;
          } else {
            throw new Error('乘法表达式解析错误!');
          }
        } else {
          break;
        }
      }
      return child1;
    }
    return null;
  }

  expression(tokenReader: TokenReader) {
    const pos = tokenReader.pos;

    const addition = this.additive(tokenReader);

    if (addition) {
      let token = tokenReader.read();
      if (token && token.type === DfaState.SemiColon) {
        return addition;
      }
      throw new Error('缺少分号!');
    } else {
      tokenReader.pos = pos;
      return null;
    }
  }

  // IntDeclaration(tokenReader: TokenReader) {
  //   let peekToken = tokenReader.peek();
  //   if (peekToken && peekToken.type === DfaState.Int) {
  //     let token = tokenReader.read();
  //     peekToken = tokenReader.peek();
  //     if (peekToken && peekToken.type === DfaState.Id) {
  //       token = tokenReader.read();
  //       const variableChild = new ASTNode(ASTNodeType.Variable, token.text);
  //       peekToken = tokenReader.peek();
  //       if (peekToken && peekToken.type === DfaState.Assignment) {
  //         // const
  //       }
  //     }
  //   }
  // }
}
