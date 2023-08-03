import { DfaState, Token } from '../token2';

enum ASTNodeType {
  Program = 'Program',
  IntLiteral = 'IntLiteral',
  Variable = 'Variable',
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
    root.addChild(this.IntDeclaration(this.tokenReader));
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

  IntDeclaration(tokenReader: TokenReader) {
    let peekToken = tokenReader.peek();
    if (peekToken && peekToken.type === DfaState.Int) {
      let token = tokenReader.read();
      peekToken = tokenReader.peek();
      if (peekToken && peekToken.type === DfaState.Id) {
        token = tokenReader.read();
        const variableChild = new ASTNode(ASTNodeType.Variable, token.text);
        peekToken = tokenReader.peek();
        if (peekToken && peekToken.type === DfaState.Assignment) {
          // const
        }
      }
    }
    return null;
  }
}
