$(document).ready(function() {
  IndexPage();
});


function IndexPage() {

  // this.baseUrl = 'https://localhost:3000'
  // var url = this.baseUrl + '/teachers'
  $.ajax(
    url:'http://localhost:3000/teachers',
    method: 'GET',
    dataType: "json"
    )
   .done(function(result){
    console.log("I am hit");
    console.log(result)
    })
}


