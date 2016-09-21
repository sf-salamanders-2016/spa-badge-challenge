$(document).ready(function() {
  IndexPage();
});


function IndexPage() {
  console.log("I am hit");
  // this.baseUrl = 'https://localhost:3000'
  // var url = this.baseUrl + '/teachers'
  $.ajax({
    url:'https://localhost:3000/teachers',
    method: 'GET'
    // dataType: "json"
    })
  .done(function(result){
    console.log(result)
    })
}


