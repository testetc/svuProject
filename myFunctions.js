let btn = document.getElementById('btn')
let formContainer = document.querySelector('.formContainer')
let carDetal = document.querySelector('.carDetal')
let submitBtn = document.querySelector('.submitBtn')

//checkInput 
checkInput= document.getElementsByTagName("input")
let Pname=document.getElementById("Pname").value
let phoneNumber=document.getElementById("phoneNumber").value
let email =document.getElementById("email").value
let ID =document.getElementById("ID").value
let day =document.getElementById("day").value
let month=document.getElementById("month").value
let yaer =document.getElementById("yaer").value
let rent = document.getElementById('rent')





btn.addEventListener('click', () => {
    formContainer.style.display = 'block'
    Captcha()
    window.scrollTo({left:0,top:800,behavior:'smooth'})
})


////captcha 

function Captcha(){
    var alpha = new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var i;
    for (i=0;i<6;i++){
      var a = alpha[Math.floor(Math.random() * alpha.length)];
      var b = alpha[Math.floor(Math.random() * alpha.length)];
      var c = alpha[Math.floor(Math.random() * alpha.length)];
      var d = alpha[Math.floor(Math.random() * alpha.length)];
      var e = alpha[Math.floor(Math.random() * alpha.length)];
      var f = alpha[Math.floor(Math.random() * alpha.length)];
      var g = alpha[Math.floor(Math.random() * alpha.length)];
    }
  var code = a  + b + c   + d  + e + f  + g;
  document.getElementById("mainCaptcha").value = code
}
function ValidCaptcha(){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);
 //check the inputs and send response
    if (string1 == string2&&checkInput){
      if(2>1){
        alert(`تم ارسال البيانات
        قيمة الايجار ${rentValue}`)
      }
    }
    else{  
      alert("هناك خطأ في البيانات أو الكاباتشا")      
    }
}
function removeSpaces(string){
  return string.split(' ').join('');
}
//  submitBtn Btn



submitBtn.addEventListener('click',()=>{
  
  rentValue = Number(rent.value*159000)
  ValidCaptcha()

})

//check arabic words
function validateArabicLetters(event) {
  // يتم استخدام التعبير النمطي للتحقق من الحروف العربية
  const arabicLettersRegex = /[ء-ي]/;

  // يتم الحصول على رمز الحرف المضغوط
  const pressedKey = event.key;

  // يتم التحقق مما إذا كان الحرف المضغوط هو من الأحرف العربية أو لا
  if (!arabicLettersRegex.test(pressedKey)) {
    // في حالة عدم تطابق الحرف المدخل مع الأحرف العربية، يتم منع إدخال الحرف
    event.preventDefault();
  }
}