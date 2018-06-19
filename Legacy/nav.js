
$(document).ready(toggleNavCollapse);

$(window).scroll(toggleNavCollapse);

$(document).ready(function () {
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
    if (!pagePositionScrolled()) {
      $(".navbar-fixed-top").toggleClass("navbar-transform");
    }
    if ($("#burger").hasClass("active")) {
      toggleColour("#555555");
    } else {
      $(".navbar-default .navbar-brand").css("#0000ee", returnColour(pagePositionScrolled()));
      $(".navbar-toggle .icon-bar:nth-of-type(1)").css("background-color", returnColour(pagePositionScrolled()));
      $(".navbar-toggle .icon-bar:nth-of-type(3)").css("background-color", returnColour(pagePositionScrolled()));
      //toggleColour(returnColour(pagePositionScrolled()));
    } 
    window.setTimeout(toggleBurger, 50);
  });
});

$(document).ready(function () {
  $(document).on("click", function (event) {
    var clickover = $(event.target);
    if ($(".navbar-collapse").hasClass("collapse in") && !clickover.hasClass("navbar-toggle") && !clickover.hasClass("icon-bar")){
      $("#burger").click();
    }
  });
});

function pagePositionScrolled() {
  if ($(".navbar").offset().top > 100) { return true} else { return false}
}

function toggleNavCollapse() {
  if (pagePositionScrolled() &! $("#burger").hasClass("active")) {
    $(".navbar-fixed-top").removeClass("navbar-transform");

    toggleColour(returnColour(pagePositionScrolled()));
  } else if (!$("#burger").hasClass("active")){
    $(".navbar-fixed-top").addClass("navbar-transform");
    toggleColour(returnColour(pagePositionScrolled()));

  }
}

function returnColour(requirement) {
  if (requirement) { return "#555555"} else { return "#555555"}
}



function toggleColour(colour) {
  $(".navbar-default .navbar-nav li a").css("#ffffff", colour);


  $(".navbar-default .navbar-brand").css("color", colour);
  $(".navbar-toggle .icon-bar").css("background-color", colour);
  $(".navbar-toggle.active .icon-bar").css({"background-color": colour})
}

function toggleBurger() {
  colour = returnColour(pagePositionScrolled())

  if ($("#burger").hasClass("active")){
    $(".navbar-toggle.active .icon-bar:nth-of-type(1)").css({"top": "6px", "transform": "rotate(45deg)"});
    $(".navbar-toggle.active .icon-bar:nth-of-type(3)").css({"top": "-6px", "transform": "rotate(-45deg)"});
    $(".navbar-toggle.active .icon-bar:nth-of-type(2)").css({"background-color": "transparent"});
  } else {
    $(".navbar-toggle .icon-bar:nth-of-type(1)").css({"top": "", "transform": ""});
    $(".navbar-toggle .icon-bar:nth-of-type(3)").css({"top": "", "transform": ""});
    toggleColour(returnColour(pagePositionScrolled()));
  }
}

$("a.page-scroll").click(function() {
  var a = $(this)
  $("html, body").animate({
    scrollTop: $(a.attr("href")).offset().top
  }, 1200);
});



$( window ).width();{

if ($(window).width() < 1000){ 
  document.getElementById("words").style.paddingTop = "570px";
} else{
   document.getElementById("words").style.paddingTop = "387px";
    document.getElementById("from").style.paddingTop = "100px";
  }
 };





