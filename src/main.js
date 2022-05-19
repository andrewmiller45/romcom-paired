// Create variables targetting the relevant DOM elements here 👇
var newRandomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var homeView = document.querySelector('.home-view')
var createForm = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
var coversSection = document.querySelector('.saved-covers')
var mainCover = document.querySelector('.cover-image')
var mainTitle = document.querySelector('.cover-title')
var mainTag1 = document.querySelector('.tagline-1')
var mainTag2 = document.querySelector('.tagline-2')



// We've provided a few variables below 
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
newRandomButton.addEventListener("click", generateRandomCover)
makeCoverButton.addEventListener("click", createFormPage)
viewSavedButton.addEventListener("click", viewSavedCovers)
homeButton.addEventListener("click", goHome)


// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover(){
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  pageLoadRandom()
}

function pageLoadRandom(){
  mainCover.src = currentCover.cover
  mainTitle.innerText = currentCover.title
  mainTag1.innerText = currentCover.tagline1
  mainTag2.innerText = currentCover.tagline2
}

function createFormPage(){
  createForm.classList.toggle('hidden')
  homeView.classList.toggle('hidden')
  homeButton.classList.toggle('hidden')
  newRandomButton.classList.toggle('hidden')
  saveCoverButton.classList.toggle('hidden')
}

function viewSavedCovers(){
  savedView.classList.toggle('hidden')
  homeView.classList.toggle('hidden')
  newRandomButton.classList.toggle('hidden')
  saveCoverButton.classList.toggle('hidden')
  homeButton.classList.toggle('hidden')

  // for (let i = 0; i < savedCovers.length; i++) {
  //   savedView.innerHTML += `<section class="main-cover">
  //   <img class="cover-image" src="${savedCovers[i].cover}">
  //   <h2 class="cover-title">${savedCovers[i].title}</h2>
  //   <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
  //   <img class="price-tag" src="./assets/price.png">
  //   <img class="overlay" src="./assets/overlay.png">
  // </section>`
  // }
}

function goHome(){
  homeView.classList.toggle('hidden')
  createForm.classList.toggle('hidden')
  homeButton.classList.toggle('hidden')
  newRandomButton.classList.toggle('hidden')
  saveCoverButton.classList.toggle('hidden')
}


//generate a new instance of a Cover every time the page loads.
//generate a new instance of a Cover every time you click the show random button
//


generateRandomCover();