function Submit(e) {
  event.preventDefault();

  console.log($('#Tnider').serializeArray());
  Email.send({
    SecureToken: "c3ef64d7-dfb7-4b87-9db7-d8ab6474a6b3",
    To: 'testaleksandras@gmail.com',
    From: "testaleksandras@gmail.com",
    Subject: "Tnider",
    Body: $('#Tnider').serializeArray()
  })
}

window.addEventListener("click", () => {
  sound = document.querySelector('audio');
  sound.play();
});

$(function () {
  const $select = $(".year");
  const date = new Date();
  for (i = 1; i <= date.getFullYear(); i++) {
    $select.append($('<option></option>').val(i).html(i))
  }
  const $select2 = $(".month");
  const month = [ "April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"]
  for (i = 0; i <= 11; i++) {
    $select2.append($(`<option></option>`).val(month[i]).html(month[i]))
  }
  const $select3 = $(".day");
  for (i = 1; i <= 31; i++) {
    $select3.append($('<option></option>').val(i).html(i))
  }
});





