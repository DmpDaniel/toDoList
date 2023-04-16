let inputText = document.getElementById("input")
let create = document.getElementById("create")
let delet = document.getElementById("delete")
let list = document.getElementById("listItem")
let allPh = document.querySelectorAll("p")
let listOfItems = 0;
let lis = document.querySelectorAll("li")
let nummm = 0

list.addEventListener("click", handleItemClick)
inputText.addEventListener('keydown', function(event) {
if (event.keyCode === 13) {
if(inputText.value){
enterKey()
}
}
})

function enterKey (){
  event.preventDefault();
let text = document.createElement("li")
let wala = "hee"+ nummm
console.log(wala)
text.innerHTML =  `<p class=${wala}>${inputText.value}</p> <button id="deletebtn">Delete</button>`
text.classList.add("list")  
list.insertBefore(text, list.firstChild)
inputText.value = ""
nummm ++
let kalo = text.firstChild;
console.log(kalo)

kalo.addEventListener("click", () => {
  kalo.classList.toggle("done")
  kalo.parentNode.classList.toggle("backDone")
})
}

create.addEventListener("click" ,() => {
if(inputText.value){

    let text = document.createElement("li")
    text.innerHTML =  `<p>${inputText.value}</p> <button id="deletebtn">Delete</button>`
    console.log(text.firstElementChild)
  
    list.insertBefore(text, list.firstChild)
    inputText.value = ""
    
    text.addEventListener("click", () => {
        text.removeChild()

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

   console.log(k.length)
for(let i = k.length -1; i>= 0; i--){

    k[i].parentNode.removeChild(k[i])
}
})


lis.forEach(li => {
  // Get the first child <p> element of the <li> element
  const p = li.querySelector('p:first-child');

  // Add a click event listener to the <p> element
  p.addEventListener('click', function() {
    // Toggle the 'line-through' class on the <li> element that contains the clicked <p> element
    li.classList.toggle('line-through');
  });
});     

console.log()