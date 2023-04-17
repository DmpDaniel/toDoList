let inputText = document.getElementById("input")
let create = document.getElementById("create")
let deleteAll = document.getElementById("delete")
let list = document.getElementById("listItem")
let selectAll = document.querySelectorAll("li")
let numberOfList = 0
let currentStatus;
let all = document.getElementById("all")
let active = document.getElementById("active")
let completed = document.getElementById("completed")

if(!currentStatus){
  all.classList.add("current")
}

all.addEventListener("click", ()=>{
  completed.classList.remove("current")
  active.classList.remove("current")
  all.classList.add("current")
})
active.addEventListener("click", ()=> {
  all.classList.remove("current")
  completed.classList.remove("current")
  active.classList.add("current")
})

completed.addEventListener("click", ()=> {
  all.classList.remove("current")
  active.classList.remove("current")
  completed.classList.add("current")
})

list.addEventListener("click", handleItemClick)

create.addEventListener("click", enterKey)
inputText.addEventListener('keydown', function(event) {
if (event.key === "Enter") {
if(inputText.value){
enterKey(event)
}
}})

function enterKey (event){
  if(inputText.value){
let text = document.createElement("li")
let listNum = "item"+ numberOfList
text.innerHTML =  `<p class=${listNum}>${inputText.value}</p> <button id="deletebtn">Delete</button>`
text.classList.add("list")  
list.insertBefore(text, list.firstChild)
inputText.value = ""
numberOfList ++
let textToggle = text.firstChild;

text.addEventListener("click", () => {
  textToggle.classList.toggle("done")
  textToggle.parentNode.classList.toggle("backDone")
  let dele = text.childNodes[2]
  console.log(dele)
  dele.classList.add("deletebtn")
})
}
}

function handleItemClick(event) {
    const clickedItem = event.target;
  
  if (clickedItem.innerHTML === "Delete") {
    
const listItem = clickedItem.parentNode;
  if (listItem.parentNode === list) {
list.removeChild(listItem);
}
}
}

deleteAll.addEventListener("click", () => {
   inputText.value = ""
   let selectAll =  document.querySelectorAll("li")

for(let i = selectAll.length -1; i>= 0; i--){

    selectAll[i].parentNode.removeChild(selectAll[i])
} 
})

document.addEventListener("click", (eventss) => {
  console.log(eventss.target) 
} )