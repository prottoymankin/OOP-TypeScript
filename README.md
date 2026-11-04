`Traditional Class Syntax` (`Traditional Way` বা `Explicit Property Declaration`)

```ts
class Employee {
  public name: string;
  private _baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this._baseSalary = baseSalary;
  };
};
```

`Parameter Properties Syntax`
`Parameter Properties` হলো `TypeScript`-এর একটি Feature। এর মাধ্যমে `Constructor`-এর `Parameter`-এর মধ্যেই `Access Modifier (public, private, protected)` ব্যবহার করে Class Property Declare এবং Initialize করা যায়।

এই Feature শুধু `TypeScript`-এ রয়েছে, `JavaScript`-এ নেই।

`TypeScript`-এর `Parameter Properties` `compile` হয়ে `JavaScript`-এ convert হওয়ার সময় `Traditional Syntax`-এ রূপান্তরিত হয়।

```ts
class Employee {
  constructor(
    public name: string,
    private _baseSalary: number
  ) {};
};
```