import { Stack } from '../Stack';

/**
 * Converts a decimal number to binary.
 * @param {number} decimalNumber
 * @returns {string}
 */
export function decimalToBinary(decimalNumber) {
  const stack = new Stack();
  let number = decimalNumber;
  let binaryString = '';

  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString || '0';
}

/**
 * Converts a decimal number to any base.
 * @param {number} dec
 * @param {number} base
 * @returns {string}
 */
export function convertDecimalToBase(dec, base) {
  const stack = new Stack();
  let number = dec;
  let ret = '';
  const digits = '0123456789ABCDEF';

  while (number > 0) {
    stack.push(number % base);
    number = Math.floor(number / base);
  }

  while (!stack.isEmpty()) {
    ret += digits[stack.pop()];
  }

  return ret || '0';
}

/**
 * Checks if parentheses are balanced
 * @param {string} s
 * @returns {boolean}
 */
export function match(s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    switch (c) {
      case ')':
        if (stack.pop() === '(') {
          break;
        } else {
          return false;
        }
      case ']':
        if (stack.pop() === '[') {
          break;
        } else {
          return false;
        }
      case '}':
        if (stack.pop() === '{') {
          break;
        } else {
          return false;
        }
      case '(':
      case '[':
      case '{':
        stack.push(c);
        break;
    }
  }
  return stack.isEmpty();
}

/**
 * Evaluates the value of an expression
 * @param {string} expression
 * @returns {number}
 */
export function evaluate(expression) {
  const OPND_stack = new Stack();
  const OPTR_stack = new Stack();
  // 遍歷這個表達式
  for (let i = 0; i < expression.length; i++) {
    let c = expression.charAt(i);
    // 如果是數字，也就是操作數
    if (isDigit(c) || c == '.') {
      let stringBuilder = '';
      // 操作數的拼接，包含小數點
      while (i < expression.length && (isDigit((c = expression.charAt(i))) || c == '.')) {
        stringBuilder += c;
        i++;
      }
      // 操作數 push 到 OPND_stack
      OPND_stack.push(Number(stringBuilder));
      // 跳過本次迴圈，i 的值已經增加過，所以要減回來
      i--;
      continue;
    } else {
      // 如果是運算符
      outer: while (!OPTR_stack.isEmpty()) {
        switch (precede(OPTR_stack.top(), c)) {
          case '<':
            // 如果 OPTR_stack 的 top 運算符小於 c，那麼 c 直接入 OPTR_stack
            OPTR_stack.push(c);
            break outer;
          case '=':
            // 如果 OPTR_stack 的 top 運算符等於 c，那麼只有一種情況，左右括號相遇，直接 pop 出 "("
            OPTR_stack.pop();
            break outer;
          case '>':
            // 如果 OPTR_stack 的 top 運算符大於 c
            const operator = OPTR_stack.pop();
            // 如果有多餘的運算符卻沒有操作數可以計算，那麼這個表達式是錯誤的
            try {
              const opnd2 = OPND_stack.pop();
              const opnd1 = OPND_stack.pop();
              const result = operate(opnd1, operator, opnd2);
              OPND_stack.push(result);
            } catch {
              console.log('表達式錯誤!');
              return;
            }
            break;
        }
      }
      // 如果 OPTR_stack 是空的，那麼直接 push c
      if (OPTR_stack.isEmpty()) {
        OPTR_stack.push(c);
      }
    }
  }
  while (!OPTR_stack.isEmpty()) {
    const operator = OPTR_stack.pop();
    // 如果有多餘的運算符卻沒有操作數可以計算，那麼這個表達式是錯誤的
    try {
      const opnd2 = OPND_stack.pop();
      const opnd1 = OPND_stack.pop();
      const result = operate(opnd1, operator, opnd2);
      OPND_stack.push(result);
    } catch {
      console.log('表達式錯誤!');
      return;
    }
  }
  if (OPND_stack.size() === 1) {
    return OPND_stack.pop();
  } else {
    console.log('表達式錯誤!');
    return;
  }
}

const isDigit = (c) => /[0-9]/.test(c);

// 比較兩個運算符的優先級大小
const precede = (θ1, θ2) => {
  if (θ1 == '+' || θ1 == '-') {
    if (θ2 == '+' || θ2 == '-' || θ2 == ')') {
      return '>';
    } else {
      return '<';
    }
  } else if (θ1 == '*' || θ1 == '/') {
    if (θ2 == '(') {
      return '<';
    } else {
      return '>';
    }
  } else if (θ1 == '(') {
    if (θ2 == ')') {
      return '=';
    } else {
      return '<';
    }
  } else if (θ1 == ')') {
    return '>';
  }
  return '>';
};

// 執行運算
const operate = (opnd1, optr, opnd2) => {
  switch (optr) {
    case '+':
      return opnd1 + opnd2;
    case '-':
      return opnd1 - opnd2;
    case '*':
      return opnd1 * opnd2;
    case '/':
      return opnd1 / opnd2;
  }
  return 0;
};
