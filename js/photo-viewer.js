let photos = [];
let currentIndex = 0;

// Obtener la lista de fotos desde photos.json
async function fetchPhotos() {
    try {
        const response = await fetch("images/japan2024/photos.json");
        const data = await response.json();
        photos = data.map(photo => `images/japan2024/${photo}`);
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
