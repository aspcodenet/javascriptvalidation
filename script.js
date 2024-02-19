const namn = document.getElementById("namn")
const namnError = document.getElementById("namnError")


namn.addEventListener("blur",()=>{
    namnError.style.display="none";
})