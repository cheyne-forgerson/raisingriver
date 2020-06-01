window.onscroll = function() {revealNav(), revealIconLR(), revealIconC()} ;

document.ready = setTimeout(function revealHeader() {
    document.getElementById("collection").className = "header-img";
    document.getElementById("doubleRs").className = "header-title-1-off";
    document.getElementById("raisingriver").className = "header-title-2-on";
}, 1000);

//-------NAVIGATION-------
function revealNav() {
  if (document.body.scrollTop > (window.innerHeight)*0.1 || document.documentElement.scrollTop > (window.innerHeight)*0.1) {
    document.getElementById("nav-btn").className = "nav-btn-on";
  }
  else {
    document.getElementById("nav-btn").className = "nav-btn-off";
  }
}

// Get the button, and when the user clicks on it, execute myFunction
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

// Is element in view
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var brandImgL = document.querySelector("#brand-imgL");
var brandImgC = document.querySelector("#brand-imgC");
var brandImgR = document.querySelector("#brand-imgR");
window.addEventListener('scroll', function (brandImgCReveal) {
	if (isInViewport(brandImgC)) {
    brandImgL.className = "brand-imgL-on";
    brandImgC.className = "brand-imgC-on";
    brandImgR.className = "brand-imgR-on";
  } else {
    brandImgL.className = "brand-imgL-off";
    brandImgC.className = "brand-imgC-off";
    brandImgR.className = "brand-imgR-off";
  }
}, false);


var shopLink = document.querySelector("#shop-link");
var shopLinkText = document.querySelector("#shop-link-text");
var navBtn = document.getElementById("nav-btn");
window.addEventListener('scroll', function (shopLinkReveal) {
	if (isInViewport(shopLink) && isInViewport(shopLinkText)) {
    shopLink.className = "shop-link-on";
    setTimeout(function shopLinkTextHover() {
      shopLinkText.className = "shop-link-text-hover";
    }, 1000);
    setTimeout(function shopLinkTextOn() {
      shopLinkText.className = "shop-link-text";
    }, 1500);
    setTimeout(function navBtnHover() {
      navBtn.className = "nav-btn-on-hover";
    }, 1500);
    setTimeout(function navBtnOn() {
      navBtn.className = "nav-btn-on";
    }, 2000);
  } else {
    shopLink.className = "shop-link-off";
  }
}, false);
