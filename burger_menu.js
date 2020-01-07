    const btnBurger = document.querySelector(".container");
    const barup = document.querySelector("#bar-up");
    const barmiddle = document.querySelector("#bar-middle");
    const bardown = document.querySelector("#bar-down");
    const menu = document.querySelector(".menu");

    btnBurger.addEventListener("click", ChangeIcon);

    function ChangeIcon() {
        barup.classList.toggle("barupactive");
        bardown.classList.toggle("bardownactive");
        barmiddle.classList.toggle("barmiddleactive");
        btnBurger.classList.toggle("movedright");

        if (menu.classList[0] == ("expand")) {
            console.log("shouldn't");
            menu.classList = "";
            menu.classList.add("retract");
        } else {
            menu.classList = "";
            menu.classList.add("expand");
            console.log("firstrun");
        }
    }
