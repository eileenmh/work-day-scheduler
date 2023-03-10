$(function () {
  /* ---------------------------------------------------------------------
TIME BLOCKS
*/
  // Create time block HTML, pull in any existing data, and append to <main>
  function createTimeBlock(time) {
    var timeBlock = $('<div class="time-block row">').attr(
      "id",
      "hour-" + time
    );
    var hour = $('<div class="col-2 col-md-1 text-center py-3 hour">');
    var textarea = $(
      '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>'
    ).val(localStorage.getItem("hour-" + time));
    var button = $(
      '<button class="btn saveBtn col-2 col-md-1" aria-label="save"><i class="fas fa-save" aria-hidden="true"></i></button>'
    );
    $(timeBlock).append(hour, textarea, button);
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

  /* ---------------------------------------------------------------------
TEXT AREA
*/
  // store textarea value in local storage with parent id as key
  function storeText(event) {
    var parentId = $(event.currentTarget).parent().attr("id");
    var textareaValue = $(event.currentTarget).prev().val();
    localStorage.setItem(parentId, textareaValue);
    $("#saveMessage").removeClass("hide");
    setTimeout(function () {
      $("#saveMessage").addClass("hide");
    }, 2000);
  }

  // run storeText on button click
  $("main").on("click", ".saveBtn", storeText);

  /* ---------------------------------------------------------------------
RUN FUNCTIONS
*/
  var now = dayjs();
  var firstHour = 9;
  var lastHour = 17;
  $("#currentDay").text(now.format("dddd, MMMM D"));
  generateTimeBlocks();
});
