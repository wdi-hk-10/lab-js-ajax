// Your solution here
$(document).ready(function() {

  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts",
    method:"GET",
    success: function(response, status) {
      console.log(response);
      console.log(status);
      response.forEach(function(elem, index){
        // create new li
        //append each elem to the list
        var newRow = "<li>" + elem.flavor + " - <i>" + elem.style + '</i> -' + "<button type='button' class='btn btn-warning'>edit</button><button type='button' class='btn btn-danger'>delete</button></li>"
        $('#doughnuts').prepend(newRow);
      });
    },
    error: function(response,status) {
      console.log(response);
      console.log(status);
    }
  });

$('#new-doughnut').on("submit", function(e){
  e.preventDefault();
  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts",
    method:"POST",
    data: {
      style: $('#new-doughnut-flavor').val(),
      flavor: $('#new-doughnut-style').val()
    },
    success: function(response, status) {
      console.log(response);
      console.log(status);
      var flavor = response.flavor;
      var style = response.style;
      var newRow = "<li>" + flavor + " - <i>" + style + '</i> -' + "<button type='button' class='btn btn-warning'>edit</button><button type='button' class='btn btn-danger'>delete</button></li>"
      $('#doughnuts').prepend(newRow);
    },
    error: function(response,status) {
      console.log(response);
      console.log(status);
    }
  });
});
//   $.ajax({
//   url: "http://api.doughnuts.ga/doughnuts",
//   method:"POST",
//   data: {
//     style: "Jelly",
//     flavor: "Peanut"
//   },
//   success: function(response, status) {
//     console.log(response);
//     console.log(status);
//   },
//   error: function(response,status) {
//     console.log(response);
//     console.log(status);
//   }
// });



});