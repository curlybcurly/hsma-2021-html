const container = document.querySelector("#box");
const begriffe = ["Hans", "Dampf", "Wurst"];

let wort = begriffe[Math.floor(Math.random() * begriffe.length)];

for (var i = 0; i < wort.length; i++) {
  const buchstabe = document.createElement("div");
  buchstabe.textContent = wort[i];

  const newOrder = Math.floor(Math.random() * wort.length);
  buchstabe.style.order = newOrder.toString();

  container.appendChild(buchstabe);
}
