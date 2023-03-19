/*
Refer to github documentation (https://github.com/NekoFoox/Extensible-Date-Format-Processmaker-LIB/blob/main/README.md)

The code below is example code. It is used to display the current date and time to a label with the form ID of #TheDate. You can disect this code based on the documents as needed as repurpose it.

If you do not know what changed, refer to the bottom of the page.
*/

// Define the desired format using the placeholders described in the Readme. Be sure you move this into the Javascript box on processmaker after adding DfXe into external libs.
var dateFormat = "Df_mm/dd/yyyy";
//-----

// Get the current date
var currentDate = new Date();
//-----

// Define an object with the month names in the selected language
var monthNames = {
    "en": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    // Add additional languages and their respective month names here
};
//-----

// Get the day names based on the selected language
var dayNames = {
    "en": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    // Add additional languages and their respective day names here
};
//-----

// Get the month name based on the current date and selected language
var currentMonthName = monthNames["en"][currentDate.getMonth()];


// Get the name of the day of the week based on the current date and selected language
var currentDayName = dayNames["en"][currentDate.getDay()];


// Define a function to pad single digit numbers with a leading zero
function padNumber(num) {
    return num < 10 ? "0" + num : num;
}
//-----

// Extract the Df or DfEx extension from the format string and replace it with the appropriate date value
function replaceDf(match) {
    // Switch statement to handle different types of format placeholders
    switch (match) {
        // Year with four digits : example 2022
        case "DfEx_yyyy":
        case "Df_yyyy":
            return currentDate.getFullYear();
        // Year with two digits : example 22
        case "DfEx_yy":
        case "Df_yy":
            return padNumber(currentDate.getFullYear() % 100);
        // Month with leading zero : example 06 for June
        case "DfEx_mm":
        case "Df_mm":
            return padNumber(currentDate.getMonth() + 1);
        // Month with no leading zero : example 6 for June
        case "DfEx_m":
        case "Df_m":
            return currentDate.getMonth() + 1;
        // Full month name as text : example February
        case "DfEx_M":
        case "Df_M":
            return currentMonthName;
        // Day of the month with leading zero : example 03 for third day of the month
        case "DfEx_dd":
        case "Df_dd":
            return padNumber(currentDate.getDate());
        // Day of the month with no leading zero : example 3 for third day of the month
        case "DfEx_d":
        case "Df_d":
            return currentDate.getDate();
        // Name of the day description: like, Monday
        case "DfEx_D":
        case "Df_D":
            return currentDayName;
        // Hour(24) format with leading zero : example 02 for second hour
        case "DfEx_h":
        case "Df_h":
            return padNumber(currentDate.getHours());
        // Hour(12) format with leading zero : example 02 for second hour(AM/PM)
        case "Df_H":
        case "DfEx_H":
            var hours = currentDate.getHours() % 12;
            return (hours == 0) ? 12 : hours;
        // Minute with leading zero : example 01 for first minute
        case "DfEx_i":
        case "Df_i":
            return padNumber(currentDate.getMinutes());
        // Second with leading zero : example 01 for first second
        case "DfEx_s":
        case "Df_s":
            return padNumber(currentDate.getSeconds());
        // AM/PM designator
        case "DfEx_tz":
        case "Df_tz":
            return (currentDate.getHours() >= 12) ? "PM" : "AM";
        default:
            // If the match does not belong to any expected case then the same string is returned
            return match;
    }
}

// EXAMPLE BEGINS HERE!
// EXAMPLE BEGINS HERE!

// Build the formatted date string based on the selected format
var formattedDate = dateFormat
    .replace(/(DfEx|Df)_[A-Za-z]+/g, replaceDf);

// Set the text of the subtitle to the formatted date. Be sure to also remove this code from here and move it into your Javascript box on Processmaker
$("#TheDate").text(formattedDate);
