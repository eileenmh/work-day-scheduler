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
var firstHour = 9;
var lastHour = 17;

// compare to time in time block to decide on class
var currentTime = dayjs().format("HH:mm");
// console.log(currentTime.toString());

function createTimeBlock(id, referenceId) {
  // create parent <div> element and attribute hour-id, then append to main
  var parent = $("<div>").attr("id", id);
  $("main").append(parent);

  // Append child elements to parent
  var hourHTML = '<div class="col-2 col-md-1 text-center py-3 hour"></div>';
  var textareaHTML =
    '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>';
  var buttonHTML =
    '<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>';
  $(referenceId).append(hourHTML, textareaHTML, buttonHTML);
}

function generateTimeBlocks() {
  for (let i = firstHour; i <= lastHour; i++) {
    var id = "hour-" + i;
    var referenceId = "#" + id;
    createTimeBlock(id, referenceId);

    var timeBlock = dayjs().hour(i);

    $(referenceId).children(".hour").text(timeBlock.minute(0).format("H:mm A"));

    if (timeBlock.isBefore(now)) {
      $(referenceId).addClass("past");
    } else if (timeBlock.isAfter(now)) {
      $(referenceId).addClass("future");
    } else if (now.isSame(timeBlock)) {
      $(referenceId).addClass("present");
    }
  }
}

generateTimeBlocks();

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
