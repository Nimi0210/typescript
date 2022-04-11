
let myNodelist:any = document.getElementsByTagName("LI");

class todolist{
  constructor(myNodelist:any)
  {
for (let i:number = 0; i < myNodelist.length; i++) {
  let span:any = document.createElement("SPAN");
  let txt:any = document.createTextNode("\u00D7"); // multiplication sign
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
  
// Click on a close button to hide the current list item
let clo:any = document.getElementsByClassName("close");
var i:number;
for (i = 0; i < clo.length; i++) {
  clo[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list:any = document.querySelector('ul');
list.addEventListener('click', function(ev:any) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  //var num = parseFloat((<HTMLInputElement>document. getElementById("myValue")). value);
  var inputValue:any = ((<HTMLInputElement>document.getElementById("myInput")).value);
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  if (inputValue === '') {
    alert("You must write Food name");
  } else {
    let n:any=document.getElementById("myUL");
    n.appendChild(li);
  }
  let m:any= ((<HTMLInputElement>document.getElementById("myInput")).value);
  m = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
let i:number
  for (i = 0; i < this.clo.length; i++) {
    this.clo[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
let todo = new todolist(myNodelist);