enum DfaState {
  Initial,
  Int1,
  Int2,
  String1,
  String2,
  String3,
  String4,
  String5,
  StringLiteral1,

  Assignment = 'Assignment',

  Plus = 'Plus',
  Star = 'Star',

  SemiColon = 'SemiColon',
  IntLiteral = 'IntLiteral',
  Id = 'Id',
  Int = 'Int',
  String = 'String',
  StringLiteral = 'StringLiteral',
}

class Token {
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

function isBlank(ch: string) {
  return /\s|\n/.test(ch);
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
          } else if (ch === 's') {
            state = DfaState.String1;
          } else {
            state = DfaState.Id;
          }
          text += ch;
        } else if (isNumber(ch)) {
          text += ch;
          push(new Token(DfaState.IntLiteral, text));
        } else if (ch === '=') {
          push(new Token(DfaState.Assignment));
        } else if (ch === '+') {
          push(new Token(DfaState.Plus));
        } else if (ch === '*') {
          push(new Token(DfaState.Star));
        } else if (ch === '"') {
          state = DfaState.StringLiteral1;
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
      default:
    }
  }
  return tokens;
}
