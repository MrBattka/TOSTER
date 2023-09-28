
const size_2 = document.getElementById("size_2")
const size_3 = document.getElementById("size_3")
const size_4 = document.getElementById("size_4")
const size_5 = document.getElementById("size_5")

const sizeList = document.getElementById("size_list")
const selectOptionsSize = document.getElementById("select_options_size")
const selectOptionsSizeTxt = document.getElementById("select_options_size_txt")

selectOptionsSize.addEventListener("click", () => {
    sizeList.style.display = "flex"
})

size_2.addEventListener("click", () => {
    sizeList.style.display = "none"
    selectOptionsSizeTxt.innerText = "2"
})

size_3.addEventListener("click", () => {
    sizeList.style.display = "none"
    selectOptionsSizeTxt.innerText = "3"
})

size_4.addEventListener("click", () => {
    sizeList.style.display = "none"
    selectOptionsSizeTxt.innerText = "4"
})

size_5.addEventListener("click", () => {
    sizeList.style.display = "none"
    selectOptionsSizeTxt.innerText = "5"
})