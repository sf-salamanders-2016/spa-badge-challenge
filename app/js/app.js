$(document).ready(function () {
  loadStudents();
  loadBadges();
  homeButtonListener();
  voteListener();
});



var loadStudents = function() {
    var url = "http://sample-badges-api.herokuapp.com/teachers"
    $.ajax({
      url: url,
      method: "get"
    })
    .done(function(response){
        var context = {
          student: response
        };
        $(function() {
          var theTemplateScript = $("#student-template").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          var theCompiledHtml = theTemplate(context);
          $(document.body).append(theCompiledHtml);

        })
    })

}



var loadBadges = function() {
  $("#index-page").on("click", ".student-link", function(event) {
    event.preventDefault();
    var id = $(this).attr("id");
    var name = $("#" + id).html();
    var url = "http://sample-badges-api.herokuapp.com/teachers/" + id
    $.ajax({
      url: url,
      method: "get"
    })
    .done(function(response){
        $("#student-container").hide();
        var context = {
          name: name,
          badge: response
        };
        $(function() {
          var theTemplateScript = $("#badges-list").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          var theCompiledHtml = theTemplate(context);
          $(document.body).append(theCompiledHtml);
    })
  })
  })


}

var homeButtonListener = function() {
  $("#index-page").on("click", "#home", function(event) {
    event.preventDefault();
    $(".show-user").hide();
    $("#student-container").show();
  })
}

var voteListener = function() {
  $("#index-page").on("submit", ".vote-on form", function(event) {
    event.preventDefault();
    var vote = $(this).serialize();
    var id = $(this).parent().parent().attr("id");
    console.log(id);
    var url = "http://sample-badges-api.herokuapp.com/badges/" + id
    // $.ajax({
    //   url: url,
    //   method: "put"
    // })
    // .done(function(response){
    //   console.log(response)

        // var context = {
        //   name: name,
        //   badge: response
        // };
    //     $(function() {

    // })
  })
})
}

var addBadge = function () {

}
