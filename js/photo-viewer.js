// Lista de fotos
const photos = [
    "images/japan2024/001.jpg",
    "images/japan2024/002.jpg",
    "images/japan2024/003.jpg",
    "images/japan2024/004.jpg",
    "images/japan2024/005.jpg",
    "images/japan2024/006.jpg",
    "images/japan2024/007.jpg",
    "images/japan2024/008.jpg"
];

let currentIndex = 0;

function updatePage() {
    const photoElement = document.getElementById("current-photo");
    const counterElement = document.getElementById("counter");

    photoElement.src = photos[currentIndex];
    counterElement.textContent = `${currentIndex + 1} / ${photos.length}`;
}

function goToPrevious() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePage();
}

function goToNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePage();
}

function goToFirst() {
    currentIndex = 0;
    updatePage();
}

function goToLast() {
    currentIndex = photos.length - 1;
    updatePage();
}

// Inicializar la página
updatePage();
