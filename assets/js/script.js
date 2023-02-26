/**
 *
 *
 * --- EXTRAS ----
 * TODO: refresh time at top of hour using setTimeout
 * TODO: Add in way to choose work hours
 * TODO: Add in option for choosing 12 or 24 hours, default to user's local timezone settings
 * TODO: Break day into 15min increments
 -----------------------------------------------------------------------
 */

var now = dayjs();

// compare to time in time block to decide on class
var currentTime = dayjs().format("HH:mm");
// console.log(currentTime.toString());

var timeBlock = dayjs().hour(11);

function createTimeBlock() {
  if (timeBlock.isBefore(now)) {
    console.log("time block is before current time");
    $("#hour-block").addClass("past");
  } else if (timeBlock.isAfter(now)) {
    console.log("time block is after current time");
    $("#hour-block").addClass("future");
  } else if (now.isSame(timeBlock)) {
    console.log("time block is same as current time");
    $("#hour-block").addClass("present");
  }
}

createTimeBlock();

// ! Dynamic time block creation - abandoning for later
// ! Something to come back if I can get everything else working
// function createTimeBlock(hour) {
//   var timeLabel = $("<div></div>")
//     .text(hour)
//     .addClass("col-2 col-md-1 hour text-center py-3");
//   var textArea = $("<textarea></textarea>").addClass(
//     "col-8 col-md-10 description"
//   );
//   var saveButton = $("<button></button>").addClass(
//     "btn saveBtn col-2 col-md-1"
//   );

//   $("body").append(timeLabel, textArea, saveButton);
// }

// createTimeBlock();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
