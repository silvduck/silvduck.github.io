// Configura el número total de imágenes en la carpeta actual
const totalImages = 9; // Cambia esto dependiendo del número de imágenes en la carpeta actual
const folderPath = "images/japan2024/";
const fileExtension = ".jpg";

// Genera dinámicamente la lista de fotos
const photos = Array.from({ length: totalImages }, (_, i) => `${folderPath}${String(i + 1).padStart(3, '0')}${fileExtension}`);

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
