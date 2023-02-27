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

/* -------------------------------------------------------------------------------------------
TIME BLOCKS
*/
// Create time block HTML and append to <main>
function createTimeBlock(time) {
  var timeBlock = $('<div class="time-block row">').attr("id", "hour-" + time);
  $(timeBlock).append(
    '<div class="col-2 col-md-1 text-center py-3 hour"></div>',
    '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>',
    '<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>'
  );
  $("main").append(timeBlock);
}

// Add time data to time block and compare to current time
function addTimeData(time, IdSelector) {
  var setTime = dayjs().hour(time);
  var currentHour = now.hour();
  var setHour = setTime.hour();
  $(IdSelector).children(".hour").text(setTime.minute(0).format("H:mm A"));
  // Compare and apply relevant class (past, future, or present)
  if (setHour < currentHour) {
    $(IdSelector).addClass("past");
  } else if (setHour == currentHour) {
    $(IdSelector).addClass("present");
  } else if (setHour > currentHour) {
    $(IdSelector).addClass("future");
  }
}

// Generate all time blocks and add time data
function generateTimeBlocks() {
  for (let i = firstHour; i <= lastHour; i++) {
    var timeBlockEl = "#hour-" + i;
    createTimeBlock(i);
    addTimeData(i, timeBlockEl);
  }
}
// -------------------------------------------
var now = dayjs();
var firstHour = 17;
var lastHour = 23;
generateTimeBlocks();
