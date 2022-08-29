//scope

var fun = 5;

function fun(){
    var fun = "hello";
    console.log(1, fun);
}

function funner(){
    var fun = "funner";
    console.log(2, fun);
}

function funnest(){
    fun = "AHHHH";
    console.log(3, fun);
}

console.log("window", fun);
//we get window 5 as an output

fun();
//we get output 1 hello

funner();
// we get output 2 funner

funnest();
//we get output 3 "AHHHH"

console.log(fun);
//we get output AHHHH

