Tern1
let a = Math.floor(Math.random() * 100);
console.log("Исходное число:");  
console.log(a);
console.log("Результат с использованием тернарного оператора:");
console.log((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7));  
console.log("Результат с использованием 'if...else':");  
if (a > 10) {  
    if (a > 5) {  
        console.log((2 * a) + 1);  
    } else {  
        if (a < 3) {  
            if (a % 2 == 0) {  // Здесь условие 1 > 4 убрано, так как оно всегда ложно
                console.log(6);  
            } else {  
                console.log(7);  
            }
        } else {  
            if (2 * (a - 2) > 4) {  
                console.log(5);  
            } else {  
                if (a % 2 == 0) {  
                    console.log(6);  
                } else {  
                    console.log(7);  
                }  
            }  
        }  
    }  
} else {  
    if (a * 2 > 5) {  
        console.log((2 * a) + 1);  
    } else {  
        if (a < 3) {  
            if (a % 2 == 0) {  // Условие 1 > 4 здесь убрано
                console.log(6);  
            } else {  
                console.log(7);  
            }  
        } else {  
            if (2 * (a - 2) > 4) {  
                console.log(5);  
            } else {  
                if (a % 2 == 0) {  
                    console.log(6);  
                } else {  
                    console.log(7);  
                }  
            }  
        }  
    }  
}    
console.log("Результат с использованием 'switch()':");  
switch (true) {  
    case (a > 10 && a > 5):  
        console.log((2 * a) + 1);  
        break;  
    case (a > 10 && a <= 5):  
        if (a < 3) {  
            console.log(a % 2 == 0 ? 6 : 7);   
        } else {  
            if (2 * (a - 2) > 4) {  
                console.log(5);  
            } else {  
                console.log(a % 2 == 0 ? 6 : 7);  
            }  
        }  
        break;  
    case (a <= 10 && a * 2 > 5):  
        console.log((2 * a) + 1);  
        break;  
    case (a <= 10 && a * 2 <= 5):  
        if (a < 3) {  
            console.log(a % 2 == 0 ? 6 : 7);  
        } else {  
            if (2 * (a - 2) > 4) {  
                console.log(5);  
            } else {  
                console.log(a % 2 == 0 ? 6 : 7);  
            }
        }
}