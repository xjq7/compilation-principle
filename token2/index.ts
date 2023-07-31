export enum DfaState {
  Initial,
  Int1,
  Int2,
  Bool1,
  Bool2,
  Bool3,

  IntLiteral1,

  Assignment = 'Assignment',

  Plus = 'Plus',
  Star = 'Star',

  GT = 'GT',
  GE = 'GE',

  SemiColon = 'SemiColon',
  IntLiteral = 'IntLiteral',
  Id = 'Id',
  Int = 'Int',
  Bool = 'Bool',
}

export class Token {
  text?: string;
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

function isShutDown(ch: string) {
  return /\s|\n|[;]/.test(ch);
}

function isIdentifier(ch: string) {
  return isAlpha(ch) || isNumber(ch);
}

export function tokenize(str: string) {
  let state: DfaState = DfaState.Initial;

  const tokens: Token[] = [];
  let text = '';

  const push = function (...items: Token[]) {
    text = '';
    state = DfaState.Initial;
    return tokens.push(...items);
  };

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    switch (state) {
      case DfaState.Initial:
        if (isAlpha(ch)) {
          if (ch === 'i') {
            state = DfaState.Int1;
          } else if (ch === 'b') {
            state = DfaState.Bool1;
          } else {
            state = DfaState.Id;
          }
          text += ch;
        } else if (isNumber(ch)) {
          text += ch;
          state = DfaState.IntLiteral1;
        } else if (ch === '=') {
          push(new Token(DfaState.Assignment));
        } else if (ch === '+') {
          push(new Token(DfaState.Plus));
        } else if (ch === '*') {
          push(new Token(DfaState.Star));
        } else if (ch === ';') {
          push(new Token(DfaState.SemiColon));
        }
        break;
      case DfaState.IntLiteral1:
        if (isShutDown(ch)) {
          push(new Token(DfaState.IntLiteral, text));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        }
        text += ch;
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
        break;
      case DfaState.Id:
        if (isShutDown(ch)) {
          push(new Token(DfaState.Id, text));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        } else if (isIdentifier(ch)) {
          text += ch;
        }

        break;
      case DfaState.Bool1:
        if (ch === 'o') {
          state = DfaState.Bool2;
          text += ch;
        } else if (isShutDown(ch)) {
          push(new Token(DfaState.Id, text));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        } else if (isIdentifier(ch)) {
          state = DfaState.Id;
        }
        break;
      case DfaState.Bool2:
        text += ch;
        if (ch === 'o') {
          state = DfaState.Bool3;
        } else if (isShutDown(ch)) {
          push(new Token(DfaState.Id, text));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        } else if (isIdentifier(ch)) {
          state = DfaState.Id;
        }
        break;
      case DfaState.Bool3:
        text += ch;
        if (ch === 'l') {
          state = DfaState.Bool;
        } else if (isShutDown(ch)) {
          push(new Token(DfaState.Id, text));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        } else if (isIdentifier(ch)) {
          state = DfaState.Id;
        }
        break;
      case DfaState.Bool:
        if (isShutDown(ch)) {
          push(new Token(DfaState.Bool));
          if (ch === ';') {
            push(new Token(DfaState.SemiColon));
          }
        } else if (isIdentifier(ch)) {
          text += ch;
          state = DfaState.Id;
        }
        break;
      default:
    }
  }
  return tokens;
}
