// Массив путей к изображениям
const images = [
  "/projects/gallery/images/image1.jpg",
  "/projects/gallery/images/image2.jpg",
  "/projects/gallery/images/image3.jpg",
  "/projects/gallery/images/image4.jpg",
  "/projects/gallery/images/image5.jpg",
];

// Текущее значение индекса
let currentIndex = 0;

// Получаем доступ к HTML элементам
const currentImage = document.getElementById('current-image')
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')

// Обработка нажатия на кнопку Вперед

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length
    currentImage.src = images[currentIndex]
})

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length
    currentImage.src = images[currentIndex]
})


currentImage.addEventListener('click', () => {
    currentImage.requestFullscreen()
})