document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product-1", price: 29.99 },
    { id: 2, name: "Product-2", price: 19.99 },
    { id: 3, name: "Product-3", price: 39.9999 },
    { id: 4, name: "Product-4", price: 49.99 },
  ];

  const cart = [];

  const productlist = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cardTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutButton = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
       
       <span>${product.name} -$ ${product.price.toFixed(2)}</span>

       <button data-id="${product.id}"> Add to cart </button>
       `;

    productlist.appendChild(productDiv);
  });

  //adding event listner to the button we have on the product

  productlist.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId=parseInt(e.target.getAttribute('data-id'))
     const product=products.find(p => p.id === productId);

       addToCart(product);





    }
  });


  //add to card method to add item to our cart 

  function addToCart(product)
  {
    cart.push(product);
    renderCart();
    


  }

  function renderCart(){
    cartItems.innerText="";
    var totalprice=0;

    if(cart.length > 0){
        emptyCartMessage.classList.add('hidden');
        cardTotalMessage.classList.remove('hidden');

        //looping through the card 

        cart.forEach((item,index) =>{
            totalprice+=item.price;
            //make a fresh div and add to cart

            const cartItem=document.createElement('div');
            cartItem.innerHTML=`${item.name} -$ ${item.price.toFixed(2)}`
            cartItems.appendChild(cartItem);
            totalPriceDisplay.textContent=`${totalprice}`
        });
       
    }

    else{
        emptyCartMessage.classList.remove('hidden');
        totalPriceDisplay.textContent=`$0.00`
        }

  }

  checkOutButton.addEventListener('click',()=>{
    cart.length=0; // way to clear cart
    alert("Checkout abb kuch aur kharid");
    renderCart();


  })

});
