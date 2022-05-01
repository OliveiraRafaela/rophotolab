// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// Function to format the footer message. 

function setFooterMsg() {
    const now = new Date;
    const pFooterMsg = ' ' + now.getFullYear() + ' Rafaela Oliveira';
    document.querySelector('#ft').textContent = pFooterMsg;
}

setFooterMsg();