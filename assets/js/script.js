const btnLogin = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    const fields = [ ... document.querySelectorAll(".input-block input")]

    fields.forEach(field => {
        if (field.value == ""){
            form.classList.add("validate-error")
        }
    });

    const formError = document.querySelector(".validate-error");
    if (formError) {
        formError.addEventListener("animationend", (e) => {
            if (e.animationName == "nono") {
                formError.classList.remove("validate-error");
            }
        });
    } else {
        form.classList.add("form-hide");
    }
});

form.addEventListener("animationstart", (e) => {
    if (e.animationName == "down"){
        document.querySelector("body").style.overflow = "hidden";
    }
});

form.addEventListener("animationend", (e) => {
    if (e.animationName == "down"){
        form.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});

const ulSquares = document.querySelector("ul.squares")

for (let i = 0; i < 11; i ++) {
    const li = document.createElement("li");
    const random = (min, max) => Math.random() * (max - min) + min;
    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);
    const radius = random(5, 10);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    li.style.borderRadius = `${radius}px`;
    
    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`

    li.style.animationDelay = `${delay}s`;

    ulSquares.appendChild(li);
}