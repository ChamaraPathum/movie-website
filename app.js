const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    // console.log("you clicked to", i);
    // console.log(movieLists[i]);
    // movieLists[i].style.backgroundColor = "red"; //additionl
    // movieLists[i].style.backgroundColor = "translateX(-100px)"; //additionl
    clickCounter++;
    if (itemNumber - (5 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`; //.computedStyleMap(): This is likely a method that gets the computed style of the selected movie element. In JavaScript, the computedStyleMap() method is used to retrieve the computed CSS styles of an element.
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
  // console.log(movieLists[i].querySelectorAll("img").length); // 7
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".containor,.movie-list-title,.navbar-containor,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
