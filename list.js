var myNodelist = document.getElementsByTagName("LI");
var todolist = /** @class */ (function () {
    function todolist(myNodelist) {
        for (var i_1 = 0; i_1 < myNodelist.length; i_1++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7"); // multiplication sign
            span.className = "close";
            span.appendChild(txt);
            myNodelist[i_1].appendChild(span);
        }
        // Click on a close button to hide the current list item
        var clo = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < clo.length; i++) {
            clo[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            };
        }
        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'LI') {
                ev.target.classList.toggle('checked');
            }
        }, false);
    }
    return todolist;
}());
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    //var num = parseFloat((<HTMLInputElement>document. getElementById("myValue")). value);
    var inputValue = (document.getElementById("myInput").value);
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write Food name");
    }
    else {
        var n = document.getElementById("myUL");
        n.appendChild(li);
    }
    var m = (document.getElementById("myInput").value);
    m = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var i;
    for (i = 0; i < this.clo.length; i++) {
        this.clo[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
var todo = new todolist(myNodelist);
