// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 750,
  delay: 200
});
ScrollReveal().reveal('.hero .hero-content', { origin: 'top', distance: '25px', delay: 200 });
ScrollReveal().reveal('.hero .hero-img', { origin: 'bottom', distance: '25px', delay: 200 });
ScrollReveal().reveal('.banner', { origin: 'bottom', distance: '0px', delay: 300 });



// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});



// Search Box Buttons Listeners
document.getElementById('search-box').addEventListener('input', function () {
  var searchValue = this.value.toLowerCase();
  var products = document.querySelectorAll('.product-box');
  products.forEach(function (product) {
    var productName = product.querySelector('.feature-title').textContent.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = 'flex';
      product.style.opacity = '0';
      setTimeout(function () {
        product.style.transition = 'opacity 0.2s, transform 0.3s, box-shadow 0.3s';
        product.style.opacity = '1';
      }, 100);
    } else {
      product.style.display = 'none';
    }
  });
});

// Category Buttons Listeners
document.querySelectorAll('.btn-category').forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove active class from all buttons
    document.querySelectorAll('.btn-category').forEach(function (button) {
      button.classList.remove('active');
    });
    // Add active class to clicked button
    this.classList.add('active');

    var category = this.getAttribute('data-category');
    var products = document.querySelectorAll('.product-box');
    if (category == 'all') {
      products.forEach(function (product) {
        product.style.display = 'flex';
        product.style.opacity = '0';
        setTimeout(function () {
          product.style.transition = 'opacity 0.3s, transform 0.3s, box-shadow 0.3s';
          product.style.opacity = '1';
        }, 0);
      });
    } else {
      products.forEach(function (product) {
        if (product.getAttribute('data-category') == category) {
          product.style.display = 'flex';
          product.style.opacity = '0';
          setTimeout(function () {
            product.style.transition = 'opacity 0.3s, transform 0.3s, box-shadow 0.3s';
            product.style.opacity = '1';
          }, 0);
        } else {
          product.style.display = 'none';
        }
      });
    }
  });
});

// Scrolling Arrow Listeners
// Get the width of the category container
var categoryContainer = document.querySelector('.category-filter');
var containerWidth = categoryContainer.getBoundingClientRect().width;

// Category arrows listeners
var leftArrow = document.querySelector('.category-filter-arrows:first-child');
var rightArrows = document.querySelectorAll('.category-filter-arrows:last-child');

leftArrow.addEventListener('click', function () {
  categoryContainer.scrollLeft -= containerWidth * 0.8;
});

rightArrows.forEach(function (arrow) {
  arrow.addEventListener('click', function () {
    categoryContainer.scrollLeft += containerWidth * 0.8;
  });
});
