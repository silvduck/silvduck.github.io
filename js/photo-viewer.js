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

// Obtener índice actual de la URL (o iniciar con la primera imagen)
const params = new URLSearchParams(window.location.search);
let currentIndex = parseInt(params.get("index")) || 0;

// Actualizar imagen y contador
function updatePage() {
    const photoElement = document.getElementById("current-photo");
    const counterElement = document.getElementById("counter");

    photoElement.src = photos[currentIndex];
    counterElement.innerText = `${currentIndex + 1} / ${photos.length}`;
}

// Cambiar a la imagen anterior
function goToPrevious() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    window.location.href = `photo-viewer.html?index=${currentIndex}`;
}

// Cambiar a la imagen siguiente
function goToNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    window.location.href = `photo-viewer.html?index=${currentIndex}`;
}

// Inicializar la página
updatePage();
