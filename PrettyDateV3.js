// Define the desired format using the placeholders described above, including any DfEx extensions
var dateFormat = "DfEx_mm/DfEx_dd/DfEx_yy";

// Load the external library
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/CodingWithAnxiety/Extensible-Date-Format-Processmaker-LIB@1/Mins/DfEx.min.js';
document.head.appendChild(script);

// Wait for the library to load and then format the date
script.onload = function() {
  // Get the current date in the desired format
  jQuery('#TheDate').setLabel(formattedDate);
   
  // Apply CSS styles to center the sub-title and its text
  jQuery('#TheDate').css({
    'text-align': 'center',
    'font-size': '14px',
    'color': '#444',
    'font-family': '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  });
   
  // Build the minimalist label for the sub-title using template literals.
  const subtitleLabel = `Current date:<br><span style='font-size: 24px; color: #1f242e; font-weight:bold; font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;'>${formattedDate}</span>`;
   
  // Set the sub-title's HTML to the minimalist label
  jQuery('#TheDate').html(`<div>${subtitleLabel}</div>`);
};