function sayHello(){
    console.log("Hello nodeJS");
}
sayHello();
//first class function
function logSay(fn) {
    fn();
}
logSay(sayHello);
var sayGoodbye = function(){
    console.log("Good bye!");
}
sayGoodbye();