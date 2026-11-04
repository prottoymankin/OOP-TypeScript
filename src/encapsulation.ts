//* Encapsulation হলো Class-এর Properties এবং Methods-এর Access Control করা।
//* অর্থাৎ, কোন Property বা Method কোথা থেকে Access করা যাবে
//* এবং কোথা থেকে Access করা যাবে না, তা নির্ধারণ করা।

//* Access Modifier ব্যবহার করে Class-এর Properties এবং Methods-এর Access Control করা যায়।
//* TypeScript-এ ৩ ধরনের Access Modifier রয়েছে:
//* 1. public 2. private 3. protected

//* public → যেকোনো জায়গা থেকে Access করা যায়।
//* private → শুধু নিজের Class-এর ভিতরে Access করা যায়।
//* protected → নিজের Class এবং Child Class থেকে Access করা যায়।

//* Traditional Class Syntax (Traditional Way বা Explicit Property Declaration)
class Employee {
  public name: string;
  private _baseSalary: number;
  // public readonly baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this._baseSalary = baseSalary;
  };

  //* Private Property-এর Value Read করতে সাহায্য করে।
  get baseSalary (): number {
    return this._baseSalary
  };

  //* Getter ব্যবহার করে Base Salary-এর সঙ্গে ৫০% Bonus যোগ করে
  //* Total Salary Calculate করে Return করা হচ্ছে।
  get salaryWithBonus(): number {
    return this._baseSalary + this._baseSalary * 0.5
  };

  //* Private Property-এর Value Modify করতে সাহায্য করে।
  //* পাশাপাশি Setter-এর মধ্যে Validation করা যায়।
  set baseSalary (newSalary: number) {
    if (newSalary < 0) {
      throw new Error('Salary cannot be negative value.');
    }

    this._baseSalary = newSalary;
  };
};

const employee = new Employee('Alice', 30000);

//* যদি baseSalary-কে private করি, তাহলে Class-এর বাইরে থেকে
//* Access বা Modify করা যাবে না।
//* কারণ private Property শুধুমাত্র নিজের Class-এর ভিতরে Access করা যায়।

//* Not Allowed
// employee._baseSalary = 40000;

//* যদি baseSalary-কে public readonly করি, তাহলে Class-এর বাইরে থেকে
//* এর Value Read করা যাবে, কিন্তু Modify করা যাবে না।
//* কারণ public Access করতে দেয়, আর readonly Modify করতে বাধা দেয়।

//* Alowed
// console.log(employee._baseSalary);

//* Not Allowed
// employee._baseSalary = 40000;

//* Setter ব্যবহার করে Private baseSalary Property-এর Salary Update বা Modify করা হচ্ছে।
employee.baseSalary = 35000;

//* Getter ব্যবহার করে Private baseSalary Property-এর Salary Get বা Read করা হচ্ছে।
console.log(employee.baseSalary);

//* Getter ব্যবহার করে Private baseSalary Property-এর Salary + Bonus Get বা Read করা হচ্ছে।
console.log(employee.salaryWithBonus);