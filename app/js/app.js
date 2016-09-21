$(document).ready(function() {
  IndexPage();
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
        // var data = result.data
        var context= [
          {
            id: 1,
            name: "Assunta",
            created_at: "2016-09-20T21:26:52.033Z",
            updated_at: "2016-09-20T21:26:52.033Z"
          },
          {
            id: 2,
            name: "Frank",
            created_at: "2016-09-20T23:19:09.458Z",
            updated_at: "2016-09-20T23:19:09.458Z"
          }
          ];

        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $('.content-placeholder').html(theCompiledHtml);
      console.log("I am hit");
      console.log(result)
    })
   .fail(function(error){
      console.log("I am BAD HIT");
      console.log(error)
   })
}


