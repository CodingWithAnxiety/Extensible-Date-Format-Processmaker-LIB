
# Date Format, Extensible Library (DfEx.js)

This is a basic LIB for formatting dates with various options. It is highly extensible, preformance-tested, well-documented, and easy-to-understand. It was designed with the GMU project in mind for extra style-points on good-looking dates.




## Installation

Add this code to your Processmaker Dynaform Javascript;

```js
// Define the desired format here. Use documentation for refrence. Modifiable, but required.
var dateFormat = "DfEx_mm/DfEx_dd/DfEx_yyyy";

// Load the external library. REQUIRED.
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/gh/CodingWithAnxiety/Extensible-Date-Format-Processmaker-LIB@1/Mins/DfEx.min.js';
document.head.appendChild(script);

// Wait for the library to load and then format the date. REQUIRED.
script.onload = function() {
  // Get the current date in the desired format. Placeholder, Replace with whatever you need.
  $("#TheDate").text(formattedDate);;
};
```

## Authors

- [Coding With Anxiety](https://github.com/CodingWithAnxiety)


## Features

- Well documented
- Highly extensible
- Designed for ProcessMaker
- Easily applied
- Easily modifiable LIB
- Designed for clients with little-to-no programming knowledge
- Performance-tested

## Documentation

---

This is a basic LIB for formatting dates with various options. It is highly extensible, performance-tested, well-documented, and easy-to-understand.

---

A date-format type is called a "Date-Case". You can create Date-Cases by simply adding a new function to the `replaceDf` function. For example, if you wanted to get the time in Unix epoch, you could do:

```js
case "DfEx_ms":
case "Df_ms":
return currentDate.getTime();
```

Using this function, you would get;
`DfEx_ms/Df_ms` = 1679249954730

---

All the below are documented date-cases that come pre-programmed:

### The `Df_` Syntax

The `Df_` syntax is used to format dates with a fixed set of placeholders. The following placeholders can be used to format the date:

| Code | Description |
| ---- | ----------- |
| Df_yyyy | shows the year with four numbers (e.g. it shows the year 2008 as 2008) |
| Df_yy | shows the year with two numbers (e.g. it shows the year 2008 as 08) |
| Df_mm | shows the month with two numbers (e.g. it shows June as 06) |
| Df_m | shows the month with a simple number (e.g. it shows June as 6) |
| Df_M | shows the full word for the month in the selected language (e.g. if the month is June, it shows June in English and junio in Spanish) |
| Df_dd | shows the day of the month with two numbers (e.g. the first day of the month is 01) |
| Df_d | shows the day of the month with a simple number (e.g. the first day of the month is 1) |
| Df_D | shows the full word for the day in the selected language (e.g. if the day is Monday, it shows Monday in English and Lunes in Spanish) |
| Df_h | shows the hour in a 24-hour clock format with two numbers (e.g. 2 PM is 14) |
| Df_H | shows the hour in a 12-hour clock format with two numbers (e.g. 2 PM is 02) |
| Df_i | shows the minutes with two numbers (e.g. the first minute is 01) |
| Df_s | shows the seconds with two numbers (e.g. the first second is 01) |
| Df_tz | shows "AM" or "PM" based on the time of day (e.g. 2 PM is "PM") |


### The `DfEx_` Syntax

The `DfEx_` syntax is exactly the same as `Df_`, but has been added for extended extensibility and bug-fixing, as well as general customization.

| Syntax | Description |
| ------ | ----------- |
| DfEx_yyyy | Shows the year with four numbers (e.g. it shows the year 2008 as 2008) |
| DfEx_yy | Shows the year with two numbers (e.g. it shows the year 2008 as 08) |
| DfEx_mm | Shows the month with two numbers (e.g. it shows June as 06) |
| DfEx_m | Shows the month with a simple number (e.g. it shows June as 6) |
| DfEx_M | Shows the full word for the month in the selected language (e.g. if the month is June, it shows June in English and junio in Spanish) |
| DfEx_dd | Shows the day of the month with two numbers (e.g. the first day of the month is 01) |
| DfEx_d | Shows the day of the month with a simple number (e.g. the first day of the month is 1) |
| DfEx_D | Shows the full word for the day in the selected language (e.g. if the day is Monday, it shows Monday in English and Lunes in Spanish) |
| DfEx_h | Shows the hour in a 24-hour clock format with two numbers (e.g. 2 PM is 14) |
| DfEx_H | Shows the hour in a 12-hour clock format with two numbers (e.g. 2 PM is 02) |
| DfEx_i | Shows the minutes with two numbers (e.g. the first minute is 01) |
| DfEx_s | Shows the seconds with two numbers (e.g. the first second is 01) |
| DfEx_tz | Shows "AM" or "PM" based on the time of day (e.g. 2 PM is "PM") |

### Interchangeability

The `Df_` and `DfEx_` syntax can be used interchangeably in the same string, allowing for flexible and customized formatting of dates. For example, the following two strings will give the same result:

```js
"DfEx_mm/Df_dd/DfEx_yyyy"
"Df_mm/Df_dd/Df_yyyy"
```

Both of these strings will format the date in the month/day/year format.



## External documentation

[JavaScript in Dynaforms](https://wiki.processmaker.com/3.2/JavaScript_Functions_and_Methods)

[External Libraries in Dynaforms](https://wiki.processmaker.com/3.0/Form#External_Libs)

[How to use JsDelivr](https://chriscoyier.net/2022/05/17/make-your-own-little-easy-to-update-cdn/)

## How to Modify DfEx.js Library

Assuming you are already on the repository for DfEx.js, follow these steps to modify and use the library:

### Step 1: Fork the repository

1. Click on the "Fork" button in the top-right corner of the repository page to create a copy of the repository in your own GitHub account.
2. Wait for the forking process to complete.

### Step 2: Clone your fork

1. In the repository page, click on the "Code" button and copy the HTTPS URL.
2. Open your terminal or Git Bash and navigate to the directory where you want to clone the repository.
3. Type `git clone` followed by the copied URL and press Enter.
4. The repository will be cloned to your local machine.

### Step 3: Modify DfEx.js

1. Open the cloned repository in your code editor of choice.
2. Find the DfEx.js file in the root of the repository and make any necessary modifications.
3. Save the changes.

### Step 4: Push changes to your fork

1. In your terminal or Git Bash, navigate to the cloned repository.
2. Add and commit your changes using the commands `git add .` and `git commit -m "Your commit message here"`.
3. Push your changes to your fork using the command `git push`.

### Step 5: Get the raw link for DfEx.js

1. Go to your forked repository on GitHub and navigate to the DfEx.js file.
2. Click on the "Raw" button to get the raw link to the file.
3. Copy this link.

### Step 6: Use JsDelivr to host the modified DfEx.js file

1. Go to the JsDelivr website (https://www.jsdelivr.com/github).
2. Paste the raw link to DfEx.js into the "Paste a GitHub link here" field.
3. The lower field should auto-fill with your new link.
4. Copy the link that JsDelivr generates for the file.

### Step 7: Use the modified DfEx.js in ProcessMaker

1. Open the ProcessMaker dynaform that you want to apply the modified DfEx.js to.
2. In the form editor, go to the "Properties" panel and find the "Javascript" property.
3. Refer to Section 2, Installation of the DfEx.js documentation for more instructions on how to install from here on.