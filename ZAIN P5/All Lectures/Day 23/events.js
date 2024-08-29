//Method 1 
click.addEventListener('click', function(){
    alert("Hello Guys");
})

//Method 2
let clickFunction = document.getElementById('click-function');
clickFunction.addEventListener('click', display);

function display(){
    alert("Hello Dear");
}

//Method 3
function sayhello() {
    alert("Method 3");
}
