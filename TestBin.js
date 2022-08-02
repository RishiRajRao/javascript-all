const object = {
  who: 'World',
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  }
};
let greetMsg = object.greet();
let farewellMsg = object.farewell();
console.log(greetMsg);    // What is logged?
console.log(farewellMsg); // What is logged?

////////////////////////////////////////////////////////////////

class Car {
  constructor() {
    // Bind sayBye but not sayHi to show the difference
    this.sayBye = this.sayBye.bind(this);
  }
  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
  sayBye() {
    console.log(`Bye from ${this.name}`);
  }
  get name() {
    return 'Ferrari';
  }
}

const car = new Car();
car.sayHi(); // Hello from Ferrari



////////////////////////////////

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: "mom", 
  anotherCaller: anotherCaller,
  says: function() {
    console.log(`Hey, ${this.caller} just called.`);
  }
};

const next = {
  caller:'ishi',
newCall : call.anotherCaller
}


next.newCall();
//////////////////////////////

function prettyFullDate (dateString) {
  var date = new Date(dateString)
  var d = date.getDate()
  var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var m = monthNames[date.getMonth()]
  var y = date.getFullYear()
  var h = date.getHours() 
  var ampm = h >= 12 ? 'PM' : 'AM'
  h = h % 12

  var min = date.getMinutes()
 
  let date1 = d + '-' + m + '-' + y + ' ' + h + ':' + min + ' ' + ampm
  let duration = timeSince(dateString)
  return d + '-' + m + '-' + y + ' ' + h + ':' + (min < 10 ? '0' : ' ') + min + ' ' + ampm + ' ' + '(' + duration + ')'
}


function timeSince (date) {
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];
  if (date) {
    var seconds = Math.floor(((new Date()).getTime() - new Date(date).getTime()) / 1000);
    var interval = intervals.find(i => i.seconds < seconds);
    var count = interval ? Math.floor(seconds / interval.seconds + 1) : 1;
    if (interval) {
      return `${count < 10 ? '0' + count - 1 : '' + count} ${interval.label}${count - 1 !== 1 ? 's' : ''} ago`;
    } else {
      return 'Now';
    }
  } else {
    return '';
  }
}

console.log(prettyFullDate('2022-07-13T10:29:41.437Z'));