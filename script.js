const body = document.querySelector("body");
const edge = document.querySelector(".edge");

const container = document.querySelector(".container");

const preContainer = document.createElement("div");
preContainer.classList.add("pre-container");
edge.insertBefore(preContainer, container);

const button = document.createElement("button");
button.classList.add("reset");
button.textContent = "Reset grid!";
preContainer.appendChild(button);
//
function generateBoxes() {
  let fragment = new DocumentFragment();
  let numberOfRows = 16;
  let numberOfColumns = 16;
  for (let i = 0; i < numberOfColumns; i++) {
    {
      const column = document.createElement("div");
      column.classList.add("column");

      for (let j = 0; j < numberOfRows; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        fragment.appendChild(column);
      }
    }
  }
  container.appendChild(fragment);
}
function getRandomColor() {
  function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  const color = `rgba(${randomNumber(255)}, ${randomNumber(
    255
  )}, ${randomNumber(255)}, ${1})`;
  return color;
}
//
generateBoxes();

let randomColor = getRandomColor();
const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
  row.addEventListener("mouseenter", (e) => {
    e.target.style.background = randomColor;
  });
});
rows.forEach((row) => {
  row.addEventListener("touchstart", (e) => {
    e.target.style.background = randomColor;
  });
});
//
//
//
//

const generateNewBoxes = function () {
  function removeEverything() {
    const columns = document.querySelectorAll(".column");
    columns.forEach((column) => {
      column.remove();
    });
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.remove();
    });
  }
  removeEverything();

  const newBoxes = function () {
    let buttonReset = prompt("Choose up to 100 rows");
    while (buttonReset <= 0 || buttonReset > 100 || !Number(buttonReset)) {
      buttonReset = prompt("Choose up to 100 rows");
    }

    let fragment = new DocumentFragment();
    let selection = buttonReset;
    let numberOfRows = selection;
    let numberOfColumns = selection;

    for (let i = 0; i < numberOfColumns; i++) {
      {
        const column = document.createElement("div");
        column.classList.add("column");

        for (let j = 0; j < numberOfRows; j++) {
          const row = document.createElement("div");
          row.classList.add("row");
          column.appendChild(row);
          fragment.appendChild(column);
        }
      }
    }
    container.appendChild(fragment);
  };
  const getRandomColor = function () {
    function randomNumber(number) {
      return Math.floor(Math.random() * (number + 1));
    }
    const color = `rgba(${randomNumber(255)}, ${randomNumber(
      255
    )}, ${randomNumber(255)}, ${1})`;
    return color;
  };
  //
  newBoxes();

  let randomColor = getRandomColor();
  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    row.addEventListener("mouseenter", (e) => {
      e.target.style.background = randomColor;
    });
  });

  rows.forEach((row) => {
    row.addEventListener("touchstart", (e) => {
      e.target.style.background = randomColor;
    });
  });
};

button.addEventListener("click", () => {
  generateNewBoxes();
});
button.addEventListener("touch", () => {
  generateNewBoxes();
});
