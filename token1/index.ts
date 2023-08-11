// 状态机状态定义, 过度状态不是最终状态，自动生成数字
enum DfaState {
  Initial,
  Int1,
  Int2,

  Assignment = 'Assignment',

  SemiColon = 'SemiColon',
  IntLiteral = 'IntLiteral',
  Id = 'Id',
  Int = 'Int',
}

class Token {
  // token 附加字段，比如 IntLiteral 需要额外存储数据
  text?: string;
  // 状态类别，对应状态机中的终结状态
  type: DfaState;

  constructor(type: DfaState, text?: string) {
    if (text) this.text = text;
    this.type = type;
  }
}

function isAlpha(ch: string) {
  return /[a-z]/i.test(ch);
}

function isNumber(ch: string) {
  return /\d/.test(ch);
}

function isBlank(ch: string) {
  return /\s|\n/.test(ch);
}

export function tokenize(str: string) {
  let state: DfaState = DfaState.Initial;

  const tokens: Token[] = [];

  // 临时变量， 用于存储一些字面量字符
  let text = '';

  // 每次解析完一个 token 后需要重置 状态 跟临时变量
  const push = function (...items: Token[]) {
    text = '';
    state = DfaState.Initial;
    return tokens.push(...items);
  };

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    switch (state) {
      // 初始状态
      case DfaState.Initial:
        if (isAlpha(ch)) {
          if (ch === 'i') {
            state = DfaState.Int1;
          } else {
            state = DfaState.Id;
          }
          text += ch;
        } else if (isNumber(ch)) {
          text += ch;
          state = DfaState.IntLiteral;
        } else if (ch === '=') {
          push(new Token(DfaState.Assignment));
        }
        break;
      case DfaState.Int1:
        if (ch === 'n') {
          state = DfaState.Int2;
        } else {
          state = DfaState.Id;
        }
        text += ch;
        break;
      case DfaState.Int2:
        if (ch === 't') {
          push(new Token(DfaState.Int));
        } else {
          state = DfaState.Id;
          text += ch;
        }
      case DfaState.Id:
        if (ch === ';') {
          push(new Token(DfaState.Id, text));
          push(new Token(DfaState.SemiColon));
        } else if (isBlank(ch)) {
          push(new Token(DfaState.Id, text));
        }
        break;
      case DfaState.IntLiteral:
        if (isBlank(ch) || ch === ';') {
          push(new Token(DfaState.IntLiteral, text));
        } else {
          text += ch;
        }
        break;
      default:
    }
  }
  return tokens;
}
