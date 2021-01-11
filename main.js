let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let qte = document.getElementsByClassName("qte");
let price = document.getElementsByClassName("price");
let subtotal = document.getElementsByClassName("subtotal")
let item = document.querySelectorAll(".item")
let cancel = document.getElementsByClassName("cancel");
let card = document.getElementsByClassName("card")

for (let i = 0; i < plus.length; i++) {
  let initialQte = Number(qte[0].innerHTML);
  item[0].innerHTML = Number(item[0].innerHTML) + initialQte;
  let unitPrice = Number(price[i].innerHTML);
  subtotal[0].innerHTML = Number(subtotal[0].innerHTML) + unitPrice

  plus[i].addEventListener("click", function () {
  qte[i].innerHTML = Number(qte[i].innerHTML) + 1;
  price[i].innerHTML = unitPrice*Number(qte[i].innerHTML);
  subtotal[0].innerHTML = Number(subtotal[0].innerHTML) + unitPrice;
  item[0].innerHTML = Number(item[0].innerHTML) + initialQte;
  });
  
  minus[i].addEventListener("click", function () {
  if(Number(qte[i].innerHTML)>1){
  qte[i].innerHTML = Number(qte[i].innerHTML) - 1;
  price[i].innerHTML = unitPrice*Number(qte[i].innerHTML);
  subtotal[0].innerHTML = Number(subtotal[0].innerHTML) - unitPrice;
      item[0].innerHTML = Number(item[0].innerHTML) - initialQte;
  }});

  cancel[i].addEventListener("click", function () {
  card[i].remove();})
}
