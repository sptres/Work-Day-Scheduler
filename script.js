$(document).ready(function () {


    //creating function via dayjs to set current day, date, and time
    setInterval(function () {
        $("#day").text(dayjs().format("dddd[, ]"));
        $('#date').text(dayjs().format('MMM DD, YYYY'));
        $("#time").text(dayjs().format("hh:mm:ss a"));
    }, 1000)
  
    //setting currentTime variable to differenciate present/future/past
    var currentTime = dayjs().format("HH");
  
    //differenciating present/future/past depending on currentTime
    $(".time-block").each(function () {
        var timeBlock = $(this).attr('id').split("-")[1];;
        if (currentTime == timeBlock) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else if (currentTime < timeBlock) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
        else if (currentTime > timeBlock) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
    // takes in user inputs to save in the local storage
    $(".saveBtn").click(function (event) {
      // prevent the page from refreshing
        event.preventDefault();
        var Input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
  
        localStorage.setItem(time, Input);
    });
  
    //display time information into the work scheduler
    function getSchedule() {
        $("#hour-09 .description").val(localStorage.getItem("hour-09"));
        $("#hour-10 .description").val(localStorage.getItem("hour-10"));
        $("#hour-11 .description").val(localStorage.getItem("hour-11"));
        $("#hour-12 .description").val(localStorage.getItem("hour-12"));
        $("#hour-13 .description").val(localStorage.getItem("hour-13"));
        $("#hour-14 .description").val(localStorage.getItem("hour-14"));
        $("#hour-15 .description").val(localStorage.getItem("hour-15"));
        $("#hour-16 .description").val(localStorage.getItem("hour-16"));
        $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    }
    //calls the function to check the time and put in right time-block
    getSchedule();
  });
  