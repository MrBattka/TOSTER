
const black = document.getElementById("black")
const orange = document.getElementById("orange")
const pink = document.getElementById("pink")
const yellow = document.getElementById("yellow")

const colorList = document.getElementById("color_list")

const selectOptionsColor = document.getElementById("select_options_color")

const selectOptionsColorTxt = document.getElementById("select_options_color_txt")

selectOptionsColor.addEventListener("click", () => {
    colorList.style.display = "flex"
})

black.addEventListener("click", () => {
    colorList.style.display = "none"
    selectOptionsColorTxt.innerText = "BLACK"
})

orange.addEventListener("click", () => {
    colorList.style.display = "none"
    selectOptionsColorTxt.innerText = "ORANGE"
})

pink.addEventListener("click", () => {
    colorList.style.display = "none"
    selectOptionsColorTxt.innerText = "PINK"
})

yellow.addEventListener("click", () => {
    colorList.style.display = "none"
    selectOptionsColorTxt.innerText = "YELLOW"
})