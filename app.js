let calcText=document.querySelector(".calcText")
let calcNumber=document.querySelector(".calcNumber")
let ac=document.querySelector("#ac")

//*burada calcNumber alanında bir click ekledim ve nereye tıklanacağı belli olmadığı için e parametresi ekledim
//*if çevirdim ve tıkladığım alanın classında number varsa diyerek şart oluşturdum
//*tekrar bir if çevirmem gerekli çünkü ben AC butonuna basınca alanda 0 gözüksün number butonuna bastığımda da 0 giderek sayılar üzerine eklenmye devam etsin diyorum
//*o yüzden tekrar bir if döndürmek zorundayım calText içerisinde 0 varsa onu siliyorum ve altta tıklanan elemanları üzerine eklerek yazdırıyorum

document.querySelector(".calcNumber").addEventListener("click",function(e){
    if(e.target.className.includes("number")){
//*burada if döndürmeyip direkt calcText="" yazsaydım sürekli içeriyi boşaltıp number ekleyecekti sayılar yan yana gelmeyecekti
        if(calcText.value==0){
            calcText.value ="";// Eğer sadece 0 varsa onu sil 
        }
        calcText.value+=e.target.innerHTML;
        ac.innerHTML="C"
    }
});
//*AC butonuna tıklanıldığında alandakı tüm numaralar sıfırladım yani direkt sıfır değeri verdim ve içeriği C olan butonun içeriğni AC yaptım
ac.addEventListener("click",function(){
    calcText.value=0
    $("#ac").text("AC")
})






