$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#contactName").val();
    var phoneNumberInput = parseInt($("input#phoneNumber").val());
    var emailInput = $("input#contactEmail").val();
    var addressInput = $("input#streetAddress").val();

    $(".contactName").text(nameInput);
    $(".phoneNumber").text(phoneNumberInput);
    $(".contactEmail").text(emailInput);
    $(".streetAddress").text(addressInput);

    $("ul#contactNames").prepend();

    event.preventDefault();
  });

    $("ul#contactNames").click(function() {
      $("ul#contactInformation").show();
    });

});
