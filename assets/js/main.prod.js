var bodySkin = document.getElementsByClassName("body-skin");
totalBodySkin = bodySkin.length;

for (let i = 0; i < totalBodySkin; i++) {
    bodySkin[i].addEventListener("change"), () => {
        console.log("ASe,")
    }
}

// const bodySkin = document.querySelectorAll(".body-skin"),
//   totalBodySkin = bodySkin.length;

// for (let i = 0; i < totalBodySkin; i++) {
//   bodySkin[i].addEventListener("change", function() {
//     if (this.value === "night") {
//       document.body.className = "dark";
//     } else {
//       document.body.className = "light";
//     }
//   })
// }

// document.getElementsByClassName(".toggle-style-switcher").addEventListener("click", () => {
//     console.log("Asem")
//   document.getElementsByClassName(".style-switcher").classList.toggle("open");
// })