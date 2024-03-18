// script.js

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Select the body element
  var body = document.body;

  // Change the background color to a random color
  var randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
}

// Helper function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
