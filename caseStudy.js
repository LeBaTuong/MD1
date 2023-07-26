let adressbtn = document.querySelector('#addres-form')
//console.log(adressbtn)
adressbtn.addEventListener('click', function(){
    document.querySelector('#addres-form2').style.display='flex'
})
let adressbtn1 = document.querySelector('#addres-close')
//console.log(adressbtn)
adressbtn1.addEventListener('click', function(){
    document.querySelector('#addres-form2').style.display='none'
})
//slider...........
let rightbtn=document.querySelector('.rightbtn')
let leftbtn=document.querySelector('.leftbtn')
let imgNumber = document.querySelectorAll('.slider-content-left-top img')
let index=0

rightbtn.addEventListener('click', function(){
    index++;
    if (index>imgNumber.length-1){
        index=0
    }

     document.querySelector('.slider-content-left-top').style.right= index*100 + "%"
})
leftbtn.addEventListener('click', function(){
    index--;
    if (index<=0){
        index=imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right= index*100 + "%"
})

//slider...........tiêu đề
let imgNumberli = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberli.forEach(function(img,index){
           img.addEventListener('click', function(){
            removeactive()
            document.querySelector('.slider-content-left-top').style.right= index*100 + "%"
            img.classList.add('active')
           })
})
function removeactive (){
    let imgactive= document.querySelector('.active')
    imgactive.classList.remove('active');
}
//slide2.......
function imgauto(){
    index++;
    if (index>imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector('.slider-content-left-top').style.right= index*100 + "%"
    imgNumberli[index].classList.add('active')
}
setInterval(imgauto,5000)

//làm gán sản phẩm.........
class listproduct{
    constructor(img,name,price){
        this.img=img;
        this.name=name;
        this.price=price;
    }
    getImg(){
        return this.img
    }
    getName (){
        return this.name;
    }
    getPrice(){
        return this.price
    }
}
let producttotal = [
    new listproduct ('img/iphone-14-pro-max-den-thumb-600x600.jpg','Iphone 14 Pro max đen','26700000'),
    new listproduct ('img/iphone-14-pro-vang-thumb-600x600.jpg','Iphone 14 Pro vàng','28700000' ),
    new listproduct ('img/oppo-find-n2-flip-purple-thumb-1-600x600-1-600x600.jpg','Oppo purple','29700000'),
    new listproduct ('img/samsung-galaxy-a14-tlte-thumb-den-600x600.jpg','Samsung-galaxy-a14','21700000'),
    new listproduct ('img/vivo-y36.jpg','vivo-y36','22700000'),
]
function displayproduct (){
    let content=``;
    for (let i=0; i<producttotal.length;i++){
        content +=`<div class="slider-product1-content-iterms1">
        <img class='image' src=${producttotal[i].getImg()} alt="">
        <div class="slider-product1-content-iterm-text">
        <Li><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2020/10/content/icon6-50x50.png" alt=""><p>Gía ưu đãi</p></Li>
        <li><h4 id='namemenu'> ${producttotal[i].getName()}</h4></li>
        <li><a href="">30.000.000<sup>đ</sup></a></li>
        <li><span>${producttotal[i].getPrice()}</span><sup>đ</sup></li>
        
        <button class="btn">Thêm vào giỏ hàng</button>
       
       </div>
    </div>`
    }
    document.getElementById('sliderproduct').innerHTML=content;
}displayproduct();

let producttotal2 = [
    new listproduct ('img/lap1.jpg','Dell Corei5','26200000'),
    new listproduct ('img/lap2.jpg','HP Corei5','26100000'),
    new listproduct ('img/lap3.jpg','ASUS Corei5','26900000'),
    new listproduct ('img/lap4.jpg','ACE Corei5','26600000'),
    new listproduct ('img/lap5.jpg','Lenovo Corei5','25700000'),
    new listproduct ('img/lap6.jpg','MSI Corei5','26000000'),
    new listproduct ('img/lap7.jpg','VIVO Corei5','26700000'),
    new listproduct ('img/lap8.jpg','Macbook Corei5','26700000'),
    new listproduct ('img/lap9.jpg','Dell Vostro Corei5','19000000'),
    new listproduct ('img/lap10.jpg','HP Corei9','18100000'),
]
function displayproduct2 (){
    let content=``;
    for (let i=0; i<producttotal2.length;i++){
        content +=`<div class="product-gallery-one-content-product-item">
        <img class='image' src=${producttotal2[i].getImg()} alt="">
        <div class="product-gallery-one-content-product-item-text">
        <Li><img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2020/10/content/icon6-50x50.png" alt=""><p>Gía ưu đãi</p></Li>
        <li><h4 id='namemenu'> ${producttotal2[i].getName()}</h4></li>
        <li><a href="">30.000.000<sup>đ</sup></a></li>
        <li><span>${producttotal2[i].getPrice()}</span><sup>đ</sup></li>
        
        <button class="btn">Thêm vào giỏ hàng</button>
       
       </div>
    </div>`
    }
    document.getElementById('sliderproduct2').innerHTML=content;
}displayproduct2();


//product1...........
//tính giỏ hàng
let btn =document.querySelectorAll('button')
btn.forEach(function(button, index){
    button.addEventListener('click', function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        //console.log(product.previousSibling.previousElementSibling.src);
        var productImg = product.previousSibling.previousElementSibling.src
        var productName = product.querySelector("H4").innerText
        var  productPrice = product.querySelector("span").innerText
        
        addcart(productImg,productName,productPrice);
        
    })
})
function addcart(productImg,productName,productPrice){
    var addtr=document.createElement('tr')

    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let productN = document.querySelectorAll("td .name");
        if (productN[i].innerHTML == productName) {
            alert("Sản phẩm bạn chọn đã có trong giỏ hàng");
            return;
        }
    }
    var trcontent='<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src='+productImg+' alt=""><p class="name">' + productName + '</p></td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;" class="cartdelete">Xóa</td></tr>'
    addtr.innerHTML=trcontent
    var cartTable=document.querySelector('tbody')
     //console.log(cartTable)
     cartTable.append(addtr)
     Carttotal()
     removecart()
     //inchange ()
}
//total..........

function Carttotal() {
    let cartItem = document.querySelectorAll("tbody tr");
    var totalC=0
    let inputvalue = 0;
    for (let i = 0; i < cartItem.length; i++) {
        let inputvalueA = +cartItem[i].querySelector("input").value;
        //console.log(inputvalueA)
        let productPrice = cartItem[i].querySelector("span").innerHTML;
        //console.log(productPrice)
        let totalA = inputvalueA * productPrice;
        //let totalB =totalA.toLocaleString('de-DE')
        //console.log(totalB) 
        totalC+=totalA;
        inputvalue = Number(inputvalue) + Number(inputvalueA);
        
       
        //console.log(totalC)  
        //totalD = totalC   
       
    }
    var carttotalA=document.getElementById('priceproduct')
    let cartcount = document.querySelector(".cart-open span");
    carttotalA.innerHTML= totalC
    
    cartcount.innerHTML = inputvalue;
    inchange ()
    
    
}
//remove.................
function removecart (){ 
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let producT = document.querySelectorAll(".cartdelete");
        producT[i].addEventListener('click', function(event){
            var Delete = event.target
            var cartdelete = Delete.parentElement
            cartdelete.remove()
            Carttotal()
        })
        }
    }
//change.......

function inchange (){
    let cartItem = document.querySelectorAll("tbody tr");
    for (let i = 0; i < cartItem.length; i++) {
        let inputvalue = cartItem[i].querySelector("input");
        inputvalue.addEventListener('change', function(event){
           
            Carttotal()
        })
        }
    }


//thẻ tính tiền......

let open = document.querySelector('.cart-open')
//console.log(adressbtn)
open.addEventListener('click', function(){
    document.querySelector('.cart').style.right='0%'
})
let close = document.querySelector('.cart-close')
//console.log(adressbtn)
close.addEventListener('click', function(){
    document.querySelector('.cart').style.right='-100%'
})
let showLogIn = document.querySelector(".cart-close");
showLogIn.addEventListener("click", function(){
    document.querySelector("#logIn").style.right = "300px"
})

//Tìm kiếm......
function searchfunc(){
    let menusearch = document.querySelector('#menu_search');
    let menuitems= Array.from(document.querySelectorAll('#namemenu'));
    menusearch.value=menusearch.value.tolowerCase();
    menuitems.forEach(function(el){
        let text=el.innerText;
        if(text.indexOf(menusearch.value)> -1)
        el.style.display="";
        else el.style.display="none"
    })
}
