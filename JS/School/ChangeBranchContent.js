var originalContent = {
    image: './images/Schoolimages/EMI.png',
    title: 'EMI',
    description: 'École N°1 au Maroc d\'après le classement du cabinet DIORH et CAMPS MAG'
};

function changeContent(field, event) {

    //prevent the reloading of the page 
    event.preventDefault();

    var contentMap = {
        'Informatique': {
            image: './images/Fields/Info.jpg',
            title: 'Informatique et Digitalisation',
            description: 'Description'
        },

        'Mécanique': {
            image: './images/Fields/Meca.jpg',
            title: 'Mécanique',
            description: 'Description'
        },

        'Civil': {
            image: './images/Fields/Civil.jpg',
            title: 'Civil',
            description: '-Batiments Ponts et Chaussées\n' +
                         '-Hydraulique\n' +
                         '-Infrastructures de Transport\n' +
                         '-Urbain & Environnement'
        },

        'Électrique': {
            image: './images/Fields/Elec.jpg',
            title: 'Électrique',
            description: 'Description'
        },

        'Industriel': {
            image: './images/Fields/Indus.jpg',
            title: 'Industriel',
            description: 'Description'
        },

        'Procédés': {
            image: './images/Fields/Procedes.jpg',
            title: 'Procédés Industriels',
            description: 'Description'
        },

        'Minéral': {
            image: './images/Fields/Mineral.jpg',
            title: 'Minéral',
            description: 'Description'
        },

        'MIS': {
            image: './images/Fields/MIS.jpg',
            title: 'MIS',
            description: 'Description'
        },

    };


    var imageElement = document.querySelector('.school-career-paths-image');
    var titleElement = document.querySelector('.school-career-paths-content-title');
    var descriptionElement = document.querySelector('.school-career-paths-content-description');
    var returnButton = document.querySelector('.return-button');

    imageElement.src = contentMap[field].image;
    titleElement.textContent = contentMap[field].title;
    descriptionElement.textContent = contentMap[field].description;

    // Show the "Retour" button
    returnButton.style.display = 'inline';

}


function resetContent(event) {

    //prevent the reloading of the page 
    event.preventDefault();

    // Get the elements to update
    var imageElement = document.querySelector('.school-career-paths-image');
    var titleElement = document.querySelector('.school-career-paths-content-title');
    var descriptionElement = document.querySelector('.school-career-paths-content-description');
    var returnButton = document.querySelector('.return-button');

    // Revert to the original content
    imageElement.src = originalContent.image;
    titleElement.textContent = originalContent.title;
    descriptionElement.textContent = originalContent.description;

    // Hide the "Retour" button
    returnButton.style.display = 'none';
}