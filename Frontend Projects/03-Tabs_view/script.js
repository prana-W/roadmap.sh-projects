const firstTab = document.querySelector("#first");
const secondTab = document.querySelector("#second");
const thirdTab = document.querySelector("#third");
const fourthTab = document.querySelector("#fourth");

const container = document.querySelector(".text-View");

const tabContainer = document.querySelector(".tab-List");

const p1 = document.querySelector("#first_cont");
const p2 = document.querySelector("#second_cont");
const p3 = document.querySelector("#third_cont");
const p4 = document.querySelector("#fourth_cont");

firstTab.addEventListener("click", (e) => {
  Array.from(tabContainer.children)
  .forEach((elem) => {
    console.log("removed!");
    elem.removeAttribute("class");
    console.log("removed!");
  });

  e.target.setAttribute("class", "active");

  Array.from(container.children)
  .forEach((elem) => {
    elem.setAttribute("hidden", "");
  });

  p1.removeAttribute("hidden");
});

secondTab.addEventListener("click", (e) => {
  Array.from(tabContainer.children)
  .forEach((elem) => {
    console.log("removed!");
    elem.removeAttribute("class");
    console.log("removed!");
  });

  e.target.setAttribute("class", "active");

  Array.from(container.children)
  .forEach((elem) => {
    elem.setAttribute("hidden", "");
  });

  p2.removeAttribute("hidden");
});

thirdTab.addEventListener("click", (e) => {
  Array.from(tabContainer.children)
  .forEach((elem) => {
    elem.removeAttribute("class");
    console.log("removed!");
  });

  e.target.setAttribute("class", "active");
  Array.from(container.children)
  .forEach((elem) => {
    elem.setAttribute("hidden", "");
  });

  p3.removeAttribute("hidden");
});

fourthTab.addEventListener("click", (e) => {
  Array.from(tabContainer.children)
  .forEach((elem) => {
    elem.removeAttribute("class");
    console.log("removed!");
  });

  e.target.setAttribute("class", "active");
  Array.from(container.children)
  .forEach((elem) => {
    elem.setAttribute("hidden", "");
  });

  p4.removeAttribute("hidden");
});
