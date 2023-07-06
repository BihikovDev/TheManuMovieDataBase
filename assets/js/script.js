// SELECTEURS
const moviesDiv = document.querySelector('#movieDiv')

// FONCTIONS
const getMovies = () => {
    fetch('./assets/js/movies.json')          // récupération du fichier json
    .then((res) => {
        return res.json()                          // retour du fichier json
    })
    .then((data) => {
        data.results.forEach(element => {
// Création de la première div et de sa row
            let firstDiv = document.createElement('div')
            firstDiv.classList.add('col-12')
            let firstDivRow = document.createElement('div')
            firstDivRow.classList.add('row')
// Création de la seconde div et de sa row
            let secondDiv = document.createElement('div')
            secondDiv.classList.add('col-3')
            let secondDivRow = document.createElement('div')
            secondDivRow.classList.add('row')
// Création de la div qui contiendra l'image 
            let imgDiv = document.createElement('div')
            imgDiv.classList.add('col-5', 'mb-4', 'ms-4')
// Création de l'élément qui contiendra l'image
            let showImg = document.createElement('img')
            showImg.setAttribute('src', `${element.poster_path}`)
            showImg.classList.add('col-12', 'img-fluid')

            imgDiv.append(showImg)
// Création de la div qui contiendra le texte
            let textDiv = document.createElement('div')
            textDiv.classList.add('col-6')
// Création de l'élément pour récupérer le titre
            let showTitle = document.createElement('h4')
            showTitle.classList.add('col-12')
            showTitle.innerHTML = element.original_title
// Création de l'élément pour récupérer et afficher les descriptions
            let showDescription = document.createElement('p')
            showDescription.classList.add('col-12')
            showDescription.innerHTML = element.overview
// Création de l'élément pour récupérer et afficher les notes
            let showNotation = document.createElement('span')
            showNotation.classList.add('col-12')

            let average = Math.round(element.vote_average / 2);
            let startfill = '<span><i class="bi bi-star-fill"></i></span>'
            let star = '<span><i class="bi bi-star"></i></span>'
            let averageStar = ''

            for(let i = 0; i < 5; i++){
                if(average > i){
                    averageStar += startfill
                } else {
                    averageStar += star
                }
            }
            showNotation.innerHTML = averageStar

            textDiv.append(showTitle, showDescription, showNotation)

            firstDivRow.append(imgDiv, textDiv)
            secondDiv.append(firstDivRow)
            moviesDiv.append(secondDiv)
        })
    })
}
// APPEL FONCTION
getMovies()