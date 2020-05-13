window.onload = setTimeout(function revealTitle() {
    document.getElementById("titleS").className = "titleS-on";
    document.getElementById("titleH").className = "titleH-on";
    document.getElementById("titleO").className = "titleO-on";
    document.getElementById("titleP").className = "titleP-on";
    document.getElementById("titleUnderline").className = "titleUnderline-on";
    document.getElementById("icon-home").className = "icon-home-on";
    document.getElementById("nav-btn").className = "nav-btn-on";
    document.getElementById("icon-bag").className = "icon-bag-on";
    document.getElementById("shoppingBagCount").className = "shoppingBagCount-on";
    totalPrice.innerHTML = "$" + totalPriceHTML;
    totalItems.innerHTML = itemCount;
}, 250);

window.onload = setTimeout(function welcome() {
    document.getElementById("revealShop-h1-1").className = "revealShop-h1-1-on";
}, 500);

// window.onload = setTimeout(function stayAwhile() {
//     document.getElementById("revealShop-h1-2").className = "revealShop-h1-2-on";
// }, 3000);

window.onload = setTimeout(function revealShop() {
    document.getElementById("revealShop").className = "revealShop-on";
}, 1500);


// IN VIEW PORT
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Lazy Load images

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

/* -------ADD ITEM TO CART------- */
var addItemBtn = document.getElementsByClassName("addItemBtn");
console.log(addItemBtn);

var shoppingBagCount = document.getElementById("shoppingBagCount");
var itemCount = 0;

var itemTitle = document.getElementsByClassName("item-title");
console.log(itemTitle);

var itemPrice = document.getElementsByClassName("item-price");
console.log(itemPrice);

var removeItemBtn = document.getElementsByClassName("remove-item");

var removeItemInBag = document.getElementsByClassName("item-in-bag");

var removePrice = document.getElementsByClassName("item-price-li");

var navBag = document.getElementById("nav-bag");

var totalItems = document.getElementById("total-items");

var totalPrice = document.getElementById("total-price");

var totalPriceHTML = 0;

for (let i = 0, len = addItemBtn.length | 0; i < len; i = i + 1 | 0) {
  let addItemBtnCount = addItemBtn[i];
  addItemBtnCount.onclick = function () {

    // button click animation
    addItemBtnCount.src = "images/icons/shopping-bag-duotone-dark.svg";
    addItemBtnCount.classList.add("btn-opacity");
    var itemPriceCount = itemPrice[i];
    itemPriceCount.classList.add("item-price-clicked");
    navBag.setAttribute("src", "images/icons/shopping-bag-duotone.svg");
    navBag.className = "nav-bag-duotone";
    setTimeout(function () {
      addItemBtnCount.src = "images/icons/shopping-bag-light.svg";
      addItemBtnCount.classList.remove("btn-opacity");
      itemPriceCount.classList.remove("item-price-clicked");
      navBag.setAttribute("src", "images/icons/shopping-bag-light-wht.svg");
      navBag.className = "nav-bag-light";
    }, 300);

    // add 1 to bag item count
    itemCount += 1;
    shoppingBagCount.innerHTML = itemCount;
    totalItems.innerHTML = itemCount;


    // create shopping bag item element (x)
    let removeItem = document.createElement("LI");
    removeItem.innerHTML = "x";
    removeItem.className = "remove-item";
    document.getElementById("shopping-bag-ul").appendChild(removeItem);

    // create shopping bag item element (title)
    let itemInBag = document.createElement("LI");
    let itemTitleText = itemTitle[i].textContent;
    itemInBag.innerHTML = itemTitleText;
    itemInBag.className = "item-in-bag";
    document.getElementById("shopping-bag-ul").appendChild(itemInBag);

    // create shopping bag item element (price)
    let itemPriceCountText = itemPriceCount.textContent;
    let itemPriceLI = document.createElement("LI");
    itemPriceLI.innerHTML = itemPriceCountText;
    itemPriceLI.className = "item-price-li";
    document.getElementById("shopping-bag-ul").appendChild(itemPriceLI);

    // add to total price
    let itemPriceCountTxt = itemPriceCount.innerHTML.replace("$", "");
    let itemPriceNum = Number(itemPriceCountTxt);
    totalPriceHTML += itemPriceNum;
    totalPrice.innerHTML = "$" + totalPriceHTML;

    // clear shopping bag empty text
    let shoppingBagEmpty = document.getElementById("shopping-bag-empty");
    document.getElementById("shopping-bag-ul").removeChild(shoppingBagEmpty);
  }
}

//-------SHOPPING BAG ON--------
shoppingBagCount.onclick = function () {displayShoppingBagOnOff()};

function displayShoppingBagOnOff() {
  if (navBag.className == "nav-bag-light") {
    document.getElementById("display-shopping-bag").className = "display-shopping-bag-on";
    navBag.setAttribute("src", "images/icons/shopping-bag-duotone.svg");
    navBag.className = "nav-bag-duotone";
    homeIcon.className = "icon-home-off";
    navBtn.className = "nav-btn-off";
    console.log(removeItemBtn);
    console.log(removeItemInBag);
    console.log(removePrice);
    setTimeout(function () {document.getElementById("main").className = "main";}, 500);
  }
  else {
    document.getElementById("display-shopping-bag").className = "display-shopping-bag-off";
    navBag.className = "nav-bag-light";
    navBag.setAttribute("src", "images/icons/shopping-bag-light-wht.svg");
    document.getElementById("main").className = "";
    homeIcon.className = "icon-home-on";
    navBtn.className = "nav-btn-on";
  }
}

// -------CLEAR SHOPPING BAG-------

var clearBagBtn = document.querySelector("#shopping-bag-header-x");

clearBagBtn.onclick = function () {clearShoppingBag()};

function clearShoppingBag() {
  if (itemCount >= 1) {
    let confirmClearBag = confirm("remove all items from your shopping bag?");
    if (confirmClearBag == true) {

      // bag icon animation
      navBag.className = "nav-bag-light";
      navBag.setAttribute("src", "images/icons/shopping-bag-light-wht.svg");
      setTimeout(function () {
        navBag.setAttribute("src", "images/icons/shopping-bag-duotone.svg");
        navBag.className = "nav-bag-duotone";
      }, 300);

      // remove all items
      let shoppingBag = document.getElementById("shopping-bag-ul");

      while (shoppingBag.hasChildNodes()) {
        shoppingBag.removeChild(shoppingBag.firstChild);
      }

      // reset shopping bag count
      while (itemCount >= 1) {
        itemCount -= 1;
      }

      while (totalPriceHTML >= 1) {
        totalPriceHTML -= 1;
      }

      totalPrice.innerHTML = "$" + totalPriceHTML;

      // reset shopping bag count html
      shoppingBagCount.innerHTML = "";
      totalItems.innerHTML = itemCount;
      let shoppingBagEmpty = document.createElement("li");
      shoppingBagEmpty.id = "shopping-bag-empty";
      shoppingBagEmpty.innerHTML = "your shopping bag is empty.";
      document.getElementById("shopping-bag-ul").appendChild(shoppingBagEmpty);
    }
  }
  else {
    alert("your shopping bag is empty.");
  }
}


// -------REMOVE BAG ITEM-------
 window.addEventListener("click", shoppingArrayUpdate);

 function shoppingArrayUpdate() {
   var removeItemBtn = document.getElementsByClassName("remove-item");
   console.log(removeItemBtn);

   var removeItemInBag = document.getElementsByClassName("item-in-bag");
   console.log(removeItemInBag);

   var removePrice = document.getElementsByClassName("item-price-li");
   console.log(removePrice);

   for (let i = 0, len = removeItemBtn.length | 0; i < len; i = i + 1 | 0) {
     var removeItemBtnCount = removeItemBtn[i];
     var removeItemInBagCount = removeItemInBag[i];
     var removePriceCount = removePrice[i];
     removeItemBtnCount.onclick = function () {
       // bag icon animation
       navBag.className = "nav-bag-light";
       navBag.setAttribute("src", "images/icons/shopping-bag-light-wht.svg");
       setTimeout(function () {
         navBag.setAttribute("src", "images/icons/shopping-bag-duotone.svg");
         navBag.className = "nav-bag-duotone";
       }, 300);
       // remove item
       let shoppingBagUl = document.getElementById("shopping-bag-ul");
       shoppingBagUl.removeChild(removeItemBtnCount);
       shoppingBagUl.removeChild(removeItemInBagCount);
       shoppingBagUl.removeChild(removePriceCount);
       // subtract item from bag count
       itemCount -= 1;
       shoppingBagCount.innerHTML = itemCount;
       totalItems.innerHTML = itemCount;

       // subtract from total price
       let removePriceCountTxt = removePriceCount.innerHTML.replace("$", "");
       let removePriceNum = Number(removePriceCountTxt);
       totalPriceHTML -= removePriceNum;
       totalPrice.innerHTML = "$" + totalPriceHTML;

       // reset bag count html
       if (itemCount == 0) {
         shoppingBagCount.innerHTML = "";
         // reset shopping bag empty text
         let shoppingBagEmpty = document.createElement("li");
         shoppingBagEmpty.id = "shopping-bag-empty";
         shoppingBagEmpty.innerHTML = "your shopping bag is empty.";
         document.getElementById("shopping-bag-ul").appendChild(shoppingBagEmpty);
       }
     }
   }
 }

//-------Check Out Button-------
var checkOutBtn = document.getElementById("checkout-btn");

var checkOutBtnImg = document.getElementById("checkout-btn-img");

checkOutBtn.onclick = function () {
  checkOutBtnImg.setAttribute("src", "images/icons/cash-register-duotone.svg");
  setTimeout(function (){checkOutBtnImg.setAttribute("src", "images/icons/cash-register-light.svg");}, 250)
}

//-------NAVIGATION-------
document.getElementById("icon-home").onclick = function () {homeBtnClick()};

function homeBtnClick() {
  document.getElementById("icon-home").className = "icon-home-off";
  setTimeout(window.location.href = 'index.html', 5000);
}

var navBtn = document.getElementById("nav-btn");

var barsIcon = document.getElementById("bars-icon");

var navItems = document.getElementById("nav-items");

var homeIcon = document.getElementById("icon-home");

var bagIcon = document.getElementById("icon-bag");


navBtn.onclick = function() {navBtnClick()};

function navBtnClick() {
  if (navItems.className == "nav-items-off") {
    navItems.className = "nav-items-on";
    barsIcon.setAttribute("src", "images/icons/times-light.svg");
    homeIcon.className = "icon-home-off";
    bagIcon.className = "icon-bag-off";
    shoppingBagCount.className = "shoppingBagCount-off";
    setTimeout(function () {document.getElementById("main").className = "main";}, 500);

  }
  else {
    navItems.className = "nav-items-off";
    barsIcon.setAttribute("src", "images/icons/bars-light.svg");
    homeIcon.className = "icon-home-on";
    bagIcon.className = "icon-bag-on";
    shoppingBagCount.className = "shoppingBagCount-on";
    document.getElementById("main").className = "";
  }
}

// Nav Toolbar Buttons

var emailBtn = document.getElementById("email-btn");
var emailIconImg = document.getElementById("email-icon-img");

emailBtn.onclick = function emailBtnClick () {
  emailIconImg.setAttribute("src", "images/icons/envelope-open-light.svg");
  setTimeout(function () {emailIconImg.setAttribute("src", "images/icons/envelope-light.svg");},300);
}

var igBtn = document.getElementById("ig-btn");
var igIconImg = document.getElementById("ig-icon-img");

igBtn.onclick = function igBtnClick () {
  igIconImg.setAttribute("src", "images/icons/instagram-square-brands.svg");
  setTimeout(function () {igIconImg.setAttribute("src", "images/icons/instagram-brands.svg");},300);
}

var signInBtn = document.getElementById("sign-in-btn");
var signInIconImg = document.getElementById("sign-in-icon-img");

signInBtn.onclick = function signInBtnClick () {
  signInIconImg.setAttribute("src", "images/icons/sign-in-duotone.svg");
  setTimeout(function () {  signInIconImg.setAttribute("src", "images/icons/sign-in-light.svg");},300);
}


//-------END NAV-------



//-------Reveal on Scroll-------
/*
var item1 = document.querySelector("#item1");
window.addEventListener('scroll', function (item1Reveal) {
	if (isInViewport(item1)) {
    item1.className = "item1-on";
  } else {
    item1.className = "item1-off";
  }
}, false);

var item2 = document.querySelector("#item2");
window.addEventListener('scroll', function (item2Reveal) {
	if (isInViewport(item2)) {
    item2.className = "item2-on";
  } else {
    item2.className = "item2-off";
  }
}, false);

var item3 = document.querySelector("#item3");
window.addEventListener('scroll', function (item3Reveal) {
	if (isInViewport(item3)) {
    item3.className = "item3-on";
  } else {
    item3.className = "item3-off";
  }
}, false);

var item4 = document.querySelector("#item4");
window.addEventListener('scroll', function (item4Reveal) {
	if (isInViewport(item4)) {
    item4.className = "item4-on";
  } else {
    item4.className = "item4-off";
  }
}, false)
*/
