$(document).ready(function(){

  $.ajax({
    url: "http://api.doughnuts.ga/doughnuts",
    method: "GET",
    success: function (response, status){
      for (x=0;x<response.length;x++){
        $("#doughnuts").prepend("<li data-id="+response[x].id+">"+response[x].flavor+" - "+response[x].style+" - "+"<button type=\"button\" class=\"btn btn-warning edit-button\" data-id="+response[x].id+">edit</button><button type=\"button\" class=\"btn btn-danger del-button\" data-id="+response[x].id+">delete</button></li>");
      }
      bindEditButton();
      bindDelButton();
    },
    error: function (response, status){
      console.log(response);
      console.log(status);
    }
  });

  $("#new-doughnut").on("submit",function(e){
    e.preventDefault();
    var dStyle = $("#new-doughnut-style").val();
    var dFlavor = $("#new-doughnut-flavor").val();
    $.ajax({
      url: "http://api.doughnuts.ga/doughnuts",
      method: "POST",
      data:{
        style: dStyle,
        flavor: dFlavor
      },
      success: function (response, status){
        $("#doughnuts").prepend("<li data-id="+response.id+">"+response.flavor+" - "+response.style+" - "+"<button type=\"button\" class=\"btn btn-warning edit-button\" data-id="+response.id+">edit</button><button type=\"button\" class=\"btn btn-danger del-button\" data-id="+response.id+">delete</button></li>");
      },
      error: function (response, status){
        console.log(response);
        console.log(status);
      }
    })
  });

  function bindEditButton(){
    $(".edit-button").on("click",function(){
      $("#edit-modal").modal("show");
      var check = this.dataset.id;
      $("#edit-doughnut").on("submit",function(e){
        e.preventDefault();
        var first = $("#edit-doughnut-style").val();
        var second = $("#edit-doughnut-flavor").val();
        $.ajax({
          url: "http://api.doughnuts.ga/doughnuts/"+check,
          method: "PUT",
          data:{
            style:first,
            flavor: second
          },
          success: function (response, status){
            $("#edit-modal").modal("hide");
            $("li[data-id="+check+"]").html(response.flavor+" - "+response.style+" - "+"<button type=\"button\" class=\"btn btn-warning edit-button\" data-id="+response.id+">edit</button><button type=\"button\" class=\"btn btn-danger del-button\" data-id="+response.id+">delete</button>")
          },
          error: function (response, status){
            console.log(response);
            console.log(status);
          }
        })
      })
    })
  };

  function bindDelButton(){
    $(".del-button").one("click",function(){
      var check = this.dataset.id;
      $.ajax({
        url: "http://api.doughnuts.ga/doughnuts/"+check,
        method: "DELETE",
        success: function (response, status){
          $("li[data-id="+check+"]").remove();
        },
        error: function (response, status){
          console.log(response);
          console.log(status);
        }
      })
    })
  };

});
