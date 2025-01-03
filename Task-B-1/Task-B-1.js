let checkboxes = document.getElementsByTagName("input");
let keyPressed = {};
let indx = 0;

document.addEventListener("keydown", (event) => (keyPressed[event.key] = true));
document.addEventListener("keyup", (event) => (keyPressed[event.key] = false)); // to create the effect of holding keys

for (let item of checkboxes) {
  item.addEventListener("change", () => {
    let checkboxesArray = Array.from(checkboxes);
    let i = checkboxesArray.indexOf(item);

    if (keyPressed["Shift"] && item.checked) checker(i);
    if (item.checked) indx = i; // starting index taken only when checked
  });
}

function checker(indx2) {
  let step = indx < indx2 ? 1 : -1;
  for (let i = indx; i !== indx2 + step; i += step) {
    checkboxes[i].checked = true; //we take starting index from last checked and final index from input and then check all in between
  }
}
