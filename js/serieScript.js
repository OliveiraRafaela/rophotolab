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

//
let serieID = getParameter("serieId") ;
displayPhotos(serieID);

// This function reads the ID from the series to be shown.
function getParameter(prmtName) {

    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(prmtName);
};

//
function displayPhotos(idCod) {

    switch (idCod) {
        case "apc":
            document.querySelector(`#serieTitle`).innerHTML = "A PAREDE CINZA";
            document.querySelector(`#serie`).innerHTML = allTheApc
                .map((elmt) => `<div class="unit"> <a href="../html/photo.html?photoId=${elmt.src}" class="link-photo">
<img src="../img/${elmt.src}" alt="" class="photo"></a><h2>${elmt.alt}</h2></div>`)
                .join('');
            break;

        case "pdc":
            document.querySelector(`#serieTitle`).innerHTML = "PEDAÇOS";
            document.querySelector(`#serie`).innerHTML = allThePdc
                .map((elmt) => `<div class="unit"> <a href="../html/photo.html?photoId=${elmt.src}" class="link-photo">
            <img src="../img/${elmt.src}" alt="" class="photo"></a><h2>${elmt.alt}</h2></div>`)
                .join('');
            break;

        case "tbc":
            document.querySelector(`#serieTitle`).innerHTML = "THE BLURRY CITY";
            document.querySelector(`#serie`).innerHTML = allTheTbc
                .map((elmt) => `<div class="unit"> <a href="../html/photo.html?photoId=${elmt.src}" class="link-photo">
            <img src="../img/${elmt.src}" alt="" class="photo"></a><h2>${elmt.alt}</h2></div>`)
                .join('');
            break;

        default:
            break;
    }


}

