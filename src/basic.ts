//* OOP (Object-Oriented Programming) হলো একটি Programming Paradigm
//* Programming Paradigm হলো Programming করার একটি পদ্ধতি বা Approach, যা নির্ধারণ করে আমরা কীভাবে Program Design ও Structure করব
//* OOP-তে Class এবং Object ব্যবহার করে Programming করা হয়
//* Class হলো Object তৈরির একটি Blueprint এবং Object হলো সেই Class-এর Instance

//* OOP-এর ৪টি মূল Pillar:
//* 1. Encapsulation
//* 2. Inheritance
//* 3. Polymorphism
//* 4. Abstraction

//* Constructor হলো Class-এর একটি Special Method,
//* যা Object তৈরি হওয়ার সময় Automatically Call হয়।
//* এর কাজ হলো Object-এর Properties Initialize করা
//* এবং তাদের Initial Values Assign করা।

class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  };
};

const employee_1 = new Employee('Alice', 30000);

const employee_2 = new Employee('Bob', 20000); 

console.log(employee_1);
console.log(employee_2);