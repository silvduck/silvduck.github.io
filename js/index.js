document.addEventListener("DOMContentLoaded", function () {
    const folders = ["japan2024", "amsterdam2022", "berlin2019"];
    const galleryContainer = document.getElementById("gallery-container");

    folders.forEach(folder => {
        const coverPath = `images/${folder}/cover.jpg`;
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("col");

        const link = document.createElement("a");
        link.href = `photo-viewer.html?folder=${folder}`;
        link.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = coverPath;
        img.alt = `Cover of ${folder}`;
        img.classList.add("img-fluid", "rounded");

        link.appendChild(img);
        galleryItem.appendChild(link);
        galleryContainer.appendChild(galleryItem);
    });
});
