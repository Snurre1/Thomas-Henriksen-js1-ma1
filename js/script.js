const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question one

const cat = {
  complain: "Meow!",
  sayHello: function () {
    console.log(this.complain);
  },
};

cat.sayHello();

// question two

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// question three

heading.style.fontSize = "2em";

// question four

heading.classList.add("subheading");

// question five

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// question six

const resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";
resultsContainer.style.backgroundColor = "yellow";

// question seven

function myList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

myList(cats);

// question eight

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let catsAge = "Age unknown";
    if (cats[i].age) {
      catsAge = cats[i].age;
    }
    let html = "";

    html += `<div><h5>${cats[i].name}</h5>
    <p>${catsAge}</p></div>`;

    const newCats = document.querySelector(".cat-container");

    newCats.innerHTML += html;
  }
}
createCats(cats);
