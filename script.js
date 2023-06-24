colour1 = document.querySelector(".colour1");
colour2 = document.querySelector(".colour2");
css = document.querySelector("h3")
background = document.querySelector(".container");

function setGradient() {
  background.style.background =
    "linear-gradient(to right , " + colour1.value + ", " + colour2.value + ")";

    css.innerHTML = background.style.background + ";"
    // or css.textContent = background.style.background + ";"
}

// colour1.addEventListener("input", setGradient);

colour2.addEventListener("input", setGradient);

