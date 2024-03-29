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
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            CartobjectPhaseIfunction(this);
            addtocartdisplay();
        });
    });
  }

 
 


  // js code for Remove Items
 export function RemoveFromBegin(){
    arrayPhaseI.splice(0,1);
    localStorage.setItem('StorageArrayPhaseI',JSON.stringify(arrayPhaseI));
    HtmlCreationPhaseI();
}

export   function RemoveFromEnd(){
  arrayPhaseI.splice(((arrayPhaseI.length)-1),1);
  localStorage.setItem('StorageArrayPhaseI',JSON.stringify(arrayPhaseI));
  HtmlCreationPhaseI();
}

export function SelectedRemove(){
  let index = document.getElementById('index').value;
  let count = document.getElementById('numbers').value;
  arrayPhaseI.splice(index,count);
  localStorage.setItem('StorageArrayPhaseI',JSON.stringify(arrayPhaseI));
  HtmlCreationPhaseI();
  document.getElementById('index').value = '';
  document.getElementById('numbers').value = '';
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
  CartHtmlCreationPhaseI();
  }
 export let CartHtmlCreation = ``;
  export function CartHtmlCreationPhaseI(){
    for(let i=0;i<CartarrayPhaseI.length;i++){
      CartHtmlCreation += `
      <!--Below Code For Specific Main Body-->
  <div class="specific-container-orders">
    <!--Left Container-->
     <div class="left-container-orders">
      <img class="cart-image" src="images/${CartarrayPhaseI[i].image}">
     </div>
    <!--Middle Container--> 
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
  CartarrayPhaseI.splice(0,2);
  localStorage.setItem('StorageCartPhaseI',JSON.stringify(CartarrayPhaseI));
}

// js code for click acknowledgement
export function addAckno(){
  document.querySelector('.Added-ackno').innerHTML = '&check; Added';
 }





















  export function addtocartdisplay(){
    let totalcount = 0;
   for(let i=0;i<CartarrayPhaseI.length;i++){
    totalcount += CartarrayPhaseI[i].quantity;
   } 
   document.getElementById('displays-cart-numbers').innerHTML = totalcount;
   console.log(CartarrayPhaseI);
  }
  


 
