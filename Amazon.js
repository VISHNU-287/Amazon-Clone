 export let arrayPhaseI = [
 {image:'image1.jpg',description:'Redmi Note 11 Pro',starsCount:{stars:"rating-50.png",count:1234},rupees:14999}
 ,{image:'image2.jpg',description:'Basket Ball',starsCount:{stars:"rating-45.png",count:667},rupees:1999}
,{image:'image3.jpg',description:'Luxary Towel 4sets',starsCount:{stars:"rating-50.png",count:8988},rupees:2999},
{image:'image4.jpg',description:'Black Sun Glass',starsCount:{stars:"rating-30.png",count:434},rupees:499},
{image:'image5.jpg',description:'women-stretch-popover-hoodie-Black',starsCount:{stars:"rating-25.png",count:323},rupees:2999},
{image:'image6.jpg',description:'plain-hooded-fleece-sweatshirt-yellow',starsCount:{stars:"rating-45.png",count:768},rupees:699},
{image:'image7.jpg',description:'liquid-laundry-detergent-lavender',starsCount:{stars:"rating-50.png",count:787809},rupees:15000},
{image:'image8.jpg',description:'adults-plain-cotton-tshirt-2-pack-black',starsCount:{stars:"rating-45.png",count:67879},rupees:1999}
];  
 export function HtmlCreationPhaseI(){
    let htmlGeneratePhaseI =  ``;
    for(let i=0; i< arrayPhaseI.length; i++){
      htmlGeneratePhaseI += `
      <div class="main-containers">
    <div class="product-image-container"><img src="images/${arrayPhaseI[i].image}" class="common-image-style"></div>
    <div class="Product-description">${arrayPhaseI[i].description}</div>
    <div class="rating-count-container"><img src="images/${arrayPhaseI[i].starsCount.stars}" class="stars-detail"><span class="count-font">${arrayPhaseI[i].starsCount.count}</span></div>
    <p class="rupees-style">&#x20B9; ${arrayPhaseI[i].rupees}</p>
    <select class="quantity-box-style quantity-to-add">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
    <div class="Added-ackno"></div>
    <button class="add-to-cart-button-style"
    data-image-name="${arrayPhaseI[i].image}"
    data-description-detail="${arrayPhaseI[i].description}"
    data-rupees-info="${arrayPhaseI[i].rupees}"
    >Add To Cart</button>
  </div>`;
    }
    document.getElementById('main-body-Grid Container').innerHTML = htmlGeneratePhaseI;

    let addToCartButtons = document.querySelectorAll('.add-to-cart-button-style');
    for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function() {
        CartobjectPhaseIfunction(this);
        addtocartdisplay();
    });
}

  }

 
 





export let CartarrayPhaseI = JSON.parse(localStorage.getItem('StorageCartPhaseI')) || [];

 export function CartobjectPhaseIfunction(variable){
  let CartobjectPhaseI = {
   image:'',description:'',rupees:0,quantity:0
  };

   let Image = variable.dataset.imageName;
  let Description = variable.dataset.descriptionDetail;
  let Rupees = variable.dataset.rupeesInfo
  let Quantity = Number(document.querySelector('.quantity-to-add').value);
   
  CartobjectPhaseI.image = Image;
  CartobjectPhaseI.description = Description;
  CartobjectPhaseI.rupees = Rupees;

  let repeat = false;
  
  for(let i=0; i< CartarrayPhaseI.length; i++){
    if( Description===CartarrayPhaseI[i].description){
      repeat = true;
    }
    }
  if(repeat){
    for(let i=0;i< CartarrayPhaseI.length; i++){
      if( Description===CartarrayPhaseI[i].description){
        CartarrayPhaseI[i].quantity += Quantity;
        localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
        break;
      }
    }
  }
  else{
    CartobjectPhaseI.quantity = Quantity;
    CartarrayPhaseI.push(CartobjectPhaseI);
    localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
  } 
  }
 export let CartHtmlCreation = ``;
  export function CartHtmlCreationPhaseI(){
    for(let i=0;i<CartarrayPhaseI.length;i++){
      CartHtmlCreation += `
      
  <div class="specific-container-orders">
    <!--Left Container-->

     <div class="left-container-orders">
      <img class="cart-image" src="images/${CartarrayPhaseI[i].image}">
     </div>

    <!--Middle Container--> 
    <div class="inter-container-right">
     <div class="middle-container-orders">

      <div class="middle-first-text">${CartarrayPhaseI[i].description}</div>

      <div class="middle-second-text">Arriving On: March 31</div>

      <div class="middle-third-text">Quantity:${CartarrayPhaseI[i].quantity}</div>

      <button class="Buy-button">
        <div class="container-buy-button">
        <div><img class="image-inside-buy-button" src="images/lock-image.png"></div>
        <div class="buy-text">Buy It Again</div>
      </div>
      </button>
     </div>

    <!--Right Container--> 
     <div class="right-container-orders">
      <button class="track-button">Track Package</button>
     </div>
    </div>
    </div>
      `;
    }
    
  }
 export function externaldisplacart(){
    document.getElementById('main-container-orders-id').innerHTML = CartHtmlCreation;
  }

export  let totalcash = 0;
  export function TotalMoney(){
    for(let i=0;i<CartarrayPhaseI.length;i++){
      totalcash += (CartarrayPhaseI[i].rupees) *  (CartarrayPhaseI[i].quantity);
    }
    document.getElementById('totalmoney-id').innerHTML = totalcash || 0;
  }





// temporarly remove cart quantity

  function reo(){
  CartarrayPhaseI.splice(0,20);
  localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
}

// js code for click acknowledgement
export function addAckno(){
  document.querySelector('.Added-ackno').innerHTML = '&check; Added';
 }



//start js code for Checkout 
  export let CheckoutCreate = ``;

  export function Checkouthtmlcreation(){
  for(let i=0;i<CartarrayPhaseI.length;i++){
    CheckoutCreate += `
    <div class="Container-for-Product">
        <div class="pre-product-left-container">
                <div class="delivery-date-text">Delivery date: Wednesday, April 10</div>
                
              <div class="product-left-container">
                  <div class="image-specify-container"><div><img src="images/${CartarrayPhaseI[i].image}" class="product-image-style"></div>
                  </div>
                  
                  <div>
                        <div class="product-details-container">
                          <div class="product-description">${CartarrayPhaseI[i].description}</div>
                          <div class="product-cost">&#x20B9; ${CartarrayPhaseI[i].rupees}</div>
                          <div class="quantity-container"><div class="qua-space">Quantity:<span class="product-quantitys" id="id-${i}">${CartarrayPhaseI[i].quantity}</span>
                          </div>
                          <div>
                          <span class="product-update"
                          data-product-description = "${CartarrayPhaseI[i].description}"
                          data-product-quantity = "${CartarrayPhaseI[i].quantity}"
                          >update</span>

                          <span class="product-delete deleting"
                          data-product-description = "${CartarrayPhaseI[i].description}"
                          >Delete</span></div></div>
                        </div>
                  </div>
              </div>
        </div>
  
        <div class="product-right-container">
          <div class="product-head-text">Choose a delivery option:</div>
          <!--specific container-->
          <div class="option-main-container">
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.1"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.1">Tuesday, April 9</label></div>
              <div><label class="label-2" for="id-${i}.1">FREE Shipping</label></div>
            </div>
          </div>
          <!---->
          <div class="option-main-container">
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.2"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.2">Tuesday, April 9</label></div>
              <div><label class="label-2" for="id-${i}.2">FREE Shipping</label></div>
            </div>
          </div>
          <!---->
          <!---->
          <div class="option-main-container">
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.3"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.3">Tuesday, April 9</label></div>
              <div><label class="label-2" for="id-${i}.3">FREE Shipping</label></div>
            </div>
          </div>
          <!---->
        </div>

  </div>
<!---->

    `;
    
  }
  document.getElementById('id-for-productsin-cart').innerHTML = CheckoutCreate;

  let cartobject = document.querySelectorAll('.product-update');
    for(let i=0;i<cartobject.length;i++){
      cartobject[i].addEventListener('click',function(){
        productupdatefunction(this);
        cartactivate(this);
      });
    }

    let deleteselecting = document.querySelectorAll('.deleting');
    for(let i=0; i<deleteselecting.length; i++){
      deleteselecting[i].addEventListener('click',function(){
        deletefunction(this);
      })
    }

   

  }


 

 // product update code and also delete the code

 // product update code and also delete the code

export function productupdatefunction(variable){
  let productdescription = variable.dataset.productDescription;
  let productQuantity    = variable.dataset.productQuantity;
  console.log(productdescription);
  if(variable.textContent === 'update'){
    variable.textContent = 'save';
  }
  else if(variable.textContent === 'save'){
    variable.textContent = 'update';
  }
}

 export function cartactivate(variable){
   let description = variable.dataset.productDescription;
 if(variable.textContent === 'save'){
  for(let i=0;i<CartarrayPhaseI.length;i++){
    if(description === CartarrayPhaseI[i].description){
      document.getElementById(`id-${i}`).innerHTML = `
      <select id="ids${i}" class="dyna-drop">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
    </select>
      `;
    }
  }
 }
 else if(variable.textContent === 'update'){
  for(let i=0;i<CartarrayPhaseI.length;i++){
    if(description === CartarrayPhaseI[i].description){
    let updatedQuantity = Number(document.getElementById(`ids${i}`).value);
    CartarrayPhaseI[i].quantity += updatedQuantity;
    localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));

  document.getElementById(`id-${i}`).innerHTML = CartarrayPhaseI[i].quantity; 
  }
 }
 }
 billfunction();
}
 export function deletefunction(variable){
  let productdescription = variable.dataset.productDescription;
let qua = 0;

  for(let i=0;i<CartarrayPhaseI.length;i++){
    if(productdescription === CartarrayPhaseI[i].description){
     
      CartarrayPhaseI[i].quantity -= 1;
      qua = CartarrayPhaseI[i].quantity;
      if(qua === 0){   
       
        CartarrayPhaseI.splice(i,1);
        localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
        location.reload();
    }
    localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
      
    }
  }


  for(let i=0;i<CartarrayPhaseI.length;i++){
    if(productdescription === CartarrayPhaseI[i].description){
      document.getElementById(`id-${i}`).innerHTML = qua;
    }
  }
 
  billfunction();
 
 
}
export function billfunction(){
  let quantitys = 0;
  let beforetaxcost = 0;
  let taxamount = 0;
  let totalcost = 0;
  for(let i=0;i<CartarrayPhaseI.length;i++){
    quantitys += CartarrayPhaseI[i].quantity;
    beforetaxcost += CartarrayPhaseI[i].rupees * CartarrayPhaseI[i].quantity ;
  }
  taxamount += Math.round(beforetaxcost*0.1);
  totalcost += beforetaxcost + taxamount;
  document.getElementById('id-items').innerHTML = quantitys;
  document.getElementById('id-cost').innerHTML = beforetaxcost;
  document.getElementById('id-shipping-cost').innerHTML = 0.00;
  document.getElementById('id-total-before-cost').innerHTML = beforetaxcost;
  document.getElementById('id-tax-amount').innerHTML = taxamount;
  document.getElementById('id-total-cost').innerHTML = totalcost;
   
 }
  export function addtocartdisplay(){
    let totalcount = 0;
   for(let i=0;i<CartarrayPhaseI.length;i++){
    totalcount += CartarrayPhaseI[i].quantity;
   } 
   document.getElementById('displays-cart-numbers').innerHTML = totalcount;
   console.log(CartarrayPhaseI);
  }
  
