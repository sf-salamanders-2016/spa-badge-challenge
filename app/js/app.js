$(function () {
// Grab the template script
var theTemplateScript = $("#address-template").html();

// Compile the template
var theTemplate = Handlebars.compile(theTemplateScript);

// Define our data object
var context={
  people: [
  {id: "1", name: "Seba", badges: [ { badge_name: "Most Chilean", vote_count: "34", person_id: "1"},] } ,
  {id: "2", name: "Max", badges: [ { badge_name: "Most Likely to Sound an Airhorn", vote_count: "34", person_id: "2"},] } ,
  {id: "3", name: "Hunter", badges: [ { badge_name: "Most Sardonic", vote_count: "34", person_id: "3"}, ] }
  ]
};

// Pass our data to the template
var theCompiledHtml = theTemplate(context);

// Add the compiled html to the page
$('.content-placeholder').html(theCompiledHtml);
});
