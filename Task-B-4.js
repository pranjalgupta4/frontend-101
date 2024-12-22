// User Inputs
do {
  var tot_card_num = parseInt(
    prompt("Enter number of total cards_collection"),
    10
  );
} while (!/^\d+$/.test(tot_card_num));
do {
  var card_num = parseInt(
    prompt(
      "Enter number of cards_collection to display at once (can't be more than total cards_collection)"
    ),
    10
  );
} while (!/^\d+$/.test(card_num) || card_num > tot_card_num);

document.documentElement.style.setProperty("--columns", `${card_num}`);

// Variable Declaration
let main = document.getElementsByTagName("main")[0];
let nav = document.getElementsByClassName("nav")[0];
let num_collection = Math.ceil(tot_card_num / card_num);
let x_coord = 0;
let num = 1;
let num2 = card_num;

for (let i = 1; i <= num_collection; i++) {
  // Creation of Collection boxes
  let ele = document.createElement("div");
  ele.classList.add("collection");
  ele.style.transform = `translateX(calc(${x_coord}%))`;
  ele.id = `coll${i}`;

  x_coord += 100;

  // Creation of Cards
  while (num <= num2) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = num < 10 ? "0" + num : num;
    ele.appendChild(card);
    num++;
  }
  num2 += card_num;
  if (i == num_collection - 1) num2 = tot_card_num;

  if (i == num_collection && i != 1) {
    ele.style.display = "flex";
    Array.from(ele.children).forEach((item) => {
      item.style.width = window
        .getComputedStyle(document.getElementById("coll1").children[0])
        .getPropertyValue("width");
      item.style.flex = "none";
    });
  }
  main.appendChild(ele);
  if (card_num < 15) {
    document.getElementById(`coll${i}`).style.gap = `20px`;
  }
  document.getElementById(`coll${i}`).style.fontSize = `calc(${window
    .getComputedStyle(document.getElementById("coll1").children[0])
    .getPropertyValue("height")} * 0.5)`;

  // Creation of Scroll dots
  let dot = document.createElement("span");
  dot.classList.add("circle");
  dot.id = i;
  dot.addEventListener("click", () => {
    x_coord = (dot.id - 1) * -100;
    slider();
  });
  nav.appendChild(dot);
}

document.getElementById(1).style.backgroundColor = "white";
setInterval(slider, 5000);
x_coord = -100;

// Function to Move the carousel
function slider() {
  if (num_collection != 1) {
    let x_coord2 = x_coord;
    for (let i = 1; i <= num_collection; i++) {
      document.getElementById(
        `coll${i}`
      ).style.transform = `translateX(calc(${x_coord2}%))`;
      document.getElementById(i).style.backgroundColor = "transparent";
      x_coord2 += 100;
    }
    document.getElementById(x_coord * -0.01 + 1).style.backgroundColor =
      "white";
    x_coord -= 100;
    if (x_coord * -0.01 > num_collection - 1) x_coord = 0;
  }
}
