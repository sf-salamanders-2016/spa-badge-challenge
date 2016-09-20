$(document).ready(function () {
  loadStudents();
  loadBadges();
});



var loadStudents = function() {
    url = "http://sample-badges-api.herokuapp.com/teachers"
    $.ajax({
      url: url,
      method: "get"
    })
    .done(function(response){
      console.log(response)
        var context = {
          student: response
        };
        $(function() {
          var theTemplateScript = $("#student-template").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          var theCompiledHtml = theTemplate(context);
          console.log(theCompiledHtml);
          $(document.body).append(theCompiledHtml);

        })
    })

}



var loadBadges = function() {
  $("#index-page").on("click", ".student-link", function(event) {
    console.log(event);
    event.preventDefault();
    var id = $(this).attr("id");
    url = "http://sample-badges-api.herokuapp.com/teachers/" + id
    $.ajax({
      url: url,
      method: "get"
    })
    .done(function(response){
        $("#student-container").hide();
        var context = {
          badge: response
        };
        $(function() {
          var theTemplateScript = $("#badges-list").html();
          var theTemplate = Handlebars.compile(theTemplateScript);
          var theCompiledHtml = theTemplate(context);
          console.log(theCompiledHtml);
          $(document.body).append(theCompiledHtml);
    })
  })
  })
}
