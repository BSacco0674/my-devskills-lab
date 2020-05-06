var $addskill = []

$("#btn").on("click", function(evnt) {
    let toDo = $("#input").val();
    
    if (addskil) {
        var $newItem = $(`<tr>
        <td class="button"><button>X</button></td>
        <td class="text">${toDo}</td>
      </tr>`)
    }
    $("#add-skill").append($newItem)
    $("#input").val("")

})
$("#add-skill").on("click", "button", function() {
    $(this).closest('tr').fadeOut(750, function() {
      $(this).remove();
    });
  });