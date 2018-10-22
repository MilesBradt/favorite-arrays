var arrayThings = [];


$(document).ready(function() {
  $(".things").submit(function(event) {
    var favThings = $("input#userThings").val();
    arrayThings.push(favThings);

    console.log(arrayThings);
    event.preventDefault();
  });
});
