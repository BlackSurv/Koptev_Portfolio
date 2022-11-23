// let slideIndex = 0;
// let SlideSwitched=false;
// AutoSlides();

// function AutoSlides() {
//     if(SlideSwitched==false){
//         let slides = document.getElementsByClassName("Slides");
//         let dots = document.getElementsByClassName("dot");
//         for (let i = 0; i < slides.length; i++) {
//            slides[i].style.display = "none";
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}
//         for (let i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";
//         dots[slideIndex-1].className += " active";
//         setTimeout(AutoSlides, 5000);
//     }
// }

// function currentSlide(n) {
//     SlideSwitched=true;
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("Slides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {
//         slideIndex = 1
//       }
//     if (n < 1) {
//         slideIndex = slides.length
//       }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//       }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//       }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
// }


/* Устанавливаем индекс слайда по умолчанию */
let image_slideIndex = 1;
showSlides(image_slideIndex);


/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(image_slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(image_slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(image_slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let image_slides = document.getElementsByClassName("image_slider");
    let text_slides = document.getElementsByClassName("text_slider")
    if (n > image_slides.length) {
      image_slideIndex = 1
    }
    if (n < 1) {
      image_slideIndex = image_slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of image_slides) {
        slide.style.display = "none";
    }   
    for (let slide of text_slides) {
      slide.style.display = "none";
    }   
    image_slides[image_slideIndex - 1].style.display = "flex"; 
    text_slides[image_slideIndex - 1].style.display = "flex"; 
}