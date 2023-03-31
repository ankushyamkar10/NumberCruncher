// constants and variables
var screenMaterial = $('.screen');
var answermaterial = $('.answer');

var answer = '';
var content;
var A = '';
var B = '';
var input = '';
var operator = '';

function aC() {
  content = '';
  input = '';
  answer = '';
  A = '';
  B = '';
  operator = '';
}

function back() {
  input = input.slice(0, -1);
  content = '';
  B = B.slice(0, -1);
}

function oPERATOR() {
  A = input;
  operator = content;
}

function equals() {
  if (A === '') A = 0;
  if (B == '') B = 0;
  switch (operator) {
    case '+':
      console.log(A, B);
      answer = parseFloat(A) + parseFloat(B);

      break;
    case '-':
      answer = parseFloat(A) - parseFloat(B);

      break;
    case '*':
      answer = parseFloat(A) * parseFloat(B);

      break;
    case '/':
      answer = parseFloat(A) / parseFloat(B);

      break;
    case '%':
      answer = parseFloat(A) % parseFloat(B);

      break;
  }
}

function screen() {
  content = this.innerHTML;

  if (content === '=') {
    equals();
  } else {
    if (content === 'AC') {
      aC();
    } else if (
      content === '-' ||
      content === '+' ||
      content === '*' ||
      content === '/' ||
      content === '%'
    ) {
      oPERATOR();
    } else if (operator) {
      if (content === 'BACK') {
        back();
      }
      B += content;
    }

    console.log(A);
    console.log(B);
    console.log(content);
    input += content;
  }
  screenMaterial.text(input);
  answermaterial.text(answer);
}

$('.button').click(screen);
