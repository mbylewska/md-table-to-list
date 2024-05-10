let converter = new showdown.Converter();
converter.setFlavor("github");
converter.setOption("table", true);
(text = //here should be markdown table
  "| Prislisten er oppdatert 13/3 - 24  | Pris | src |\n" +
  "|:------|:-------:|:-------:|\n" +
  "|Bankkort voksen, årspriaws   | 350 kr* |www.mdn.com|\n" +
  "|Bankkort voksen   |  |www.mdn.com|\n" +
  "|Bankkort  årspriaws   | 578 kr* |www.mdn.com|\n" +
  "|Bankkort test   | 267 kr* | - |\n" +
  "| Bankkort ungdom, årspris | 0 kr  |www.google.com|"),
  (html = converter.makeHtml(text));

let colNumber = 2; // here can it be determinate from which column take results
printResult = document.getElementById("result");
let list = document.getElementById("list");
const options = [];
const results = [];
(function () {
  document.getElementById("md").innerHTML = html;

  let table = document.getElementsByTagName("table")[0];
  let rows = table.rows.length;

  for (let i = 0; i < rows; i++) {
    let firstCol = table.rows[i].cells[0];
    let secondCol = table.rows[i].cells[colNumber];
    options.push(firstCol.innerHTML);
    results.push(secondCol.innerHTML);
  }

  // populate list
  for (let i = 0; i < options.length; i++) {
    let opt = options[i];
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = i;
    list.appendChild(el);
  }

  const select = document.getElementById("list");

  select.addEventListener("change", function handleChange(event) {
    if (colNumber == 2) {
      // create a button with link
      printResult = document.getElementById("result2");
      document.getElementById("result").classList.add("hidden");
      document.getElementById("result2").classList.remove("hidden");
      printResult.src = results[event.target.value];
      printResult.innerHTML = results[event.target.value];
    } else {
      // create just paragraph
      printResult.innerHTML = results[event.target.value];
    }
  });
})();
