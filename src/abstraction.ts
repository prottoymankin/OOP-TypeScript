//* Abstract class Child class-এর জন্য একটি contract তৈরি করে দেয়, যেখানে কোন কোন method থাকতে হবে তা define করা থাকে।

//* আমি তোমাকে বলে দিলাম, তোমার মধ্যে কী কী method থাকতে হবে। Implementation কীভাবে করবে, সেটা আমার কাজ না—তুমি গিয়ে তোমার মতো করে করো!

abstract class Employee {

  constructor(
    public name: string,
    protected _baseSalary: number
  ) {};

  get baseSalary(): number {
    return this._baseSalary
  };

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error('Salary cannot be a negative number.');
    }

    this._baseSalary = newSalary;
  };

  //* Abstract method-এ শুধু contract define করা যায়, implementation করা যায় না। Child class-কে method-টি implement করতে হয়।
  abstract calculatePay(): number;

  logMessage(designation: string): void {
    console.log(`Hello, ${this.name}. You are a ${designation}. You earns ${this.baseSalary} Taka.`);
  };

};

//* Abstract class থেকে সরাসরি instance তৈরি করা যায় না; 
// const employee = new Employee('Alice', 10000);

class Manager extends Employee {
  calculatePay() {
    return this.baseSalary + 5000;
  };
};

class Developer extends Employee {
  calculatePay() {
    return this.baseSalary + 3000;
  };
};

//* Abstract class কে inherit করে child class-এর instance তৈরি করতে হয়।
const manager = new Manager('Alice', 30000);
const developer = new Developer('Bob', 25000);

console.log(manager.calculatePay());
console.log(developer.calculatePay());
manager.logMessage('Manager');
developer.logMessage('Full-Stack Developer');