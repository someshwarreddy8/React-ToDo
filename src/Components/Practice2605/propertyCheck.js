class Demo {
    static name = 'xyz';
    rollNo = 12;

    constructor(age){
        this.age = age;
    }
}

var demo = new Demo(12);
console.log(demo.age);
console.log(Demo.name);
console.log(Demo.rollNo)