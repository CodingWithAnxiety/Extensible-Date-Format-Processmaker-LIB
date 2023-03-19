/*
Be sure to add the below code to your JS!

On the script.onload = function() {, add your own function. What is currently there is a placeholder.

*/


// Define the desired format using the placeholders described above, including any DfEx extensions
var dateFormat = "DfEx_mm/DfEx_dd/DfEx_yyyy";

// Load the external library
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/NekoFoox/Extensible-Date-Format-Processmaker-LIB@latest/DfEx.js';
document.head.appendChild(script);

// Wait for the library to load and then format the date
script.onload = function() {
  // Get the current date in the desired format
  $("#TheDate").text(formattedDate);;
};