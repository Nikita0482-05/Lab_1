let a = Math.floor(Math.random() * 20) + 1;
console.log(`a = ${a}`);
function manyChecks() {
     return (a > 10 ? 'a is bigger than 10 ' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case ' : '')) + (a === 15 ? 'but a is not 15 ' : '') + (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5') + (a % 2 ? ' and a is odd' : ' and a is even ');
}
console.log("Результат с использованием тернарного оператора:");
console.log(manyChecks());
function string1() {
     let str = '';
     if (a > 10) {
          str += 'a is bigger than 10 ';
     }
     else {
          str += 'a is less than or equal to 10 ';
     };
     if (a === 5) {
          str += 'an example of a special case ';
     }
     else {
        str += '';
     }
     if (a === 15) {
          str += 'but a is not 15 ';
     }
     else {
        str += '';
     }
     if (a > 5) {
          str += 'and a is greater than 5';
     }
     else {
          str += 'and a is less than or equal to 5';
     };
     if (a % 2) {
          str += ' and a is odd';
     }
     else {
          str += ' and a is even ';
     };
     return str;
}
console.log("Результат с использованием 'if...else':");
console.log(string1());
function string2() {
    let str2 = '';
     switch (true) {
          case a > 10 && a > 5 && a !== 15 && a % 2 == 1:
               str2 = 'a is bigger than 10 and a is greater than 5 and a is odd';
               break;
          case a > 10 && a > 5 && a !== 15 && a % 2 == 0:
               str2 = 'a is bigger than 10 and a is greater than 5 and a is even';
               break;
          case a === 15:
               str2 = 'a is bigger than 10 but a is not 15 and a is greater than 5 and a is odd';
               break;
          case a <= 10 && a > 5 && a % 2 == 1:
               str2 = 'a is less than or equal to 10 and a is greater than 5 and a is odd';
               break;
          case a <= 10 && a > 5 && a % 2 == 0:
               str2 = 'a is less than or equal to 10 and a is greater than 5 and a is even';
               break;
          case a <= 10 && a < 5 && a % 2 == 1:
               str2 = 'a is less than or equal to 10 and a is less than or equal to 5 and a is odd';
               break;
          case a <= 10 && a < 5 && a % 2 == 0:
               str2 = 'a is less than or equal to 10 and a is less than or equal to 5 and a is even';
               break;
          case a === 5:
               str2 = 'a is less than or equal to 10 an example of a special case and a is less than or equal to 5 and a is odd';
               break;
     }
     return str2;
}
console.log("Результат с использованием 'switch()':");
console.log(string2());