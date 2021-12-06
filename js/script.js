/*

  const allTheImages = [`dice1.svg`, `dice2.svg`, `dice3.svg`, `dice4.svg`]


document.querySelector(`#gallery`).innerHTML = allTheImages
  .map((src) => `<img src="img/${src}" class="link-photo">`)
  .join('')


*/


const allTheApc = [`apc01.jpeg`, `apc02.jpeg`, `apc03.jpeg`, `apc04.jpeg`, `apc05.jpeg`, `apc06.jpeg`, `apc07.jpeg`, `apc08.jpeg`];
const allThePdc = [`pdc01.jpeg`, `pdc02.jpeg`, `pdc03.jpeg`, `pdc04.jpeg`, `pdc05.jpeg`, `pdc06.jpeg`];
const allTheTbc = [`tbc01.jpeg`, `tbc02.jpeg`, `tbc03.jpeg`, `tbc04.jpeg`, `tbc05.jpeg`, `tbc06.jpeg`];


document.getElementById(`#apc`).addEventListener(`click`, displayPhotos(`apc`));
document.getElementById(`#pdc`).addEventListener(`click`, displayPhotos(`pdc`));
document.getElementById(`#tbc`).addEventListener(`click`, displayPhotos(`tbc`));


function displayPhotos(idCod) {

    switch (idCod) {
        case apc:
            document.querySelector(`#serie`).innerHTML = allTheApc
  .map((src) => `<div class="unit"> <a href="../html/photo.html" class="link-photo">
<img src="../img/${src}" alt="" class="photo"></a><h2>A PAREDE CINZA</h2></div>`)
  .join('');
        break;

        case pdc:
            document.querySelector(`#serie`).innerHTML = allThePdc
  .map((src) => `<div class="unit"> <a href="../html/photo.html" class="link-photo">
<img src="../img/${src}" alt="" class="photo"></a><h2>PEDAÇOS</h2></div>`)
  .join('');
        break;

        case tbc:
            document.querySelector(`#serie`).innerHTML = allTheImages
  .map((src) => `<div class="unit"> <a href="../html/photo.html" class="link-photo">
<img src="../img/${src}" alt="" class="photo"></a><h2>THE BLURRY CITY</h2></div>`)
  .join('');
            break;
    
        default:
        break;
    } 


}


