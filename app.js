let calcText=document.querySelector(".calcText")
let calcNumber=document.querySelector(".calcNumber")
let ac=document.querySelector("#ac")

//*burada calcNumber alanında bir click ekledim ve nereye tıklanacağı belli olmadığı için e parametresi ekledim
//*if çevirdim ve tıkladığım alanın classında number varsa diyerek şart oluşturdum
//*tekrar bir if çevirmem gerekli çünkü ben AC butonuna basınca alanda 0 gözüksün number butonuna bastığımda da 0 giderek sayılar üzerine eklenmye devam etsin diyorum
//*o yüzden tekrar bir if döndürmek zorundayım calText içerisinde 0 varsa onu siliyorum ve altta tıklanan elemanları üzerine eklerek yazdırıyorum

let sayi1;
let operation;

document.querySelector(".calcNumber").addEventListener("click",function(e){
    if(e.target.className.includes("number")){
//*burada if döndürmeyip direkt calcText="" yazsaydım sürekli içeriyi boşaltıp number ekleyecekti sayılar yan yana gelmeyecekti
        if(calcText.value==0){
            calcText.value ="";// Eğer sadece 0 varsa onu sil 
        }
        calcText.value+=e.target.innerHTML;
        ac.innerHTML="C"
    }
    
    if(e.target.id.includes("bolum")){
        sayi1=+calcText.value
        operation="bolum"
        calcText.value=""
    }
    else if(e.target.id.includes("carpım")){
        sayi1=+calcText.value
        operation="carpım"
        calcText.value=""
    }
    else if(e.target.id.includes("eksi")){
        sayi1=+calcText.value
        operation="eksi"
        calcText.value=""
    }
    else if(e.target.id.includes("topla")){
        sayi1=+calcText.value
        operation="topla"
        calcText.value=""
    }

    if(e.target.id.includes("eşit")){
        if(operation==="bolum"){
            let sayi2=+calcText.value
            if(sayi2!==0) {
                calcText.value=(sayi1/sayi2).toFixed(6)
            }
            else{
                calcText.value="Hata!";
            }
        }
        else if(operation==="carpım"){
            let sayi2=+calcText.value
            calcText.value=sayi1*sayi2
        }
        else if(operation==="eksi"){
            let sayi2=+calcText.value
            calcText.value=sayi1-sayi2
        }
        else if(operation==="topla"){
            let sayi2=+calcText.value
            calcText.value=sayi1+sayi2
        }
    }
});

//*AC butonuna tıklanıldığında alandakı tüm numaralar sıfırladım yani direkt sıfır değeri verdim ve içeriği C olan butonun içeriğni AC yaptım
ac.addEventListener("click",function(){
    calcText.value=0
    $("#ac").text("AC")
})







