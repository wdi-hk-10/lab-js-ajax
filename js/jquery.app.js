// Your solution here

$(document).ready(function(){

  // GET ALL OR ONE
  // $.ajax({
  //   url: "http://api.doughnuts.ga/doughnuts/1",
  //   method: "GET",
  //   success: function(response, status) {
  //     console.log(response);
  //     console.log(status);
  //   },
  //   error: function(response, status) {
  //     console.log(response);
  //     console.log(status);
  //   }
  // });


  //Start!!

  var idCounter = 0

  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts/",
    method: "GET",
    success: function(response, status) {
      response.forEach(function (elem, index){
        var newRow = '<li data-id="' + elem.id + '">'+elem.flavor+' - <i>'+elem.style+'</i> - <button type="button" class="btn btn-warning">edit</button><button type="button" class="btn btn-danger">delete</button></li>';
        $('#doughnuts').prepend(newRow);
      })
      editButton();
      deleteButton();
    },
    error: function(response, status) {

    }
  });

//'Save my doughnut'
$('#new-doughnut').off().on('submit', function(e){
  e.preventDefault();
  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts/",
    method: "POST",
    success: function(response, status) {
      response.flavor = $('input').eq(0).val();
      response.style = $('#new-doughnut-style').val();
      var saveIt = '<li data-id='+(parseInt(response.id)+idCounter)+'>'+response.flavor+' - <i>'+response.style+'</i> - <button type="button" class="btn btn-warning">edit</button><button type="button" class="btn btn-danger">delete</button></li>'
      $('#doughnuts').prepend(saveIt);
      editButton();
      deleteButton();
      idCounter++;
    },
    error: function(response, status) {
    }
  })
})



// Click edit button
var editButton = function(){
  $('.btn-warning').each(function (index, elem) {
    $(this).off().on('click', function(e){
      // e.preventDefault();
      $('#edit-modal').modal('show');
      console.log($(this).parent().data('flavor'))
      var currentStyle;
      var currentFlavor;

      $('#edit-doughnut-style').val(currentStyle);
      $('#edit-doughnut-flavor').val(currentFlavor);
      $('input').eq(3).removeAttr('data-id');
      $('input').eq(3).data().id = index
      saveEditButton();
    })
  })
};

// Click save button in Edit Doughnuts
var saveEditButton = function() {
  $('input').eq(3).off().on('click', function(e){
    e.preventDefault();
    var check = $('.btn-warning').length - $('input').eq(3).data().id;
    console.log (check)
    $.ajax({
      url: "http://api.doughnuts.ga/doughnuts/"+check,
      method: "PUT",
      success: function(response, status) {
        response.style = $('#edit-doughnut-style').val();
        response.flavor = $('#edit-doughnut-flavor').val();
        console.log (response)
        var updateIt = response.flavor+' - <i>'+response.style+'</i> - <button type="button" class="btn btn-warning">edit</button><button type="button" class="btn btn-danger">delete</button>'
        $('li[data-id="'+response.id+'"]').html(updateIt);
        editButton();
        deleteButton();
      }

    })
    $('#edit-modal').modal('hide');
  })




}


// Delete button
var deleteButton = function() {
  $('.btn-danger').each(function (index, elem) {
    $(this).off().on('click', function(e){
      //e.preventDefault();
      console.log('deleting');
      console.log(index)
      $.ajax({
        url: "http://api.doughnuts.ga/doughnuts/"+(index+1),
        method: "DELETE",
        success: function(response, status) {
        }

      })
      $(this).parent().remove();
    })
  })
}

// $(elem).parent().data().id


  // $.ajax({
  //   url: "http://api.doughnuts.ga/doughnuts/" + $(this).parent().data().id,
  //   method: "PUT",
  //   success: function(response, status) {
  //     $('#edit-modal').modal('show');
  //     $('input').eq(3).removeAttr('data-id');
  //     $('input').eq(3).attr('data-id', response.id);
  //   }
  // })


})
