function Submit(e) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const regName = /^[a-zA-Z]+$/;
  const year = document.getElementById('year').value;
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const age = document.getElementById('ageId').value;
  const checkbox = $('input[type="checkbox"]:checked').not('#consent');
  const about = document.getElementById('about').value;
  const shower = document.getElementById('showerTaughts').value;
  const favorite = document.getElementById('favoriteActivity').value;
  const best = document.getElementById('bestLine').value;
  const worst = document.getElementById('worstLine').value;
  const ideal = document.getElementById('idealDate').value;
  const why = document.getElementById('why').value;
  
  let getAge = (new Date).getFullYear() - year - 1;

  if (getAge != age) {
    if ((new Date(`${year}-${month}-${day}`)).getMonth() < (new Date).getMonth()) {
      getAge = getAge + 1;
    } else if ((new Date(`${year}-${month}-${day}`)).getMonth() == (new Date).getMonth()) {
      if ((new Date(`${year}-${month}-${day}`)).getDate() <= (new Date).getDate()) {
        getAge = getAge + 1;
      }
    }
  }

  if (regName.test(favorite) && favorite && best && worst && ideal && why && name && getAge == age && checkbox.length == 5 && about && shower) {
    let form = '<ul>';
    ($('#Tnider').serializeArray()).forEach((el) => {
      form += `<li>${el.name}: ${el.value}</li>`
    })
    form += '</ul>';
    Email.send({
      SecureToken: "c3ef64d7-dfb7-4b87-9db7-d8ab6474a6b3",
      To: 'testaleksandras@gmail.com',
      From: "testaleksandras@gmail.com",
      Subject: "Tnider",
      Body: form
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
    if (!regName.test(favorite) || !favorite) {
      error.innerText += "Please enter your favorite activity \n";
    }
    if (getAge != age) {
      error.innerText +="Age and birthday don't match\n";
    }
    if (checkbox.length != 5) {
      error.innerText +="Please select exactly 5 inerests\n";
    }
    if (!about || !shower || !name || !best || !worst || !ideal || !why) {
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
  const songs = ['Dead Or Alive - You Spin Me Round (Like a Record) (Official Video).mp3', 'HEYYEYAAEYAAAEYAEYAA.mp3', 'Gunther oh you tuch my tralala paroles.mp3', 'O-Zone - Dragostea Din Tei (Lyrics).mp3', 'MC Hammer - U Can\'t Touch This (Lyrics) Not Muted!.mp3', 'Smash Mouth - I\'m a Believer (Lyrics) (Shrek).mp3', 'Toto - Africa (Official Video).mp3', 'a-ha - Take On Me (Official 4K Music Video).mp3', 'Mo-Do - Super Gut.mp3', 'Der Tourist feat. Friedrich Liechtenstein - Supergeil.mp3', 'Polish Cow (Full Version).mp3']
  const index = Math.floor((Math.random() * 11));
  sound = document.querySelector('audio');
  sound.src = `./music/${songs[index]}`;
  sound.play();
}, { once: true });

function checkall() {
  check = document.getElementById('checkal');
  checkbox = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkbox.length-1; i++)
    checkbox[i].checked = true;

}

function uncheckall() {
  check = document.getElementById('uncheck');
  checkbox = document.querySelectorAll('input[type=checkbox]');
  for (i = 0; i < checkbox.length-1; i++)
    checkbox[i].checked = false;

}

$(function () {
  Email.send({
    SecureToken: "c3ef64d7-dfb7-4b87-9db7-d8ab6474a6b3",
    To: 'testaleksandras@gmail.com',
    From: "testaleksandras@gmail.com",
    Subject: "Visited",
    Body: ''
  })
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




