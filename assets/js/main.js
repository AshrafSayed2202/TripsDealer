//slice function
function sliceTextToNumber(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.trim();
    var maxChars = parseInt(element.getAttribute('data-max'));
    if (text.length > maxChars) {
      var slicedText = text.slice(0, maxChars);
      element.textContent = slicedText + '...';
    }
  }
}
sliceTextToNumber('slice');
// Example: Slice text based on the data-max attribute
//end slice function
// loader
function loader() {
  $('.lds-ellipsis').fadeOut();
  $('.preloader').delay(333).fadeOut('slow');
  $('body').delay(333);
  $('body').css('overflow-y', 'auto');
  $('html').css('overflow-y', 'auto');
}
//end loader
//start Slider
$('.owl-carousel.blogs-slider').owlCarousel({
  margin: 25,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  rtl: true,
  loop: false,
  responsive: {
    0: { items: 1 }, 768: { items: 2 }, 1170: { items: 3 }
  }
});
$('.owl-carousel.partnerSlider').owlCarousel({
  margin: 25,
  nav: true,
  autoplay: true,
  autoplayTimeout: 1500,
  rtl: true,
  loop: false,
  responsive: {
    0: { items: 2 }, 768: { items: 3 }, 1170: { items: 5 }
  }
});
//end Slider
// Function to allow only numbers
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
  return true;
}
// Function to prevent copying and pasting non-numeric characters in a number input
function onPaste(event) {
  const pastedText = event.clipboardData?.getData('text');
  if (pastedText && /\D/.test(pastedText)) {
    event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
  }
}
// Function to allow only letters
function handleKeydown(event) {
  const allowedKeys = /[a-zA-Zء-ي\s]/;
  const keyPressed = event.key;
  if (!allowedKeys.test(keyPressed)) {
    event.preventDefault();
  }
}
// Function to prevent copying and pasting numbers in a text input
function handlePaste(event) {
  event.preventDefault();
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text/plain');
  const allowedPattern = /^[a-zA-Zء-ي\s]+$/;
  if (!allowedPattern.test(pastedText)) {
    // Optionally, you can display an error message or perform some action here.
    return;
  }
  // Manipulate the pasted text if needed
  const modifiedText = pastedText.toUpperCase();
  // Insert the modified text into the input field or perform any other desired action
  const inputElement = event.target;
  const currentPosition = inputElement.selectionStart || 0;
  const inputValue = inputElement.value;
  const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
  inputElement.value = newValue;
}
if ($(window).width() <= 1024) {
  $('.dropdown-toggle').attr('data-bs-toggle', 'dropdown');
}
$(document).ready(function () {
  $('.counter1').counterUp({
    delay: 10,
    time: 5000,
  });
  $('.counter2').counterUp({
    delay: 10,
    time: 3000,
  });
  AOS.init();
  if ($('#download_image').length > 0) {
  }
  loader()
});
// Start comments
document.querySelectorAll('.person-image').forEach(e => {
  e.addEventListener('click', () => {
    removePersonActive();
    removeCommentActive()
    e.classList.add('active');
    document.querySelector(`.comment-container:nth-child(${e.dataset.person})`).classList.add('actv')
  })
});
function removePersonActive() {
  document.querySelector('.person-image.active').classList.remove('active')
}

function removeCommentActive() {
  document.querySelector('.comment-container.actv').classList.remove('actv')
}
function switchComment(e) {
  let theComment = document.querySelector('.comment-container.actv')
  let sum = parseInt(e) + parseInt(theComment.dataset.comment)
  if (sum == 0) {
    sum = 8
  } else if (sum == 9) {
    sum = 1
  }
  console.log(sum);
  removePersonActive()
  removeCommentActive()
  document.querySelector(`.comment-container:nth-child(${sum})`).classList.add('actv')
  document.querySelector(`.person-image:nth-child(${sum})`).classList.add('active')
}

// End comments 