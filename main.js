let btnOpen = document.querySelector(".btnOpen");
let section = document.querySelector("section");
let cover = document.querySelector(".cover");
let close = document.querySelector(".close");


const closeBox = () => {
    section.style.top = "-400px";
    cover.style.display="none";
};

btnOpen.addEventListener("click", ()=>{
    section.style.top="40px";
    cover.style.display="block";
})

close.addEventListener("click", ()=>{
    closeBox();
});

cover.addEventListener("click", ()=>{
    closeBox();
});