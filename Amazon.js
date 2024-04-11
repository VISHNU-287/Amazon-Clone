import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
 
 export let arrayPhaseI = [
 {image:'image1.jpg',description:'Redmi 13C 5G  8GB RAM 256GB Storage',starsCount:{stars:"rating-50.png",count:1234},rupees:13999}
 ,{image:'image2.jpg',description:'iQOO Z6 Lite 5G Snapdragon 4 Gen 1 Processor',starsCount:{stars:"rating-45.png",count:667},rupees:10999}
,{image:'image9.jpg',description:'Vivo Y200 5G (Desert Gold, 8GB RAM, 256GB)',starsCount:{stars:"rating-50.png",count:1234},rupees:23999},
{image:'image10.jpg',description:'realme 11 5G (Glory Gold, 8GB RAM, 256GB Storage)',starsCount:{stars:"rating-50.png",count:1234},rupees:17999},
{image:'image11.jpg',description:'TECNO POP 8 White,(8GB*+64GB)5000mAh Battery',starsCount:{stars:"rating-50.png",count:1234},rupees:6799},
{image:'image12.jpg',description:'HONOR X9b 5G |Anti-Drop Curved AMOLED Display',starsCount:{stars:"rating-50.png",count:1234},rupees:25999},
{image:'image13.jpg',description:'Lenovo Legion Pro 7 Intel Core i9-13900HX 16"',starsCount:{stars:"rating-50.png",count:8988},rupees:293990},
{image:'image14.jpg',description:'Lenovo Legion 7 Intel Core i9-12900HX 16',starsCount:{stars:"rating-50.png",count:8988},rupees:366589},
{image:'image15.jpg',description:'Dell G15 5530 Gaming Laptop, Intel i7',starsCount:{stars:"rating-50.png",count:8988},rupees:99990},
{image:'image16.jpg',description:'Dell  Notebook- Intel Core i7-8665U',starsCount:{stars:"rating-50.png",count:8988},rupees:30480},
{image:'image17.jpg',description:'HP Pavilion Gen Intel Core i7 14 FHD Multitouch 2 in 1 ',starsCount:{stars:"rating-50.png",count:8988},rupees:66890},
{image:'image3.jpg',description:'ASUS AMD Ryzen 9 7940HS, 16" FHD+ 165Hz, 8GB',starsCount:{stars:"rating-50.png",count:8988},rupees:119990},
{image:'image4.jpg',description:'Lymio Mens Regular Fit Jeans',starsCount:{stars:"rating-30.png",count:434},rupees:679},
{image:'image18.jpg',description:'AUSK T-Shirt for Mens Double Stripes on Chest',starsCount:{stars:"rating-30.png",count:434},rupees:209},
{image:'image19.jpg',description:'EYEBOGLER Regular Fit Checkered T-Shirt',starsCount:{stars:"rating-30.png",count:434},rupees:257},
{image:'image20.jpg',description:'EYEBOGLER Mens Regular T-shirt Indigo Royal',starsCount:{stars:"rating-30.png",count:434},rupees:219},
{image:'image21.jpg',description:'Monte Carlo Mens Striped Cotton Blend Polo',starsCount:{stars:"rating-30.png",count:434},rupees:945},
{image:'image5.jpg',description:'Mens Raglan Full Sleeves Gym Regular Fit T-Shirt',starsCount:{stars:"rating-25.png",count:323},rupees:349},
{image:'image6.jpg',description:'TIMEX Analog Blue Dial Boys Genuine Leather',starsCount:{stars:"rating-45.png",count:768},rupees:4495},
{image:'image7.jpg',description:'Fusion Analog Brown Dial Mens Watch-TWEG18903',starsCount:{stars:"rating-50.png",count:787809},rupees:4595},
{image:'image22.jpg',description:'Neo Iv Analog Black Dial Mens Watch',starsCount:{stars:"rating-50.png",count:787809},rupees:6155},
{image:'image23.jpg',description:'Men Metal Anthracite Dial Analog Watch',starsCount:{stars:"rating-50.png",count:787809},rupees:4595},
{image:'image24.jpg',description:'Sonata White Dial Analog watch For Men-NR1013SM01',starsCount:{stars:"rating-50.png",count:787809},rupees:719},
{image:'image25.jpg',description:'HEMT Analog Multi Color Dial Mens Watch-HM-GR092-',starsCount:{stars:"rating-50.png",count:787809},rupees:279}
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
        function1(this);
    });
}

  }

 
 





export let CartarrayPhaseI = JSON.parse(localStorage.getItem('StorageCartPhaseI')) || [];

 export function CartobjectPhaseIfunction(variable){
  let CartobjectPhaseI = {
   image:'',description:'',rupees:0,quantity:0,shipping:0,dates:'',shippingDate:{free:'',midcost:'',premium:''}
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
    CheckoutCreate += 
    `
    <div class="Container-for-Product">
        <div class="pre-product-left-container">
                <div class="delivery-date-text">Delivery date: ${CartarrayPhaseI[i].dates || CartarrayPhaseI[i].shippingDate.free}</div>
                
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
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.1" value="0" checked  data-pro-des="${CartarrayPhaseI[i].description}" data-day-date="${CartarrayPhaseI[i].shippingDate.free}"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.1">${CartarrayPhaseI[i].shippingDate.free}</label></div>
              <div><label class="label-2" for="id-${i}.1">FREE Shipping</label></div>
            </div>
          </div>
          <!---->
          <div class="option-main-container">
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.2" value="100"  data-pro-des="${CartarrayPhaseI[i].description}" data-day-date="${CartarrayPhaseI[i].shippingDate.midcost}"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.2">${CartarrayPhaseI[i].shippingDate.midcost}</label></div>
              <div><label class="label-2" for="id-${i}.2">&#x20B9;100 Shipping</label></div>
            </div>
          </div>
          <!---->
          <!---->
          <div class="option-main-container">
            <div class="input-button"><input type="radio" name="${i}" id="id-${i}.3" value="250" data-pro-des="${CartarrayPhaseI[i].description}" data-day-date="${CartarrayPhaseI[i].shippingDate.premium}"></div>
            <div class="details-container" >
              <div><label class="label-1" for="id-${i}.3">${CartarrayPhaseI[i].shippingDate.premium}</label></div>
              <div><label class="label-2" for="id-${i}.3">&#x20B9;250 Shipping</label></div>
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
   
    for(let i=0; i< CartarrayPhaseI.length ; i++){
      let shipping = document.querySelectorAll(`input[name="${i}"]`);
      for(let j=0;j<shipping.length;j++){
        shipping[j].addEventListener('click',function(){
          shippingfunction(this);
         
        })

      }
    }
    

   

  }


 

 // product update code and also delete the code

 // product update code and also delete the code

export function productupdatefunction(variable){
  let productdescription = variable.dataset.productDescription;
  let productQuantity    = variable.dataset.productQuantity;
 
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



export function shippingfunction(access){
  let date = access.dataset.dayDate;
  let cost = Number(access.value) || 0;
  let pdes = access.dataset.proDes;
  for(let i=0;i<CartarrayPhaseI.length;i++){
    if(pdes === CartarrayPhaseI[i].description){
        CartarrayPhaseI[i].dates = date;
        CartarrayPhaseI[i].shipping = cost;
        localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
    }
    
  }
  location.reload();
  billfunction();
  
  }


  export function dynamicOptions() {
    for (let i = 0; i < CartarrayPhaseI.length; i++) {
      let shippingValue = CartarrayPhaseI[i].shipping;
      let radioInputs = document.querySelectorAll(`input[name="${i}"]`);
  
      for (let j = 0; j < radioInputs.length; j++) {
        if (Number(radioInputs[j].value) === shippingValue) {
          radioInputs[j].checked = true;
          break; // Once found and checked, exit the loop
        }
      }
    }
  }
  



 


export function billfunction(){
  let quantitys = 0;
  let beforetaxcost = 0;
  let taxamount = 0;
  let totalcost = 0;
  let shippingcost = 0;
 let beforetotaltaxcost = 0;
  for(let i=0;i<CartarrayPhaseI.length;i++){
    quantitys += CartarrayPhaseI[i].quantity;
    shippingcost += CartarrayPhaseI[i].shipping;
    beforetaxcost += ((CartarrayPhaseI[i].rupees * CartarrayPhaseI[i].quantity));
    beforetotaltaxcost = beforetaxcost+shippingcost;
  }
 
  taxamount += Math.round((beforetotaltaxcost)*0.1);
  totalcost += beforetotaltaxcost + taxamount;
  document.getElementById('id-items').innerHTML = quantitys;
  document.getElementById('id-cost').innerHTML = beforetaxcost;
  document.getElementById('id-shipping-cost').innerHTML = shippingcost;
  document.getElementById('id-total-before-cost').innerHTML = beforetotaltaxcost;
  document.getElementById('id-tax-amount').innerHTML = taxamount;
  document.getElementById('id-total-cost').innerHTML = totalcost;
   
 }
  export function addtocartdisplay(){
    let totalcount = 0;
   for(let i=0;i<CartarrayPhaseI.length;i++){
    totalcount += CartarrayPhaseI[i].quantity;
   } 
   document.getElementById('displays-cart-numbers').innerHTML = totalcount;

  }

 export function function1(parameter){
  let today = dayjs();
  let freecost = today.add(7,'day');
  let midcosts = today.add(3,'day');
  let Fullcost = today.add(1,'day');
   let vars =  parameter.dataset.descriptionDetail;
   

   for(let i=0;i<CartarrayPhaseI.length;i++){
    if(vars === CartarrayPhaseI[i].description){
      if(CartarrayPhaseI[i].shippingDate.free){
        console.log('Prevoius Date Available');
      }
      else{
        CartarrayPhaseI[i].shippingDate.free = freecost.format('dddd, MMMM D');
        CartarrayPhaseI[i].shippingDate.midcost = midcosts.format('dddd, MMMM D');
        CartarrayPhaseI[i].shippingDate.premium = Fullcost.format('dddd, MMMM D');
        localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
        console.log(CartarrayPhaseI[i].shippingDate);
      }
    }
   }
  
  }


 
  

// js code for check out count of products

export function Checkoutcount(){
  let checkoutcount = CartarrayPhaseI.length;
  document.getElementById('check-id').innerHTML = checkoutcount;
}
