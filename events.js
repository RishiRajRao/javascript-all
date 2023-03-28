const events = require('events');
class A extends events.EventEmitter {
    constructor() {
        super();
        console.log('constructor called');
    }

    func1() {
        console.log('some logs before emitting an event')
        this.emit('eventa');
        console.log('some logs after emitting an event')
    }
}

const obj = new A();
obj.on('eventa', () => {
    console.log('log from eventa');
    let sum = 5 + 10;
    console.log(sum)
});

function testing() {
    console.log('a');
    obj.func1();
    console.log('b');    
}

testing();