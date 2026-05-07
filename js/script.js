// TODO: add array for picture alt text...

const photoGallery = document.getElementById("myPhotoGallery");
const photoGalleryTitle = document.getElementById("myPhotoGalleryTitle");
const lightbox = document.getElementById("lightboxID");
const lightboxImageCaption = document.getElementById("lightboxImageCaptionID");
const lightboxImage = document.getElementById("lightboxImageID");
const btnPrevImage = document.getElementById("buttonPrevImage");
const btnNextImage = document.getElementById("buttonNextImage");
const lightboxImageCounter = document.getElementById("lightboxImageCounterID");
const btnCloseLightbox = document.getElementById("buttonCloseLightbox");

let indexForLightboxImage = 0;

const myImages = [
    { imageFileName: "Spain01.jpeg", imageCaption: "Image from Sevilla, Spain" },
    { imageFileName: "Spain02.jpeg", imageCaption: "Image from Ronda, Spain" },
    { imageFileName: "Spain03.jpeg", imageCaption: "Image from Ronda, Spain" },
    { imageFileName: "Spain04.jpeg", imageCaption: "Image from Ronda, Spain" },
    { imageFileName: "Spain05.jpeg", imageCaption: "Image from Ronda, Spain" },
    { imageFileName: "Spain06.jpeg", imageCaption: "Image from Malaga, Spain" },
    { imageFileName: "Spain07.jpeg", imageCaption: "Image from Murcia, Spain" },
    { imageFileName: "Spain08.jpeg", imageCaption: "Image from Spain" },
    { imageFileName: "Spain09.jpeg", imageCaption: "Image from Torre del mar, Spain" },
    { imageFileName: "Spain10.jpeg", imageCaption: "Image from Spain" },
    { imageFileName: "Spain11.jpeg", imageCaption: "Image from Bilbao, Spain" },
    { imageFileName: "Spain12.jpeg", imageCaption: "Image from Bilbao, Spain" },
    { imageFileName: "Spain13.jpeg", imageCaption: "Image from Bilbao, Spain" },
    { imageFileName: "Spain14.jpeg", imageCaption: "Image from Northern Spain" },
    { imageFileName: "Spain15.jpeg", imageCaption: "Image from Northern Spain" },
    { imageFileName: "Spain16.jpeg", imageCaption: "Image from Northern Spain" },
];

function showGallery() {
    photoGalleryTitle.innerHTML = "<h1>My Photo Gallery</h1>";
    photoGallery.innerHTML = "";

    for (let i = 0; i < myImages.length; i++) {
        photoGallery.innerHTML += `
            <img src="../assets/images/Spain/${myImages[i].imageFileName}" alt="${myImages[i].imageCaption}" onclick="openLightbox(${i})">
        `;
    }
}

// Add functions to buttons
btnPrevImage.addEventListener("click", showPrevImage);
btnNextImage.addEventListener("click", showNextImage);
btnCloseLightbox.addEventListener("click", closeLightbox);



// Navigation with arrow keyboard keys and escape to close the Lightbox.
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        showPrevImage();
    }

    if (event.key === "ArrowRight") {
        showNextImage();
    }

    if (event.key === "Escape") {
        closeLightbox(); 
    }
});

function openLightbox(index) {
    // Which picture was clicked at?
    indexForLightboxImage = index;

    // Path to clicked picture
    imageToShow(indexForLightboxImage);
    // Show lightbox
    lightbox.style.display = "flex";
}

function showNextImage() {
    // console.log(document.getElementById("lightboxImageID"));
    // indexForLightboxImage = (indexForLightboxImage + 1) % myImages.length;
    // imageToShow(indexForLightboxImage);
    indexForLightboxImage++;
    if (indexForLightboxImage >= myImages.length) indexForLightboxImage = 0;
    imageToShow();
}

function showPrevImage() {
    // console.log(document.getElementById("lightboxImageID"));
    // indexForLightboxImage = (indexForLightboxImage - 1 + myImages.length) % myImages.length;
    // imageToShow(indexForLightboxImage);
    indexForLightboxImage--;
    if (indexForLightboxImage < 0) indexForLightboxImage = myImages.length - 1;
    imageToShow();
}

function imageToShow() {
    lightboxImage.src = `../assets/images/Spain/${myImages[indexForLightboxImage].imageFileName}`;
    lightboxImage.setAttribute("alt", `${myImages[indexForLightboxImage].imageCaption}`);
    lightboxImageCaption.textContent = `${myImages[indexForLightboxImage].imageCaption}`;
    lightboxImageCounter.textContent = `${indexForLightboxImage + 1}/${myImages.length}`;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

// Close window when clicked outside lightbox
lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
