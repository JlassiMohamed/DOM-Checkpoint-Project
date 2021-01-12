let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let qte = Array.from(document.getElementsByClassName("qte"));
let cancel = Array.from(document.getElementsByClassName("cancel"));
let card = Array.from(document.getElementsByClassName("card"));
let like = Array.from(document.getElementsByClassName("fa-heart"));
let price = Array.from(document.getElementsByClassName("price"));
let subtotal = document.querySelector(".subtotal");
let item = document.querySelector(".item");

totalPrice();
totalItems();

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
    totalPrice();
    totalItems()
  })
}
  
for (let i = 0; i < plus.length; i++) {
  minus[i].addEventListener("click", function () {
    if(Number(qte[i].innerHTML)>1){
    qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
    totalPrice();
    totalItems()
    }
  })
}

for (let i = 0; i < plus.length; i++) {
  like[i].addEventListener("click", function () {
    if(like[i].style.color==="black"){
      like[i].style.color="#B91917"}
    else{
      like[i].style.color="black"
    }
  })
}
  
for (let i = 0; i < plus.length; i++) { 
  cancel[i].addEventListener("click", function () {
    card[i].remove();
    totalPrice();
    totalItems()
  })
}

function totalPrice(){
  let qte = Array.from(document.getElementsByClassName("qte"));
  let price = Array.from(document.getElementsByClassName("price"));
  let s = 0;
  for (let i = 0; i < price.length; i++) {
    s = s + Number(qte[i].innerHTML)*Number(price[i].innerHTML);
    subtotal.innerHTML = s
  }
}

function totalItems(){
  let qte = Array.from(document.getElementsByClassName("qte"));
  let s = 0;
  for (let i in qte){
    s = s + Number(qte[i].innerHTML);
  }
  item.innerHTML = s
}
