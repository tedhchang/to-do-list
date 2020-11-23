function newItem() {

    // Store user input
    var item = document.getElementById("input").value;

    // Store unordered list in variable
    var ul = document.getElementById("list");

    // Store list item in variable
    var li = document.createElement("li");

    // Append user input into list variable
    li.appendChild(document.createTextNode("• " + item));

    // Put list variable into unordered list
    ul.appendChild(li);

    // Reset input area
    document.getElementById("input").value = "";

    // Remove typed words
    li.onclick = removeItem;
}

// Checks if user presses Enter key
document.body.onkeyup = function(i) {
  if (i.keyCode == 13) {
    newItem();
  }
};

// Remove item list when clicked
function removeItem(e) {
  e.target.remove()
}
