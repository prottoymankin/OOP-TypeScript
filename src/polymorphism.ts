//* Polymorphism হলো একই method-এর মাধ্যমে বিভিন্ন class-এ ভিন্ন ভিন্ন behavior পাওয়া।

class Employee {

  constructor(
    public name: string,
    protected _baseSalary: number
  ) {};

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error('Salary cannot be a negative number.');
    }

    this._baseSalary = newSalary;
  };

  get baseSalary(): number {
    return this._baseSalary;
  };

  calculatePay(taxRate: number): number {
    return this.baseSalary - this.baseSalary * taxRate;
  };

};

//* Child class-এ constructor না থাকলে automatically parent class-এর constructor ব্যবহার হয়।
class Manager extends Employee {
  //* Polymorphism ব্যবহার করে একই calculatePay() method-এর ভিন্ন behavior implement করা হয়েছে।
  //* Parent class-এর method override করতে override keyword ব্যবহার করা যায়।
  //* TypeScript-এ override keyword ব্যবহার করা যায়, তবে এটি বাধ্যতামূলক নয়।
  //* তবে tsconfig.json-এ noImplicitOverride: true থাকলে override keyword ব্যবহার করতে হয়।
  //* Overridden method-এর return type এবং parameters parent method-এর সাথে compatible হতে হবে।
  override calculatePay(): number {
    return this.baseSalary + 5000;
  };
};

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    type: string
  ) {
    super(name, _baseSalary)
  };

  override calculatePay(taxRate: number): number {
    return this.baseSalary + 3000 - this.baseSalary * taxRate;
  }
};

const employee = new Employee('Alice', 30000);
const manager = new Manager('Bob', 35000);
const developer = new Developer('Charlie', 20000, 'Full-Stack');

console.log(employee.calculatePay(0.1));
console.log(manager.calculatePay());
console.log(developer.calculatePay(0.1));