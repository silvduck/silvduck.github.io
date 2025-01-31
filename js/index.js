document.addEventListener("DOMContentLoaded", function () {
    const folders = ["japan2024", "amsterdam2022", "berlin2019"];
    const galleryContainer = document.querySelector(".gallery");

    function loadGalleries() {
        galleryContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar contenido

        folders.forEach(folder => {
            const coverPath = `images/${folder}/cover.jpg`;

            // Crear el contenedor de la imagen
            const galleryItem = document.createElement("div");
            galleryItem.classList.add("gallery-item");

            // Crear el enlace
            const link = document.createElement("a");
            link.href = `photo-viewer.html?folder=${folder}`;

            // Crear la imagen
            const img = document.createElement("img");
            img.src = coverPath;
            img.alt = `Cover of ${folder}`;

            // Insertar elementos en la estructura correcta
            link.appendChild(img);
            galleryItem.appendChild(link);
            galleryContainer.appendChild(galleryItem);
        });

        // Inicializar Masonry después de cargar las imágenes
        setTimeout(() => {
            new Masonry(".gallery", {
                itemSelector: ".gallery-item",
                columnWidth: ".gallery-item",
                gutter: 10,
                fitWidth: true
            });
        }, 100);
    }

    loadGalleries();
});
