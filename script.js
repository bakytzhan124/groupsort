const people = [
  "Алибек Нұрдәулет",
  "Аманыш Нұрасыл",
  "Аллаберген Мустафа",
  "Бейсебай Ақтілек",
  "Байдулла Ұлдана",
  "Еркін Әлімжан",
  "Естайұлы Нұрислам",
  "Жұмағали Қадірсұлу",
  "Жұмамұрат Санжар",
  "Жалгасов Ернар",
  "Жұмабай Каусар",
  "Жұмахан Әлихан",
  "Қазақ Күмісай",
  "Мырзамұрат Нұрғалым",
  "Нұрмұхамбет Дінмұхамет",
  "Орынбай Мейрамбек",
  "Орынбасар Айша",
  "Рустем Жанболат",
  "Сапарбай Ақерке",
  "Таджибай Ақмарал",
  "Тойлыбай Үміт",
  "Толыбай Ақмаржан",
  "Ұзақбай Сабит",
  "Шопан Олжас"
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function splitIntoGroups() {
  const shuffled = [...people];
  shuffle(shuffled);

  const groups = [[], [], [], []];
  shuffled.forEach((person, index) => {
    groups[index % 4].push(person);
  });

  const groupsDiv = document.getElementById("groups");
  groupsDiv.innerHTML = "";

  groups.forEach((group, i) => {
    const div = document.createElement("div");
    div.className = "group";
    div.innerHTML = `<h2>Топ ${i + 1}</h2><ul>${group.map(name => `<li>${name}</li>`).join("")}</ul>`;
    groupsDiv.appendChild(div);
  });
}
