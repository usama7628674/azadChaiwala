// Get Element By Id
let heading = document.getElementById("add")
console.log(add);

add.innerHTML = "<i>Hello World</i>" // Render  as a HTML File
add.innerText = "<i>Hello World</i>" // Render  as a Normal File

// Get Element By Class and style with js
let section = document.getElementsByClassName("heading")
console.log(section)
section[0].style.color = "Yellow"
section[0].style.textShadow = "3px 1px 3px black"
section[0].style.textDecoration = "underline"
section[0].style.border = "2px solid black"
section[0].style.textAlign = "center"
section[3].style.fontWeight = "Bold"


// Get Element By Tag Name



