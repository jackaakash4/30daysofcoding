var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function InputLength(){ //funciton to get length of input value
    return input.value.length;
}

function createListElement(){   //funciton to create list element and add imput value to list
    var li = document.createElement("li");  //new li tag is created
    li.appendChild(document.createTextNode(input.value)); //"input" text is added to li tag
    ul.appendChild(li); //li is attached with ul tag  
    input.value ="";
}

button.addEventListener("click", function(){
    if(InputLength()> 0){ //condition because if we input sth it add to list and else it doesn't
    createListElement();
    }     
})

input.addEventListener("keypress", function(event){
    
    if(InputLength() > 0 && event.keyCode === 13){ //condition because if we input sth it add to list and else it doesn't
        createListElement();
    }     
})