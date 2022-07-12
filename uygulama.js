//ehliyet alabilme yaşını ve durumunu console'a yazdırma
// let year_b=prompt("Doğum yılınızı giriniz: ")
// let year=2022
// let age=year - year_b

// if (age<18){
//     console.log("ehliyet alamazsınız")

//     console.log("ehliyet almanıza "+(18-age) +" yıl kaldı")
// }
// else if(age>=18){
//     console.log("ehliyet alabilirsiniz")
// }
// else{
//     console.log("yanlış deger girdiniz")
// }
///////////////////////////////////////////////////////////////////////////
//mevsimleri rakamlara göre bulma
let seasons=prompt("ay bigisi giriniz: ");

switch(seasons){
    case '1':
    case '2':
    case '12':
        console.log("kış");
        break;
    case '3':
    case '4':
    case '5':
        console.log("ilkbahar");
        break;
    case '6':
    case '7':
    case '8':
        console.log("yaz");
        break;
    case '9':
    case '10':
    case '11':
        console.log("sonbahar");
        break;
    default:
        console.log("yanlış bilgi girdiniz") ; 
}

