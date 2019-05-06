var list = document.querySelector('#myInput')

// first tap = checked second tap = delete
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  var t = ev.target;
  if (t.classList.contains('checked')) {
    t.parentNode.removeChild(t);
  }else {
    t.classList.add('checked');
  }
  store()
}, false);


// If you press on Enter you will go to the function newElement() and execute it!
var input  = document.getElementById("myInput");

input.addEventListener("keyup", function(event) {

  if(event.keyCode === 13) { // 13 = Enter
    newElement()
  }
})

// Create a new list item when clicking on the "Add" button or if you pressd Enter
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);

  }
  document.getElementById("myInput").value = "";

//created the span with class="close"
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  store();
}

function store() {
    window.localStorage.myitems = list.innerHTML;
  }
//stores the list
function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = ''

    }else {
      list.innerHTML = storedValues;
    }
  }
  getValues();//values callback
