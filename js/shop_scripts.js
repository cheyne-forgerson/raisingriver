window.onload = setTimeout(function revealTitle() {
    document.getElementById("titleS").className = "titleS-on";
    document.getElementById("titleH").className = "titleH-on";
    document.getElementById("titleO").className = "titleO-on";
    document.getElementById("titleP").className = "titleP-on";
    document.getElementById("titleUnderline").className = "titleUnderline-on";
    document.getElementById("icon-home").className = "icon-home-on";
    document.getElementById("nav-btn").className = "nav-btn-on";
    document.getElementById("icon-bag").className = "icon-bag-on";
}, 250);

window.onload = setTimeout(function welcome() {
    document.getElementById("revealShop-h1-1").className = "revealShop-h1-1-on";
}, 500);

// window.onload = setTimeout(function stayAwhile() {
//     document.getElementById("revealShop-h1-2").className = "revealShop-h1-2-on";
// }, 3000);

window.onload = setTimeout(function revealShop() {
    document.getElementById("revealShop").className = "revealShop-on";
}, 2250);


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

/* -------ADD ITEM TO CART------- */
var addItemBtn = document.getElementsByClassName("addItemBtn");
console.log(addItemBtn);
var shoppingBagCount = document.getElementById("shoppingBagCount");
var iconBagImg = document.getElementById("icon-bag-img");
var itemCount = 0;

var itemTitle = document.getElementsByClassName("item-title");
console.log(itemTitle);

var itemPrice = document.getElementsByClassName("item-price");
console.log(itemPrice);

for (let i = 0, len = addItemBtn.length | 0; i < len; i = i + 1 | 0) {
  let addItemBtnCount = addItemBtn[i];
  addItemBtnCount.onclick = function () {
    itemCount += 1;
    shoppingBagCount.innerHTML = itemCount;
    iconBagImg.setAttribute("src", "images/icons/shopping-bag-solid2.svg");
    // addItemBtnCount.setAttribute("src", "images/icons/shopping-bag-solid.svg");
    addItemBtnCount.classList.add("addItemBtn-clicked");
    setTimeout(function removeBagClasses() {
      addItemBtnCount.setAttribute("src", "images/icons/shopping-bag-solid2.svg");
      iconBagImg.setAttribute("src", "images/icons/shopping-bag-solid.svg");
      addItemBtnCount.classList.remove("addItemBtn-clicked");
    }, 500);
    let removeItem = document.createElement("LI");
    removeItem.className = "shopping-bag-x fal fa-times";
    document.getElementById("shopping-bag-ul").appendChild(removeItem);
    let itemInBag = document.createElement("LI");
    let itemTitleText = itemTitle[i].textContent;
    itemInBag.innerHTML = itemTitleText;
    itemInBag.className = "item-in-bag";
    document.getElementById("shopping-bag-ul").appendChild(itemInBag);
    let itemPriceCountText = itemPrice[i].textContent;
    let itemPriceLI = document.createElement("LI");
    itemPriceLI.innerHTML = itemPriceCountText;
    itemPriceLI.className = "item-price-li";
    document.getElementById("shopping-bag-ul").appendChild(itemPriceLI);
    let shoppingBagEmpty = document.getElementById("shopping-bag-empty");
    document.getElementById("shopping-bag-ul").removeChild(shoppingBagEmpty);
  }
}

//-------SHOPPING BAG ON--------
shoppingBagCount.onclick = function () {displayShoppingBagOn()};

function displayShoppingBagOn() {
  document.getElementById("icon-bag").className = "icon-bag-off";
  document.getElementById("display-shopping-bag").className = "display-shopping-bag-on";
  shoppingBagCount.classList.add("shoppingBagCount-off");
}

//-------SHOPPING BAG OFF--------
var shoppingBagClose = document.getElementById("close-shopping-bag");
shoppingBagClose.onclick = function () {displayShoppingBagOff()};

function displayShoppingBagOff() {
  document.getElementById("icon-bag").className = "icon-bag-on";
  document.getElementById("display-shopping-bag").className = "display-shopping-bag-off";
  shoppingBagCount.classList.remove("shoppingBagCount-off");
}

// -------CLEAR SHOPPING BAG-------

var clearBagBtn = document.querySelector("#shopping-bag-header-x");

clearBagBtn.onclick = function () {clearShoppingBag()};

function clearShoppingBag() {
  let confirmClearBag = confirm("Remove all items from your shopping bag?");
  if (confirmClearBag == true) {
    let shoppingBag = document.getElementById("shopping-bag-ul");

    while (shoppingBag.hasChildNodes()) {
      shoppingBag.removeChild(shoppingBag.firstChild);
    }
    while (itemCount >= 1) {
      itemCount -= 1;
    }
    shoppingBagCount.innerHTML = "";
    let shoppingBagEmpty = document.createElement("li");
    shoppingBagEmpty.id = "shopping-bag-empty";
    shoppingBagEmpty.innerHTML = "your shopping bag is empty.";
    document.getElementById("shopping-bag-ul").appendChild(shoppingBagEmpty);
  }
}

// -------REMOVE BAG ITEM-------
var removeItemBtn = document.getElementsByClassName("remove-item");
console.log(removeItemBtn);
var removeItemInBag = document.getElementsByClassName("item-in-bag");
console.log(removeItemInBag);
var removePrice = document.getElementsByClassName("item-price-li");
console.log(removePrice);

for (let i = 0, len = removeItemBtn.length | 0; i < len; i = i + 1 | 0) {
  removeItemBtn[i].onclick = function () {
    removeItemInBag[i].remove();
    removePrice[i].remove();
  }
}

//-------NAVIGATION-------
document.getElementById("icon-home").onclick = function () {homeBtnClick()};

function homeBtnClick() {
  document.getElementById("icon-home").className = "icon-home-off";
  setTimeout(window.location.href = 'index.html', 5000);
}

document.getElementById("nav-btn").onclick = function() {navBtnClick()};

function navBtnClick() {
  document.getElementById("nav-items").className = "nav-items-on";
  document.getElementById("nav-btn").className = "nav-btn-off";
}

document.getElementById("nav-close").onclick = function() {navBtnClose()};

function navBtnClose() {
  document.getElementById("nav-items").className = "nav-items-off";
  document.getElementById("nav-btn").className = "nav-btn-on";
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
