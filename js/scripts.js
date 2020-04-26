window.onscroll = function() {revealNav(), revealIconLR(), revealIconC()} ;

document.ready = setTimeout(function revealHeader() {
    document.getElementById("collection").className = "header-img";
    document.getElementById("doubleRs").className = "header-title-1-off";
    document.getElementById("raisingriver").className = "header-title-2-on";
}, 1000);

function revealNav() {
  if (document.body.scrollTop > (window.innerHeight)*0.1 || document.documentElement.scrollTop > (window.innerHeight)*0.1) {
    document.getElementById("nav-btn").className = "nav-btn-on";
  }
  else {
    document.getElementById("nav-btn").className = "nav-btn-off";
  }
}
//
// function revealIconLR(){
//   if (document.body.scrollTop > (window.innerHeight)*0.4 || document.documentElement.scrollTop > (window.innerHeight)*0.4) {
//     document.getElementById("brand-imgL").className = "brand-imgL-on";
//     document.getElementById("brand-imgR").className = "brand-imgR-on";
//  }
//  else {
//    document.getElementById("brand-imgL").className = "brand-imgL-off";
//    document.getElementById("brand-imgR").className = "brand-imgR-off";
//  }
// }
//
// function revealIconC(){
//   if (document.body.scrollTop > (window.innerHeight)*0.6 || document.documentElement.scrollTop > (window.innerHeight)*0.6) {
//   document.getElementById("brand-imgC").className = "brand-imgC-on";
//  }
//  else {
//      document.getElementById("brand-imgC").className = "brand-imgC-off";
//  }
// }


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
window.addEventListener('scroll', function (brandImgLReveal) {
	if (isInViewport(brandImgL)) {
    brandImgL.className = "brand-imgL-on";
  } else {
    brandImgL.className = "brand-imgL-off";
  }
}, false);

var brandImgC = document.querySelector("#brand-imgC");
window.addEventListener('scroll', function (brandImgCReveal) {
	if (isInViewport(brandImgC)) {
    brandImgC.className = "brand-imgC-on";
  } else {
    brandImgC.className = "brand-imgC-off";
  }
}, false);

var brandImgR = document.querySelector("#brand-imgR");
window.addEventListener('scroll', function (brandImgRReveal) {
	if (isInViewport(brandImgR)) {
    brandImgR.className = "brand-imgR-on";
  } else {
    brandImgR.className = "brand-imgR-off";
  }
}, false);
