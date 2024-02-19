const namn = document.getElementById("namn")
const namnError = document.getElementById("namnError")


namn.addEventListener("input",()=>{
    if(namn.value.length > 5){
        namnError.style.display="none";
    }else{
        namnError.style.display="block";
    }
    
})