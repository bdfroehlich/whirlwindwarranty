// let header = document.createElement("H1").textContent = "Warranty Information"
// document.body.appendChild(header)

let h = document.createElement("H1"); // Create the H1 element 
h.textContent = "Warranty Information"; // Create a text element 

 
document.body.appendChild(h); // Append the H1 element to the document body 

let firstNameDiv = document.createElement('div')
document.body.appendChild(firstNameDiv)

var firstNameText = document.createElement('p');
firstNameText.textContent = "First Name";
firstNameDiv.appendChild(firstNameText);

var firstName = document.createElement("INPUT");
firstName.setAttribute("type", "text");
firstNameDiv.appendChild(firstName);

let saveButton = document.createElement("button");
saveButton.innerHTML = "Save";
document.body.appendChild(saveButton)

let closeButton = document.createElement("button");
closeButton.innerHTML = "Close";
document.body.appendChild(closeButton)