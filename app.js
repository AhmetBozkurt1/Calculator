let calcText=document.querySelector(".calcText")
let calcNumber=document.querySelector(".calcNumber")
let ac=document.querySelector("#ac")

//*calcNumber alanında tıklanan elemanın classı eğer number ise içeriğini imputa yazdırdım sürekli üzeine eklmesi için += kullandım


let click=0
calcNumber.addEventListener("click",function(e){
    if(e.target.className.includes("number")){
        click++
        let clickSayi=+e.target.innerHTML
        calcText.value+=clickSayi
        ac.innerHTML="C"
        let sayilar=(calcText.value).split("")
        console.log(sayilar);
        let remove="0"
        let index=sayilar.indexOf(remove)
        console.log(index);
        if(index>-1){
            sayilar.splice(index,1)
            let x=sayilar.join("")
            calcText.value+=x
        }
    }
})


//*
$(".calcNumber").click(function(e){
    if(e.target.id.includes("ac")){
        calcText.value=0
        $("#ac").text("AC")
    }
})
// ac.addEventListener("click",function(){
//     calcText.value=0
//     ac.innerHTML="AC"
// })


