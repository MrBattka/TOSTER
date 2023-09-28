
const blackImg = document.getElementById("black_img");
const orangeImg = document.getElementById("orange_img");
const pinkImg = document.getElementById("pink_img");
const yellowImg = document.getElementById("yellow_img");
const selectImg = document.getElementById("select_img");

setTimeout(() => {
  selectImg.classList.remove("black_animation");
}, [500]);
blackImg.style.pointerEvents = "none";

blackImg.addEventListener("click", (e) => {
  blackImg.classList.add("select");
  orangeImg.classList.remove("select");
  pinkImg.classList.remove("select");
  yellowImg.classList.remove("select");
  selectImg.src = "../assets/black.png";
  selectImg.classList.add("black_animation");

  if (blackImg.classList == "select") {
    blackImg.style.pointerEvents = "none";
  }

  orangeImg.style.pointerEvents = "auto";
  pinkImg.style.pointerEvents = "auto";
  yellowImg.style.pointerEvents = "auto";

  setTimeout(() => {
    selectImg.classList.remove("black_animation");
  }, [1000]);
});

orangeImg.addEventListener("click", (e) => {
  blackImg.classList.remove("select");
  orangeImg.classList.add("select");
  pinkImg.classList.remove("select");
  yellowImg.classList.remove("select");
  selectImg.src = "../assets/orange.png";
  selectImg.classList.add("orange_animation");

  if (orangeImg.classList == "select") {
    orangeImg.style.pointerEvents = "none";
  }

  blackImg.style.pointerEvents = "auto";
  pinkImg.style.pointerEvents = "auto";
  yellowImg.style.pointerEvents = "auto";

  setTimeout(() => {
    selectImg.classList.remove("orange_animation");
  }, [1000]);
});

pinkImg.addEventListener("click", (e) => {
  blackImg.classList.remove("select");
  orangeImg.classList.remove("select");
  pinkImg.classList.add("select");
  yellowImg.classList.remove("select");
  selectImg.src = "../assets/pink.png";
  selectImg.classList.add("pink_animation");

  if (pinkImg.classList == "select") {
    pinkImg.style.pointerEvents = "none";
  }

  blackImg.style.pointerEvents = "auto";
  orangeImg.style.pointerEvents = "auto";
  yellowImg.style.pointerEvents = "auto";

  setTimeout(() => {
    selectImg.classList.remove("pink_animation");
  }, [1000]);
});

yellowImg.addEventListener("click", (e) => {
  blackImg.classList.remove("select");
  orangeImg.classList.remove("select");
  pinkImg.classList.remove("select");
  yellowImg.classList.add("select");
  selectImg.src = "";
  selectImg.src = "../assets/yellow.png";
  selectImg.classList.add("yellow_animation");

  if (yellowImg.classList == "select") {
    yellowImg.style.pointerEvents = "none";
  }

  setTimeout(() => {
    selectImg.classList.remove("yellow_animation");
  }, [1000]);

  blackImg.style.pointerEvents = "auto";
  orangeImg.style.pointerEvents = "auto";
  pinkImg.style.pointerEvents = "auto";
});