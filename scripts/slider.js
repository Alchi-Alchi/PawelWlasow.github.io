var sliderIndex = 0;
function scrollSlides() {
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
  setTimeout (scrollSlides, 3000);
}