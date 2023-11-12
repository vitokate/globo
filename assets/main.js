//General
$("select").addClass("select form-control");
$("form input[type='tel'], form input[type='password'], form input[type='number'],form input[type='text'], form input[type='email'], form input[type='date'], form textarea").addClass("form-control");
$("input.invalid").addClass("is-invalid");

// Pagination
$(".pager").addClass("pagination justify-content-center");
$(".pagination li").addClass("page-item");
$(".pagination li a").addClass("page-link");
$(".pagination").removeClass("pager");
$(".pagination").wrapAll("<nav>");

// Customer
$("#credentials_email").wrapAll('<div class="form-group">');
$("#customer_details #customer_contacts, #customer_details #customer_additional_fields, #customer_details #customer_details_password, #customer_details .actions").wrapAll('<div class="card"><div class="card-body">');

// Contact Page
$("#contactpage").addClass("row");
$("#contactpage .actions, #contactpage p.required").addClass("col-12");
$("#contactpage .actions .button").addClass("btn btn-primary w-100 btn-block");
$("#contactpage_email, #contactpage_name, #contactpage_phone").addClass("form-group col-md-4");
$("#contactpage_message").addClass("form-group col-12");
$("#contactpage > .success").wrapAll('<div class="col-12 mb-3">');
$("#contactpage > .error").wrapAll('<div class="col-12 mb-3">');
$("#contactpage .success, #contactpage .error").addClass("alert d-block");
$("#contactpage .success").addClass("alert-success");
$("#contactpage .error").addClass("alert-danger");
$("#contactpage .field .error").addClass("mt-2 mb-0 py-2");

//Blog post
$("figure iframe").parent("figure").addClass("videoWrapper");
$(".page-body table, .description table").addClass("table table-bordered");

// Cart
$("#coupon_code").addClass("form-control").wrapAll('<div class="form-group">');
$("#coupon_form label").addClass("alert w-100 mt-2 small");
$("#coupon_form .success").addClass("alert-success");
$("#coupon_form .warning").addClass("alert-warning");
$("#coupon_form .error").addClass("alert-danger");
$("#estimate_shipping_form > label:nth-child(1), #estimate_shipping_country").wrapAll('<div class="form-group arrow">');
$("#estimate_shipping_form > label:nth-child(2), #estimate_shipping_region").wrapAll('<div class="form-group arrow">');
$("#estimate_shipping_form > label:nth-child(3), #estimate_shipping_municipality").wrapAll('<div class="form-group arrow">');
$("#estimate_shipping_form > label:nth-child(4), #estimate_shipping_postal").wrapAll('<div class="form-group">');

// Checkout
$("#contacts > div, #shipping_address > div, #billing_address > div, #other > div").addClass("field col-md-6");
$(".checkbox").removeClass("form-control");
$("#estimate_shipping_button, #set_shipping_button, #set_coupon_code_button").addClass("btn btn-secondary btn-block");
$(".actions .button").addClass("btn btn-primary btn-block mb-2");
$("#checkout .actions .button").addClass("btn btn-secondary");
$(".checkbox-field").addClass("checkbox");
$(".field label").addClass("control-label");
$("#checkout").wrapAll('<div class="card mb-3">');
$("#checkout #contacts, #checkout #shipping_address, #checkout #billing_address, #checkout  #other").addClass("p-md-4 p-3 border-bottom");
$("#checkout #contacts > div").wrapAll('<div class="row">');
$("#checkout #shipping_address > div").wrapAll('<div class="row">');
$("#checkout #billing_address > div").wrapAll('<div class="row">');
$("#checkout #other > div").wrapAll('<div class="row">');
$("#checkout p.required").insertAfter("#contacts h2");
$("#checkout .col-lg-8, #checkout .col-lg-4").wrapAll('<div class="row">');
$("#checkout #shipping_address_same_as_shipping").addClass("col-12");

$("#checkout #payments_options li, #checkout #shipping_options li").addClass("form-check pl-4");
$("#checkout #payments_options li > input, #checkout #shipping_options li > input ").addClass("form-check-input");
$("#checkout #payments_options li > label, #checkout #shipping_options li > label ").addClass("form-check-label");

$("#other_additional_information").removeClass("col-md-6");
$("#other_additional_information").addClass("col-12");
$("#payments, #shipping").wrapAll('<div class="p-md-4 p-3"><div class="row">');
$("#shipping").addClass("col-md-6");
$("#payments").addClass("col-md-6 mb-md-0 mb-4");
$("#checkout .checkbox-field").addClass("no-label");
$("#checkout #payments ul, #checkout #shipping ul").addClass("list-group m-0 p-0");
$("#checkout #payments ul li, #checkout #shipping ul li").addClass("list-group-item");

$("#shipping_address_same_as_shipping").removeClass("col-md-6");
$("#contacts_accepts_marketing").removeClass("col-md-6 no-label form-group");
$("#contacts_accepts_marketing").addClass("px-0 mt-2");
$("#contacts_accepts_marketing > input").removeClass("form-control");

// Success
$("#credentials_password").wrapAll('<div class="form-group">');
$("#credentials_password_confirmation").wrapAll('<div class="form-group">');

// Customer
$("#customer_address #shipping_address").addClass("row");
$("#customer_details #contacts_email").wrapAll('<div class="form-group">');
$("#customer_details #contacts_phone").wrapAll('<div class="form-group">');
$("#customer_details #details_password").wrapAll('<div class="form-group">');
$("#customer_details #details_confirm_password").wrapAll('<div class="form-group">');
$(".pending-payment").addClass("badge badge-warning mt-2");
$(".paid").addClass("badge badge-success");
$(".abandoned").addClass("badge badge-secondary");
$(".canceled").addClass("badge badge-danger");
$(".shipped").addClass("badge badge-primary");
$("#address #shipping_address_name, #address #shipping_address_surname, #address #shipping_address_address, #address #shipping_address_taxid, #address #shipping_address_city, #address #shipping_address_postal, #address #shipping_address_country, #address #shipping_address_region, #address #billing_address_name, #address #billing_address_surname, #address #billing_address_address,#address #billing_address_taxid, #address #billing_address_city, #address #billing_address_postal, #address #billing_address_country, #address #billing_address_region,#customer_details_password > div").addClass("form-group ");

$("#customer_additional_fields > div").removeClass("col-md-6");

$("ul.nav > li.dropdown > ul > li").click(function (event) {
  // stop bootstrap.js to hide the parents
  event.stopPropagation();
  // hide the open children
  $(this).find("ul.nav > li.dropdown > ul > li").removeClass("open");
  // add 'open' class to all parents with class 'dropdown-submenu'
  $(this).parents("ul.nav > li.dropdown > ul > li").addClass("open");
  // this is also open (or was)
  $(this).toggleClass("open");
});

$(document).ready(function () {
  $("#main-menu .nav-item.dropdown, #main-menu .dropdown-menu.multi-level").hover(
    function () {
      $(this).addClass("sfhover");
    },
    function () {
      $(this).removeClass("sfhover");
    }
  );
});

// --- Menu Mobile -- //
$(document).ready(function () {
  $(".menu-header .item-1 span").click(function () {
    $(".menu-header .item-1").toggleClass("active");
    $(".menu-header .item-2, .menu-header .item-3").removeClass("active");
  });
  $(".menu-header .item-2 span").click(function () {
    $(".menu-header .item-2").toggleClass("active");
    $(".menu-header .item-1, .menu-header .item-3").removeClass("active");
  });
  $(".menu-header .item-3 span").click(function () {
    $(".menu-header .item-3").toggleClass("active");
    $(".menu-header .item-1, .menu-header .item-2").removeClass("active");
  });

  // mobile menu
  $(".menu-mobile li.has-dropdown a.first-trigger").click(function () {
    $(".menu-mobile").toggleClass("active");
    $(this).next().toggleClass("active");
  });

  // mobile menu - N levels down
  $(".menu-mobile li.has-dropdown a.last-trigger").click(function () {
    $(".menu-mobile").toggleClass(
      $(this).attr("class").split(" ").shift().toString()
    );
    $(this).next().addClass("active");
  });

  // back button on mobile menu
  $(".menu-mobile li.has-dropdown a.back-level-1").click(function () {
    $(".menu-mobile, ul.dropdown").removeClass("active");
  });

  // back to top mobile menu
  $(".menu-mobile li.has-dropdown > a").click(function () {
    $(".mobilenav-inner").animate(
      {
        scrollTop: $(".menu-top").offset().top - 100,
      },
      10
    );
  });

  // back button on mobile menu - N levels up
  $(".menu-mobile li.has-dropdown a[class^='back-level-']").click(function () {
    classesArray = $(this).attr("class").split("-");
    classesArray.shift();

    $(".menu-mobile").toggleClass(classesArray.join("-"));
    $("ul." + classesArray.join("-").toString() + ".dropdown").removeClass(
      "active"
    );
  });

 $(".nav-icon,.nav-bg-opacity").click(function () {
    $(".nav-icon").toggleClass("open");
    $(".mobilenav").toggleClass("open");
    $("body").toggleClass("menuopen");
  });
});
