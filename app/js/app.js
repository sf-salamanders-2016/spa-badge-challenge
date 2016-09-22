$(document).ready(function() {
  IndexPage();
  showTeacher();
  addBadge();
});


function IndexPage() {

  // this.baseUrl = 'https://localhost:3000'
  // var url = this.baseUrl + '/teachers'
  $.ajax({
      url: 'http://localhost:3000/teachers',
      method: 'GET',
      dataType: "json"
    })
   .done(function(result){
      var theTemplateScript = $("#teacher-template").html();
      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      // Define our data object
      var context= result
      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);
      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);
    })
   .fail(function(error){
      console.log("I am BAD HIT");
      console.log(error)
   })
}

var showTeacher = function() {
  $(".content-placeholder").on("click", "a", function(event) {
    event.preventDefault();
    var id =  $(this).attr("href");
    $(".badge_container").toggle();
    $(".badge_container").empty();
    $(this).parent().find(".badge_container").load("_badges_view.html");
    $.ajax({
      url: 'http://localhost:3000/teachers/' + id,
      method: 'get',
      dataType: 'json'
    })
    .done(function(result) {
      console.log(result);
      var theTemplateScript = $("#badge-template").html();
      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
      // Define our data object
      var context = result
      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);
      // Add the compiled html to the page
      $('.badges-placeholder').html(theCompiledHtml);
    })
  })
}

var addBadge = function() {
  $(".add-badge").on("click", "#submit_slogan", function(event) {
    event.preventDefault();

  });
}
