class Employee {
  constructor(
    public name: string,

    //* private Property বা Method Child Class থেকে Access করা যাবে না।
    // private _baseSalary: number

    protected _baseSalary: number
  ) {};

  get baseSalary() {
    return this._baseSalary;
  };

  get salaryWithBonus() {
    return this._baseSalary + this._baseSalary * .5;
  };

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("Salary can't be a negative number.");
    }

    this._baseSalary = newSalary;
  };

  describe(): string {
    return `${this.name} earns ${this._baseSalary} Taka`
  };
};

//* Inheritance হলো OOP-এর এমন একটি Mechanism, যার মাধ্যমে একটি Class অন্য একটি Class-এর Properties এবং Methods Inherit করে ব্যবহার করতে পারে

//* তবে সব Property বা Method Access করা যায় না। private Property বা Method Child Class থেকে Access করা যায় না, কিন্তু public এবং protected Property বা Method Access করা যায়।

//* কোনো Class-কে Inherit করতে চাইলে TypeScript-এ extends Keyword ব্যবহার করতে হয়।
class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamSize: number
  ) {
    //* super() ব্যবহার করে Child Class থেকে Parent Class-এর Constructor Call করা হয়, যাতে Parent Class-এর Properties initialize করা যায়।
    super(name, _baseSalary)
  };

  describeWork(): string {
    return `${this.name} manages ${this.teamSize} members.`;
  };

  describeManager(): string {
    //* Parent Class (Employee)-তে যদি _baseSalary Property Private থাকে,
    //* তাহলে Child Class (Manager) থেকেও সরাসরি এটি Access করা যাবে না।
    //* Parent Class (Employee)-তে যদি _baseSalary Property Protected থাকে,
    //* তাহলে Child Class (Manager) থেকেও সরাসরি এটি Access করা যাবে।
    return `${this.name} earns ${this._baseSalary} Taka`;
  };
};

const manager = new Manager('Bob', 23000, 20);

console.log(manager.describeWork());

//* describe() Method-টি Manager Class-এ Define করা নেই,
//* এটি Parent Class (Employee)-এ Define করা আছে।
//* Inheritance-এর কারণে Manager Class-এর Object দিয়ে
//* Parent Class-এর describe() Method Access করতে পারছি।
console.log(manager.describe());

//* Inheritance-এর মাধ্যমে Parent Class-এর সব public ও protected Method Access করতে পারব।
console.log(manager.name);
manager.baseSalary = 25000;
console.log(manager.salaryWithBonus);
console.log(manager.baseSalary);

console.log(manager.describeManager());