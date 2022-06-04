const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('Please Turn OFF the Motor');
  setTimeout(() => {
     console.log("Its a Gentle Reminder Turn off Motor") 
  }, 3000);
  setInterval(() => {
      console.log("i am Set Interval");
  }, 1000);
  setTimeout(() => {
      console.log("This is settimeout with 0 seconds delay")
  }, 0);
  console.log("This will appear above setTimeout")
});

// This is a Event Called Waterfull, When the Event is Fired then that code Runs

console.log("The Script is Running")
myEmitter.emit('waterfull');
// Here we Fired the Event called as WATERFULL
console.log("The Script is Still RUNNING ");

// settimeout is NON BLOCKING in nature for JAVASCRIPT EVEN IF ITS GIVEN TIME DELAY OF ZERO MILLISECONDS THEN ALSO IT ALLOWS OTHER STATEMENTS TO RUN BEFORE IT 