let inputText = document.getElementById("input")
let create = document.getElementById("create")
let delet = document.getElementById("delete")
let list = document.getElementById("listItem")
let selectAll = document.querySelectorAll("li")
let numberOfList = 0

list.addEventListener("click", handleItemClick)

inputText.addEventListener('keydown', function(event) {
if (event.keyCode === 13) {
if(inputText.value){
enterKey(event)
}
}
})

function enterKey (event){
let text = document.createElement("li")
let listNum = "item"+ numberOfList
text.innerHTML =  `<p class=${listNum}>${inputText.value}</p> <button id="deletebtn">Delete</button>`
text.classList.add("list")  
list.insertBefore(text, list.firstChild)
inputText.value = ""
numberOfList ++
let textToggle = text.firstChild;

textToggle.addEventListener("click", () => {
  textToggle.classList.toggle("done")
  textToggle.parentNode.classList.toggle("backDone")
})
}

create.addEventListener("click" , () => {
if(inputText.value){

  let text = document.createElement("li")
  let listNum = "item"+ numberOfList
  text.innerHTML =  `<p class=${listNum}>${inputText.value}</p> <button id="deletebtn">Delete</button>`
  text.classList.add("list")  
  list.insertBefore(text, list.firstChild)
  inputText.value = ""
  numberOfList ++
  let textToggle = text.firstChild;
  
  textToggle.addEventListener("click", () => {
    textToggle.classList.toggle("done")
    textToggle.parentNode.classList.toggle("backDone")

    }
    )}
})

function handleItemClick(event) {
    const clickedItem = event.target;
  
  if (clickedItem.innerHTML === "Delete") {
    
const listItem = clickedItem.parentNode;
  if (listItem.parentNode === list) {
list.removeChild(listItem);
}
}
}



delet.addEventListener("click", () => {
   inputText.value = ""
   let k =  document.querySelectorAll("li")

for(let i = k.length -1; i>= 0; i--){

    k[i].parentNode.removeChild(k[i])
}
})