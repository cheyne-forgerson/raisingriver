window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("collection").className = "header-img";
    document.getElementById("doubleRs").className = "header-title-1-off";
    document.getElementById("raisingriver").className = "header-title-2-on";
    document.getElementById("nav-btn").className = "nav-btn-on";
  } else {
    document.getElementById("collection").className = "header-img-off";
    document.getElementById("doubleRs").className = "header-title-1-on";
    document.getElementById("raisingriver").className = "header-title-2-off";
    document.getElementById("nav-btn").className = "nav-btn-off";
  }
}

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("nav-btn").onclick = function() {navBtnClick()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function navBtnClick() {
  document.getElementById("nav-li").classList.toggle("show");
}
