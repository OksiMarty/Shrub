let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("sectionSixthContainerItem ");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "block";
}

function sayThanks () {
  var newItem = document.createElement("article");
  newItem.innerHTML="Done, thank you! We`ll message you";
  var form = document.getElementById("form");
  form.appendChild(newItem);
}
