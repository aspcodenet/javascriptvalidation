const namn = document.getElementById("namn")
const namnError = document.getElementById("namnError")
const regno = document.getElementById("regno")
const regnoError = document.getElementById("regnoError")


console.log(validator)

regno.addEventListener("input",()=>{
    if(validator.isLicensePlate( regno.value, 'sv-SE')){
        regnoError.style.display="none";
    }else{
        regnoError.style.display="block";
    }
    
})


namn.addEventListener("input",()=>{
    if(namn.value.length > 5){
        namnError.style.display="none";
    }else{
        namnError.style.display="block";
    }
    
})