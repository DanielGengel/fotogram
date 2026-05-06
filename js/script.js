const gallery = document.getElementById("myPhotoGallery");
const title = document.getElementById("myPhotoGalleryTitle");

const myImages = [
    "Spain01.jpeg",
    "Spain02.jpeg",
    "Spain03.jpeg",
    "Spain04.jpeg",
    "Spain05.jpeg",
    "Spain06.jpeg",
    "Spain07.jpeg",
    "Spain08.jpeg",
    "Spain09.jpeg",
    "Spain10.jpeg",
    "Spain11.jpeg",
    "Spain12.jpeg",
    "Spain13.jpeg",
    "Spain14.jpeg",
    "Spain15.jpeg",
    "Spain16.jpeg",
];

function showGallery() {

    title.innerHTML = "<h1>My Photo Gallery</h1>";
    let html = "";

    for (let i = 0; i < myImages.length; i++) {
        html += `
            <img src="../assets/images/Spain/${myImages[i]}" alt="Bild">
        `;
    }

    
    gallery.innerHTML = html;
}
