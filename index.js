function shout(string) {
    return string;
}

"Hello!".toUpperCase(); //'HELLO'

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

const string = "HELLO";

console.log(string);
console.log(string.toLowerCase());

console.log (string === string.toLowerCase());