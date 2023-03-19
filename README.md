
# Date Format, Extensible Library (DfEx.js)

This is a basic LIB for formatting dates with various options. It is highly extensible, preformance-tested, well-documented, and easy-to-understand. It was designed with the GMU project in mind for extra style-points on good-looking dates.

## Authors

- [The Lovebecile](https://github.com/NekoFoox)


## Features

- Well documented
- Highly extensible
- Designed for ProcessMaker
- Easily applied

## Documentation

---

This is a basic API for formatting dates with various options. It is highly extensible, performance-tested, well-documented, and easy-to-understand.

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


