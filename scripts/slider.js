var sliderIndex = 0;
carousel();

function carousel() {
  var i;
  var items = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > items.length) {sliderIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  items[sliderIndex-1].style.display = "block";
  dots[sliderIndex-1].className += " active";
  setTimeout (carousel, 3000);
}