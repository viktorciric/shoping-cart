 let ALLtotal = 0;
 
 function addToCart(element) {
 let product = element.closest(' .single-item');
 let price = product.querySelector('.price').innerText;
 let name = product.querySelector('h3').innerText;
 let quantity = product.querySelector('input').value;
 let cart_items = document.querySelector('.cart-items');


 if(parseInt(quantity) > 0) {
   
    price = price.substring(1);
    price = parseInt(price);
    quantity = parseInt(quantity)
    let total = price * quantity;
    ALLtotal += total;
    cart_items.innerHTML += `<div class="cart-items">                      
                             proizvod:${name}<br>
                             cena: ${price}$ <br>
                             kolicina: ${quantity} <br>
                             total: <span>${total}</span>$
                             <button onclick="removeFromCart(this)" class="remove_button" >Ukloni</button>
                             <hr>
                             `
       document.querySelector('.total').innerText = `total: ${ALLtotal}$`                    
    element.innerText = 'Dodato';
    element.setAttribute('disabled' , 'true')
 } else {
    alert('Odaberite kolicinu!');
}

 }  
 
 function removeFromCart(element) {
 let MailEL = element.closest(' .cart-items')
 let price = MailEL.querySelector('span').innerText;
 let vegetables = document.querySelectorAll(' .single-items')
 price = parseInt(price);

ALLtotal -= price;

document.querySelector('.total').innerText = `total: ${ALLtotal}$`

MailEL.remove();

vegetables.forEach(function (this) { 
console.log (this)
});

 }