document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    async function loadGalleries() {
        try {
            const response = await fetch("images/galleries.json");
            const data = await response.json();
            gallery.innerHTML = ""; // Limpia la galería antes de agregar contenido

            data.forEach(folder => {
                const galleryItem = document.createElement("div");
                galleryItem.classList.add("gallery-item");

                const link = document.createElement("a");
                link.href = `photo-viewer.html?folder=${folder.name}`;

                const img = document.createElement("img");
                img.src = `images/${folder.name}/${folder.cover}`;
                img.alt = folder.name;

                link.appendChild(img);
                galleryItem.appendChild(link);
                gallery.appendChild(galleryItem);
            });

            // Inicializar Masonry después de cargar las imágenes
            new Masonry(".gallery", {
                itemSelector: ".gallery-item",
                columnWidth: ".gallery-item",
                gutter: 10,
                fitWidth: true
            });

        } catch (error) {
            console.error("Error loading galleries:", error);
        }
    }

    loadGalleries();
});
