"use strict";
/* -------------------------------------------------------------------------- */
/*                                    START                                   */
/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
/* -------------------------- connect DOOM Contents -------------------------- */
    const relative = document.querySelectorAll(".relative");
    const container = document.querySelector(".container");
    const span = document.querySelector("span");
    const p = document.querySelector("p");
/* -------------------------- create arrow function ------------------------- */
    const btnHideShow = () => {
/* --------------------------- content extraction --------------------------- */
    relative.forEach((items) => {
/* ------------------------------ add an event ------------------------------ */
        items.addEventListener("click", () => {
/* ------------------------- add and remove classes ------------------------- */
        items.classList.toggle("show");
        container.classList.toggle("backgroundColor");
        span.classList.toggle("activison");
/* ----------------------------- alert the user ----------------------------- */
        setTimeout(function(){
            p.classList.toggle("p");
        },1400)
        });
    });
    };
    btnHideShow();
});
/* -------------------------------------------------------------------------- */
/*                                     END                                    */
/* -------------------------------------------------------------------------- */
