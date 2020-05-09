function Submit(e) {
  event.preventDefault();
  name = document.getElementById('name').value;
  const regName = /^[a-zA-Z]+$/;
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const age = document.getElementById('ageId').value;
  const date = Date.parse(year + "-" + month + "-" + day);
  const getSec = Date.now() - date;
  const getDate = new Date(getSec);
  const getYear = Math.abs(getDate.getUTCFullYear() - 1970);
  const checkbox = $('input[type="checkbox"]:checked').not('#consent');
  const about = document.getElementById('about').value;
  const top5 = document.getElementById('top5 Songs').value;
  const shower = document.getElementById('showerTaughts').value;

  if (regName.test(name) && name && getYear == age && checkbox.length == 5 && about && top5 && shower) {
    Email.send({
      SecureToken: "c3ef64d7-dfb7-4b87-9db7-d8ab6474a6b3",
      To: 'testaleksandras@gmail.com',
      From: "testaleksandras@gmail.com",
      Subject: "Tnider",
      Body: $('#Tnider').serializeArray()
    })
    modal = document.getElementById('modal');
    cross = document.getElementsByClassName('close')[0];
    modal.style.display = "flex";
    cross.onclick = function () {
      display();
    }
    window.onclick = function (event) {
      if (event.target == modal) {
        display();
      }
    }
    document.getElementById('error').innerText = "";
    document.getElementById('Tnider').reset()
    document.getElementById('submit').disabled = true;
  }
  else {
    error = document.getElementById('error');
    error.innerText = "";
    if (!regName.test(name) || !name) {
      error.innerText += "Please enter your name \n";
    }
    if (getYear != age) {
      alert(getYear, age);
      error.innerText +="Age and birthday don't match" + getYear + " " + age + "\n";
    }
    if (checkbox.length != 5) {
      error.innerText +="Please select exactly 5 inerests\n";
    }
    if (!about || !top5 || !shower) {
      error.innerText +="All textareas needs to be filled";
    }
  }
}

document.getElementById('consent').addEventListener('change', (e) => {
  if (e.target.checked) {
    document.getElementById('submit').disabled = false;
  }
  else {
    document.getElementById('submit').disabled = true;
  }
})

window.addEventListener("click", () => {
  sound = document.querySelector('audio');
  sound.play();
});

function checkall() {
  check = document.getElementById('checkal');
  checkbox = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkbox.length; i++)
    checkbox[i].checked = true;

}

function uncheckall() {
  check = document.getElementById('uncheck');
  checkbox = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkbox.length; i++)
    checkbox[i].checked = false;

}

$(function () {
  const $select = $(".year");
  const date = new Date();
  for (i = 100; i <= date.getFullYear() - 18; i++) {
    $select.append($('<option></option>').val(i).html(i))
  }
  const $select2 = $(".month");
  const month = ["April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"]
  for (i = 0; i <= 11; i++) {
    $select2.append($(`<option></option>`).val(month[i]).html(month[i]))
  }
  const $select3 = $(".day");
  for (i = 1; i <= 31; i++) {
    $select3.append($('<option></option>').val(i).html(i))
  }
});

function display() {
  modal.style.display = "none";
}




