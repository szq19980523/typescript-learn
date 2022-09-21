class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say(): void {
    console.log('nihao' + this.name)
  }
}

class Student extends Person {
  school: string;
  constructor(name: string, age: number, school: string) {
    super(name, age);
    this.school = school
  }
  say1(): void {
    alert('nihao')
  }
}
const student = new Student('xiaoming', 18, '大河小学') // {name: 'xiaoming', age: 18, school: '大河小学'}
student.say()
console.log(student);
