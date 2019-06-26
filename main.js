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
events.sort((a,b)=>(a.turnout < b.turnout) ? 1 : -1);
console.log("After sorting",events);

//Exercise 5
let arr = [1,2,3,4,5,6,7,8,9];
console.log("-".repeat(40));
console.log("Exercise 5");
console.log("Array before",arr);
console.log("Array after",arr.map((value)=>{
    return value*value;
}).filter((value) => {
   return value % 2 === 0;
}))

//Exercise 6
let players = [0,0];
let j = 0;
do{
    for(let i = 0; i<6;i++){
        players[j]+=Math.floor((Math.random() * 6) + 1);
    }
    j = (j==0) ? 1 : 0;
}while(players[j]<10000)
let winner = players[0]>10000 ? "Player 1" : "Player 2";
console.log("-".repeat(40));
console.log("Exercise 6");
console.log(`Player 1: ${players[0]}, Player 2: ${players[1]} - ${winner} wins`);

//Exercise 7
let final = new Date("2014-07-13");
console.log("-".repeat(40));
console.log("Exercise 7");
console.log("Germany has won the world cup",Math.ceil( (new Date() - final) /1000 / 60 / 60 / 24),"days ago");

//Exercise 8
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
];
let hours = 0;
for(let day in hourTracking){
    hours += (hourTracking[day].end - hourTracking[day].start);
}
console.log("-".repeat(40));
console.log("Exercise 8");
console.log("Number of worked hours - ",hours);

//Exercise 9
function mapping(arr,callback){
    return arr.map(callback);
}
const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
console.log("-".repeat(40));
console.log("Exercise 9");
console.log("Power",powerOfTwo);
const squareRoot = mapping(powerOfTwo, (val) => Math.sqrt(val,2) );
console.log("Square root",squareRoot);

//Exercise 10
let board = [
    [1, 2, 3], 
	["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
    [true, false]
]
console.log("-".repeat(40));
console.log("Exercise 10");
board.forEach(subarray=>{
    subarray.forEach(value=>console.log(value));
})
