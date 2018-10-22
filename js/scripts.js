var arrayThings = [];


$(document).ready(function() {
  $(".things").submit(function(event) {
    var favThings = $("input#userThings").val();
    arrayThings.push(favThings);
    $(".output").prepend("<li>" + arrayThings + "</li>");

    event.preventDefault();
  });
});
