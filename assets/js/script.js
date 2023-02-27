/**
 * TODO: Add code to display the current date in the header of the page.
 * TODO: Add a listener for click events on the save button - use 'this' in DOM traversal
 * TODO: Add code to get any user input that was saved in localStorage and set value of corresponding textarea element
 * TODO: Wrap all code that interacts with the DOM in a call to jQuery
 * 
 * --- EXTRAS ----
 * TODO: refresh time at top of hour using setTimeout
 * TODO: Add in way to choose work hours
 * TODO: Add in option for choosing 12 or 24 hours, default to user's local timezone settings
 * TODO: Break day into 15min increments
 -----------------------------------------------------------------------
 */

var now = dayjs();

// CREATE TIME BLOCK
function createTimeBlock(time) {
  // create parent <div> element, add attribute hour-id and then append to main
  var timeBlock = $('<div class="time-block row">').attr("id", "hour-" + time);
  $("main").append(timeBlock);

  // Insert child elements
  $(timeBlock).append(
    '<div class="col-2 col-md-1 text-center py-3 hour"></div>',
    '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>',
    '<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>'
  );
}

// ADD TIME DATA TO BLOCK & COMPARE TO CURRENT TIME
function addTimeData(time, IdSelector) {
  var setTime = dayjs().hour(time);
  var currentHour = now.hour();
  var setHour = setTime.hour();
  $(IdSelector).children(".hour").text(setTime.minute(0).format("H:mm A"));
  // Compare timeBlock to current time and then apply relevant class (past, future, or present)
  if (setHour < currentHour) {
    $(IdSelector).addClass("past");
  } else if (setHour == currentHour) {
    $(IdSelector).addClass("present");
  } else if (setHour > currentHour) {
    $(IdSelector).addClass("future");
  }
}

// GENERATE TIME BLOCK & ADD TIME DATA FOR EACH
var firstHour = 17;
var lastHour = 23;
function generateTimeBlocks() {
  for (let i = firstHour; i <= lastHour; i++) {
    var timeBlockEl = "#hour-" + i;
    createTimeBlock(i);
    addTimeData(i, timeBlockEl);
  }
}
// -------------------------------------------

generateTimeBlocks();
