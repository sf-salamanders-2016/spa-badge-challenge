$(document).ready(function () {
  loadStudents();
});



var loadStudents = function() {
    url = "http://sample-badges-api.herokuapp.com/teachers"
    $.ajax({
      url: url,
      method: "get"
    })
    .done(function(response){
      console.log(response[0]);
      for(var i=0; i<response.length; i++) {
        var id = response[i]["id"];
        var name = response[i]["name"];
        $("#student-list").append(
            "<li><a href='/teachers/" + id +"'>" + name + "</a></li>"
          );
      }
    })

}
