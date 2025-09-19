const greeting: string = "Hello, GeeksforGeeks!";
console.log(greeting);

class Calculator {
    add = (a: number, b: number): number => a + b;
}

const calc = new Calculator();
console.log(calc.add(5, 3));

