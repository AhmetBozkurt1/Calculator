let calcText=document.querySelector(".calcText")
let calcNumber=document.querySelector(".calcNumber")
let ac=document.querySelector("#ac")

//*burada calcNumber alanında bir click ekledim ve nereye tıklanacağı belli olmadığı için e parametresi ekledim
//*if çevirdim ve tıkladığım alanın classında number varsa diyerek şart oluşturdum
//*tekrar bir if çevirmem gerekli çünkü ben AC butonuna basınca alanda 0 gözüksün number butonuna bastığımda da 0 giderek sayılar üzerine eklenmye devam etsin diyorum

let sayi1;
let operation;

document.querySelector(".calcNumber").addEventListener("click",function(e){
    if(e.target.className.includes("number")){
//*burada if döndürmeyip direkt calcText="" yazsaydım sürekli içeriyi boşaltıp number ekleyecekti sayılar yan yana gelmeyecekti
//*burada if döndürmemin sebebi calText alanında 0 varsa ve calText alanı içerisinde . bulunmuyorsa içeriyi boşalttım çünkü 2 sorun karşıma çıktı ilki 0 devamlı kalıyordu silinmiyordu ikinciside 0. yaptığım da yanına sayı eklediğimde içerideki değer silinip sayı geliyordu sadece
        if(calcText.value==0 && !calcText.value.includes(".")){
            calcText.value ="";
        }
//*sayıları sürekli üzerine eklemek için ve bir sayı eklediğimde ac butonu içeriği C yapıyorum
        calcText.value+=e.target.innerHTML;
        ac.innerHTML="C"
    }
    
//*dört işlem butonlarına click olduğunda ilk olarak burada işlem yapmak için elime sayıları almam lazım ve bunları number ifade olarak almam lazım
//*daha sonra ayrı yerde işlemi yaptırdığım kodla bu kodu eşleştirmek için operation değişkeni tanımlayım içine yapılacak işlemi yazdırdım
//*ve en sonda içerideki sayıyı sildim çünkü ikinci sayıyı almak için
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

//*burada işlemleri yaptırmak için eşittir butonunu kullanıyorum ve if içerisinde yukarıda tanımladığım operationlarla burada if döndürüp içerisindeki ifadeye göre işlemimi yaptırıyorum
    if(e.target.id.includes("eşit")){
        if(operation==="bolum"){
//*yukarıda en son calText alanını boşalttığım için içeriye girdiğim sayıyı bir değişkene atıyorum ki işlemleri mi yaptırmak için
            let sayi2=+calcText.value
//*if döndürmemein sebebi bölme işleminde bir sayının 0'a bölümü tanımsızdır o yüzden sayi2 0 a eşit değilse işlem yaptırıyorum
            if(sayi2!==0) {
                calcText.value=(sayi1/sayi2).toFixed(6)
            }
            else{
                calcText.value="Hata";
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

//*artıEksi butonuna click olduğunda içerideki sayıyı -1 ile çarparak yeni sayıyı yazdırdım
document.querySelector("#artıEksi").addEventListener("click",function(){
    let sayi=calcText.value
    let artıEksi=sayi*-1
    calcText.value=artıEksi
})

//*yuzde butonuna click olduğunda sayının yüzdesini aldıracak işlemi yaptırdım
document.querySelector("#yuzde").addEventListener("click",function(){
    let sayi=calcText.value
    let yuzde=sayi/100
    calcText.value=yuzde
})

//*burada nokta butonuna tıkladığımda calcText alanına . ekliyorum ondalıklı işlem yapmak için 
//*if çevirmemin sebebi bir alana sürekli . eklememesi için onu da cilick olayında eğer calText te . bulunmuyorsa nokta ekle ve her gelen sayıyı üzerine eklemek için += kullandım
document.querySelector("#nokta").addEventListener("click",function(e){
//*calcText.value değeri içerisinde bir nokta (.) bulunmuyorsa anlamındadır
    if(!calcText.value.includes(".")){
        calcText.value+=e.target.innerHTML
    }
})






