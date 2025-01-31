document.addEventListener("DOMContentLoaded", async function () {
    let photos = [];
    let currentIndex = 0;

    // Obtener la carpeta de la URL
    const params = new URLSearchParams(window.location.search);
    const folder = params.get("folder") || "default-folder";

    async function fetchPhotos() {
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

        // Actualizar anuncios dinámicamente sin recargar la página
        updateAds();
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

    function updateAds() {
        document.getElementById("ad-top").src = `images/ads/horitzontal.png?cache=${Date.now()}`;
        document.getElementById("ad-bottom").src = `images/ads/horitzontal.png?cache=${Date.now()}`;
    }

    document.getElementById("prev-btn").addEventListener("click", goToPrevious);
    document.getElementById("next-btn").addEventListener("click", goToNext);
    document.getElementById("first-btn").addEventListener("click", goToFirst);
    document.getElementById("last-btn").addEventListener("click", goToLast);

    fetchPhotos();
});
