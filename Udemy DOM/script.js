var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//var li = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("Delete item"));
    li.appendChild(delBtn);
    delBtn.onclick = removeParent;

    li.addEventListener("click", toggleDoneClass);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
        if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function toggleDoneClass() {
    this.classList.toggle("done");
}

function removeParent(evt) {
    evt.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



