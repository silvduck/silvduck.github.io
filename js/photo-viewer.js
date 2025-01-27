let photos = [];
let currentIndex = 0;

// Obtener la carpeta desde el parámetro de la URL
function getFolderFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("folder") || "japan2024"; // Carpeta por defecto
}

// Obtener la lista de fotos desde photos.json en la carpeta seleccionada
async function fetchPhotos() {
    const folder = getFolderFromURL(); // Obtener la carpeta dinámica
    try {
        const response = await fetch(`images/${folder}/photos.json`);
        const data = await response.json();
        photos = data.map(photo => `images/${folder}/${photo}`);
        updatePage();
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

function updatePage() {
    if (photos.length === 0) return;

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
fetchPhotos();
