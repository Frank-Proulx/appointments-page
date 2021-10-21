

$(document).ready(function() {
  $("#appointments").submit(function(event) {
    const name = $("input#name").val();
    const description = $("input#description").val();
    const date = $("input#date").val();
    const startTime = $("input#start-time").val();
    const endTime = $("input#end-time").val();
    $("#output-name").text(name);
    $("#output-description").text(description);
    $("#output-date").text(date);
    $("#output-start-time").text(startTime);
    $("#output-end-time").text(endTime);
    event.preventDefault();
  }); 







});