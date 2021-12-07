//Lists of photos

const allTheApc = [
    { src: `apc01.jpeg`, alt: `NAYA` },
    { src: `apc02.jpeg`, alt: `NAYA` },
    { src: `apc03.jpeg`, alt: `LUCIANA` },
    { src: `apc04.jpeg`, alt: `LUCIANA` },
    { src: `apc05.jpeg`, alt: `TATIANA` },
    { src: `apc06.jpeg`, alt: `TATIANA` },
    { src: `apc07.jpeg`, alt: `VANESSA` },
    { src: `apc08.jpeg`, alt: `VANESSA` }
];

const allThePdc = [
    { src: `pdc01.jpeg`, alt: `AFTERLIFE` },
    { src: `pdc02.jpeg`, alt: `EYE` },
    { src: `pdc03.jpeg`, alt: `DOUBLE` },
    { src: `pdc04.jpeg`, alt: `DELIRIUM` },
    { src: `pdc05.jpeg`, alt: `TRIPTYCH` },
    { src: `pdc06.jpeg`, alt: `THE ONE` }
];

const allTheTbc = [
    { src: `tbc01.jpeg`, alt: `MOVEMENT` },
    { src: `tbc02.jpeg`, alt: `SPIRAL` },
    { src: `tbc03.jpeg`, alt: `SLIDE` },
    { src: `tbc04.jpeg`, alt: `DREAM` },
    { src: `tbc05.jpeg`, alt: `MYSTERY` },
    { src: `tbc06.jpeg`, alt: `CLOUDY` }
];


let photoID = getParameter("photoId") ;
displayPhoto(photoID);

// This function reads the ID from the photo to be shown.
function getParameter(prmtName) {

    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(prmtName);
};

// Using a parameter selects ans display a img/img_description 
function displayPhoto(code) {
    let aux = code.substr(0,3);
    let elmt;

    switch (aux) {
        case "apc":
            
            elmt = allTheApc.find(photo => photo.src === code);

            document.querySelector(`#photoID`).src = `../img/${elmt.src}`;
            document.querySelector(`#photoName`).textContent = elmt.alt;

            break;

        case "pdc":
            elmt = allThePdc.find(photo => photo.src === code);

            document.querySelector(`#photoID`).src = `../img/${elmt.src}`;
            document.querySelector(`#photoName`).textContent = elmt.alt;
            break;

        case "tbc":
            elmt = allTheTbc.find(photo => photo.src === code);

            document.querySelector(`#photoID`).src = `../img/${elmt.src}`;
            document.querySelector(`#photoName`).textContent = elmt.alt;
            break;

        default:
            break;
    }

    
}

