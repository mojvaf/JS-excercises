console.clear();
// Exercise 1
var before = [12,3,5,18,23,2];
var filtered = before.filter((value)=>{
    return value>10
});
console.log("Exercise 1");
console.log("Array before - ",before);
console.log("Filtered array - ",filtered);

//Exercise 2
var validate = (pin) => {
    if(typeof(pin)==="string") pin = Number.parseInt(pin); // we make sure that we have input in right format
    return typeof(pin) === "number" &&  // it has to be number
    pin.toString().length === 4 && // it has to be 4 digit long
    pin.toString() !== pin.toString()[0].repeat(4) && // at lest two different digits in number
    pin % 2 === 0 && // it has to be even (last digit even means that number is even)
    sumDigits(pin) >= 5; // sum of digit has to be at least 5
}
var sumDigits = (pin) => {
    let sum = 0;
    while (pin) {
        sum += pin % 10;
        pin = Math.floor(pin / 10);
    }
    return sum;
}
console.log("-".repeat(40));
console.log("Exercise 2");
console.log("1110 - ",validate("1110"));
console.log("1112 - ",validate("1112"));

//Exercise 3
class DCICourse{
    /**
     * Returns the sum of a and b
     * @param {any} type
     * @param {any} teacher
     * @param {any} topic
     * @param {any} students
     */
    constructor(type ,teacher,topic,students){
        this.type = type;
        this.teacher = teacher;
        this.topic = topic;
        this.students = students;
    }
    howBigClass() {
        console.log(`Class should be at least ${this.students * 22} suqare meters.`);
    }
}
DCICourse.prototype.details = function(){
    console.log(`This is a ${this.type} long ${this.topic} course taught by ${this.teacher}. There are ${this.students} students taking the course.`);
}
console.log("-".repeat(40));
console.log("Exercise 3");
let fbw17 = new DCICourse("one year","Martina & Robert","web development",17);
fbw17.howBigClass();
fbw17.details();

//Exercise 4
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
console.log("-".repeat(40));
console.log("Exercise 4");
console.log("Before sorting",events);
events.sort((a,b)=>
    (a.turnout < b.turnout) ? 1 : -1
)
console.log("After sorting",events);