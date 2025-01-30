// Lista de carpetas disponibles (añadir más según necesites)
const folders = ["japan2024", "amsterdam2022", "berlin2019"];

// Contenedor donde se insertarán las imágenes
const galleryContainer = document.getElementById("gallery-container");

// Generar dinámicamente la galería
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
