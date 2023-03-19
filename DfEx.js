/*
Date Format, Extensible API
(Aka, Extensible Date API)
DfEx.JS

Syntax: [DfEx_] or [Df_]

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This is a basic API for formatting dates with various options. It is highly extensible, preformance-tested, well-documented, and easy-to-understand.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

A date-format type is called a "Date-Case". You can create Date-Cases by simply adding a new 

        case "DfEx_h":
        case "Df_h":
		
Function to the replaceDf function. For example, if I wanted to get the time in Unix epoch, I could do;

case "DfEx_ms":
case "Df_ms":
    return currentDate.getTime();
	
"DfEx_ms/Df_ms" = 1679249954730

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

All the below are documented date-cases that come pre-programmed;

The Df_ Syntax

The Df_ syntax is used to format dates with a fixed set of placeholders. The following placeholders can be used to format the date:

	Df_yyyy - shows the year with four numbers (e.g. it shows the year 2008 as 2008)
	Df_yy - shows the year with two numbers (e.g. it shows the year 2008 as 08)
	Df_mm - shows the month with two numbers (e.g. it shows June as 06)
	Df_m - shows the month with a simple number (e.g. it shows June as 6)
	Df_M - shows the full word for the month in the selected language (e.g. if the month is June, it shows June in English and junio in Spanish)
	Df_dd - shows the day of the month with two numbers (e.g. the first day of the month is 01)
	Df_d - shows the day of the month with a simple number (e.g. the first day of the month is 1)
	Df_D - shows the full word for the day in the selected language (e.g. if the day is Monday, it shows Monday in English and Lunes in Spanish)
	Df_h - shows the hour in a 24-hour clock format with two numbers (e.g. 2 PM is 14)
	Df_H - shows the hour in a 12-hour clock format with two numbers (e.g. 2 PM is 02)
	Df_i - shows the minutes with two numbers (e.g. the first minute is 01)
	Df_s - shows the seconds with two numbers (e.g. the first second is 01)
	Df_tz - shows "AM" or "PM" based on the time of day (e.g. 2 PM is "PM")

The DfEx_ Syntax

The DfEx_ syntax is exactly the same as Df_, but simply here for the sake of compatability.

	DfEx_yyyy - shows the year with four numbers (e.g. it shows the year 2008 as 2008)
	DfEx_yy - shows the year with two numbers (e.g. it shows the year 2008 as 08)
	DfEx_mm - shows the month with two numbers (e.g. it shows June as 06)
	DfEx_m - shows the month with a simple number (e.g. it shows June as 6)
	DfEx_M - shows the full word for the month in the selected language (e.g. if the month is June, it shows June in English and junio in Spanish)
	DfEx_dd - shows the day of the month with two numbers (e.g. the first day of the month is 01)
	DfEx_d - shows the day of the month with a simple number (e.g. the first day of the month is 1)
	DfEx_D - shows the full word for the day in the selected language (e.g. if the day is Monday, it shows Monday in English and Lunes in Spanish)
	DfEx_h - shows the hour in a 24-hour clock format with two numbers (e.g. 2 PM is 14)
	DfEx_H - shows the hour in a 12-hour clock format with two numbers (e.g. 2 PM is 02)
	DfEx_i - shows the minutes with two numbers (e.g. the first minute is 01)
	DfEx_s - shows the seconds with two numbers (e.g. the first second is 01)
	DfEx_tz - shows "AM" or "PM" based on the time of day (e.g. 2 PM is "PM")

The Df_ and DfEx_ syntax can be used interchangeably in the same string, allowing for flexible and customized formatting of dates. For example, the following two strings will give the same result:

    DfEx_mm/Df_dd/DfEx_yyyy
    Df_mm/Df_dd/Df_yyyy
	
Both of these strings will format the date in the month/day/year format.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The code below is example code. It is used to display the current date and time to a label with the form ID of #TheDate. You can disect this code based on the documents as needed as repurpose it

*/

// Define the desired format using the placeholders described above, including any DfEx extensions
var dateFormat = "DfEx_MM/DD/YYYY";
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

// Build the formatted date string based on the selected format
var formattedDate = dateFormat
    .replace(/(DfEx|Df)_[A-Za-z]+/g, replaceDf);

// Set the text of the subtitle to the formatted date
$("#TheDate").text(formattedDate);