let form = document.querySelector("#form");
let list = document.querySelector("#list");
let item = document.querySelector("#item");


form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    list.innerHTML += "<li>" + item.value + "</li>";
    store();
    item.value = "";
  }
);
list.addEventListener(
  "click",
  function (e) {
    if (e.target.classList.contains("checked")) {
      e.target.parentNode.removeChild(e.target);
    } else {
      e.target.classList.add("checked");
    }
    store();
  }
);

function store() {
  window.localStorage.myitems = list.innerHTML;
}


function getValues() {
  let storedValues = window.localStorage.myitems;
  if (!storedValues) {
    list.innerHTML = "";
  } else {
    list.innerHTML = storedValues;
  }
}

getValues();