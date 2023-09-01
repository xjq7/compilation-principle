import { DfaState, Token } from '../token2';

// 节点类型
enum ASTNodeType {
  Program = 'Program',
  IntLiteral = 'IntLiteral',
  Variable = 'Variable',
  AdditiveExpression = 'AdditiveExpression',
}

/**
 * 读取 Token 的 Reader 类
 *
 * @class TokenReader
 */
class TokenReader {
  tokens: Token[];
  pos = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  /**
   * 向前预读一个 Token
   *
   * @return {*}
   * @memberof TokenReader
   */
  peek() {
    return this.tokens[this.pos];
  }

  /**
   * 消耗一个 Token
   *
   * @return {*}
   * @memberof TokenReader
   */
  read() {
    return this.tokens[this.pos++];
  }
}

/**
 * 节点类, 每个节点拥有类型，跟子节点，子节点暂且为数组
 * text 为节点值的存放
 *
 * @class ASTNode
 */
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
    root.addChild(this.additive(this.tokenReader));
    return root;
  }

  /**
   * 原子节点处理
   *
   * @param {TokenReader} tokenReader
   * @return {*}
   * @memberof AST
   */
  primary(tokenReader: TokenReader) {
    const peekToken = tokenReader.peek();
    if (peekToken) {
      if (peekToken.type === DfaState.IntLiteral) {
        const token = tokenReader.read();
        return new ASTNode(ASTNodeType.IntLiteral, token.text);
      }
    }
    return null;
  }

  /**
   * 加法表达式处理
   *
   * @param {TokenReader} tokenReader
   * @return {*}
   * @memberof AST
   */
  additive(tokenReader: TokenReader): any {
    let left = this.primary(tokenReader);

    let root: ASTNode | null = left;
    if (left) {
      const peekToken = tokenReader.peek();
      if (peekToken && peekToken.type === DfaState.Plus) {
        const node = new ASTNode(ASTNodeType.AdditiveExpression);
        tokenReader.read();
        const right = this.additive(tokenReader);

        if (right) {
          node.addChild(left);
          node.addChild(right);
          root = node;
        } else {
          throw new Error('无法解析加法表达式!');
        }
      }
    }
    return root;
  }
}
