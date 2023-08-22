let calcText=document.querySelector(".calcText")
let calcNumber=document.querySelector(".calcNumber")
let ac=document.querySelector("#ac")

calcNumber.addEventListener("click",function(e){
    if(e.target.className.includes("number")){
        let clickSayi=+e.target.innerHTML
        calcText.value+=clickSayi
        ac.innerHTML="C"
    }
})

ac.addEventListener("click",function(){
    calcText.value=0
    ac.innerHTML="AC"
})


