// ihtiyaç duyulan elementler

const fullnameInput = document.getElementById('fullName');
const phoneInput = document.getElementById('phone');
const saveBtn = document.getElementById('saveBtn');
const listPeople = document.getElementById('listPeople');
const searchInput = document.getElementById('search');

// initial people list

const people = [];

// events

saveBtn.addEventListener('click', function () {
  if (fullnameInput.value === '' || phoneInput.value === '') {
    alert('Can not be left blank');

    return;
  }

  const newPerson = {
    fullname: fullnameInput.value,
    phonenumber: phoneInput.value,
  };

  people.push(newPerson);
  listPeopleFunc(people);
  console.log(people);
  fullnameInput.value = ' ';
  phoneInput.value = ' ';
});
searchInput.addEventListener('keyup', function (e) {
  var tempArray = people.filter((item) =>
    item.fullname.includes(e.target.value)
  );
  listPeopleFunc(tempArray);
});
// functions

function listPeopleFunc(parametre) {
  listPeople.innerHTML = '';
  if (parametre.length === 0) {
    listPeople.innerHTML =
      '<p style="color:red; font-size:50px";>No record to see</p>';
  } else {
    for (let i = 0; i < parametre.length; i++) {
      const div = document.createElement('div');
      div.classList.add('nameBar');
      const h3 = document.createElement('h3');
      h3.innerText = parametre[i].fullname;
      const p = document.createElement('p');
      p.innerText = parametre[i].phonenumber;
      div.appendChild(h3);
      div.appendChild(p);
      listPeople.appendChild(div);
    }
  }
}
