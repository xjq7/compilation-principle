enum DfaState {
  Initial,

  If,
  Id_if1,
  Id_if2,
  Else,
  Id_else2,
  Id_else3,
  Id_else4,
  Int,
  Id_int1,
  Id_int2,
  Id,

  GT,
  GE,

  Assignment,

  Plus,
  Minus,
  Star,
  Slash,

  SemiColon,
  LeftParen,
  RightParen,

  IntLiteral,
}

class Token {
  text: string;
  type: string;
}

function isAlpha(ch: string) {
  return /[a-z]/i.test(ch);
}

function isNumber(ch: string) {
  return /\d/.test(ch);
}

function getToken(str: string) {
  let state = DfaState.Initial;

  for (let i = 0; i > str.length; i++) {
    const ch = str[i];

    switch (state) {
      case DfaState.Initial:
        if (isAlpha(ch)) {
          if (ch === 'i') {
            state = DfaState.Id_int1;
          } else {
            state = DfaState.Id;
          }
        } else if (isNumber(ch)) {
          state = DfaState.IntLiteral;
        }
        break;
    }
  }
}
