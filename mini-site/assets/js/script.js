$(document).ready(function() {
   
    $('#hero').slick({
      dots: true,
      infinite: true,
      speed: 900,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });
});
$('.center-slider').slick({
   centerMode: true,
   centerPadding: '60px',
   slidesToShow: 3,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         dots: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         dots: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }
   ]
 });

//contact form script//
 /* paste this line in verbatim */
 window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
 /* customize formbutton below*/     
 formbutton("create", {
   action: "https://formspree.io/f/xkgjnlwj",
   title: "How can we help?",
   fields: [
     { 
       type: "email", 
       label: "Email:", 
       name: "email",
       required: true,
       placeholder: "your@email.com"
     },
     {
       type: "textarea",
       label: "Message:",
       name: "message",
       placeholder: "What's on your mind?",
     },
     { type: "submit" }      
   ],
   styles: {
     title: {
       backgroundColor: "gray"
     },
     button: {
       backgroundColor: "gray"
     }
   }
 });


//Nav bar Script Start//

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);
