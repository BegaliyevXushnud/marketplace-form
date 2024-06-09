
let header = document.querySelector(".header");
let toggleBtn = document.querySelector(".header__btn-hamburger");
let headerList = document.querySelector(".header__list");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("header__shrink");
  } else {
    header.classList.remove("header__shrink");
  }
});

toggleBtn.addEventListener("click",()=>{
  headerList.classList.toggle("header__list-show");
})


function hideIcon(input) {
    const icon = input.nextElementSibling;
    if (icon) {
        icon.style.opacity = '0';
    }
}

function showIcon(input) {
    if (input.value === '') {
        const icon = input.nextElementSibling;
        if (icon) {
            icon.style.opacity = '1';
        }
    }
}

function showPrompt(input) {
    const promptValue = prompt('Please enter your ' + input.placeholder);
    if (promptValue !== null) {
        input.value = promptValue;
        hideIcon(input);
    } else {
        showIcon(input);
    }
}