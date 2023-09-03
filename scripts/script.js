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



class ImgComponent {
  constructor(groupImg, srcImg, srcToProject, size, descrip, fit) {

      this.render();

      this.elem.className = `img_gallery ${size}_box`;
      this.elem.dataset.group = `${groupImg}`;
      this.elem.href = `${srcToProject}`;
      this.elem.innerHTML = `
          <div class="mask"></div>
          <img src="images/${srcImg}" alt="gallery_img" style="object-fit: ${fit};">
          <div class="descr">
              <h2>${descrip.header}</h2>
              <p>${descrip.text}</p>
          </div>
      `;
      this.appendElem();
      this.onClick();
  } 
  render = () => { 
      this.elem = document.createElement('div');
  }
  appendElem = () => { 
      document.querySelector('.gallery').append(this.elem);
  }
  onClick = () => { 
      this.elem.addEventListener('click', () => {
          window.open(this.elem.href);
      })
  }
}

new ImgComponent(1, '3Dкоттедж.jpg', '', 'short', {'header': 'Коттедж', 'text': 'Модель коттеджа, созданная в 3Ds Max и отрендеренная на Arnold\'e'});
new ImgComponent(1, 'Zbrush.png', 'https://sketchfab.com/3d-models/19f41ea27ad344febed49894f4c05fe7', 'short', {'header': 'Череп', 'text': 'Модель черепа, сделанная в Zbrush'});
new ImgComponent(1, 'Оцифровка.png', 'https://sketchfab.com/3d-models/buddha-statuette-bb0a144ab7d742de85b832bd9de125d0', 'short', {'header': 'Статуэтка Будды', 'text': 'Фотограмметрия статуэтки Будды'});
new ImgComponent(1, 'Оцифровка2.png', 'https://sketchfab.com/3d-models/e8cd4b2d464147ea91125d1d0f38c1a3', 'short', {'header': 'Сумка', 'text': 'Первая фотограмметрия настоящего объекта'});
new ImgComponent(1, 'Оцифровка3.png', 'https://sketchfab.com/3d-models/ef93e97468a84c20891114d6f3068abe', 'short', {'header': 'Осколки вазы', 'text': 'Модели были созданны в ходе прохождения технической практики в сфу'});
new ImgComponent(1, 'Игра.png', 'images/Игра.mp4', 'short', {'header': 'Shoot \'em up игра', 'text': 'Shoot \'em up игра, созданная в Unity с применением C#'},'contain');



// class ImgComponent {
//   constructor(groupImg, srcImg, srcToProject, size = 'short', float = 'left') { // передаем аргументы: группа изображений, ссылка на изображение, ссылка на проект, размер картинки по заранее созданным типам(short, long, high), значение свойства float;

//       this.render() //создаем корневой DOM элемент

//       this.elem.className = `img_gallery ${size}_box`; // присваиваем классы для картинок, и также класс описывающий его тип
//       this.elem.dataset.group = `${groupImg}` // Присваиваем data-атрибут 
//       this.elem.href = `./articles/${srcToProject}` // Присваиваем ссылку на проект, на который ведет картинка
//       this.elem.style.float = float; // Присваиваем свойство float
//       this.elem.innerHTML = `
//       <img src="images/${srcImg}" alt="gallery_img">
//       ` // Вкладываем внутрь элемента картинку

//       this.appendElem() // Добавляем элемент на страницу
//       this.onClick(); // Добавляем на элемент событие onclick
//   } 
//   render = () => { 
//       this.elem = document.createElement('div') //создаем метод, создающий корневой DOM элемент нашей картинки.
//   }
//   appendElem = () => { // Создаем метод, для добавления элемента на страницу
//       document.querySelector('.gallery').append(this.elem);
//   }
//   onClick = () => { // Создаем метод для прослушки события onclick элемента, для перехода по ссылке.
//       this.elem.addEventListener('click', () => {
//           window.open(this.elem.href);
//       })
// }
// }
// new ImgComponent(1, '3Dкоттедж.jpg',  'article1.html', 'long');
// new ImgComponent(1, 'Zbrush.png', 'article1.html', 'long');
// new ImgComponent(1, 'Оцифровка.png',  'article1.html', 'long');
// new ImgComponent(1, 'Оцифровка2.png', 'article1.html', 'long');
