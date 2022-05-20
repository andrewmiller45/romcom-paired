// Create variables targetting the relevant DOM elements here 👇
var newRandomButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeCoverButton = document.querySelector('.make-new-button')
var homeButton = document.querySelector('.home-button')
var createPosterButton = document.querySelector('.create-new-book-button')
var homeView = document.querySelector('.home-view')
var createForm = document.querySelector('.form-view')
var savedView = document.querySelector('.saved-view')
var coversSection = document.querySelector('.saved-covers')
var mainCover = document.querySelector('.cover-image')
var mainTitle = document.querySelector('.cover-title')
var mainTag1 = document.querySelector('.tagline-1')
var mainTag2 = document.querySelector('.tagline-2')
var userCover = document.querySelector('.user-cover')
var userTitle = document.querySelector('.user-title')
var userDesc1 = document.querySelector('.user-desc1')
var userDesc2 = document.querySelector('.user-desc2')

// We've provided a few variables below 
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
newRandomButton.addEventListener("click", generateRandomCover)
makeCoverButton.addEventListener("click", createFormPage)
viewSavedButton.addEventListener("click", viewSavedCovers)
homeButton.addEventListener("click", goHome)
createPosterButton.addEventListener("click", renderCover)
saveCoverButton.addEventListener("click", saveCover)


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
  createForm.classList.remove('hidden')
  savedView.classList.add('hidden')
  homeView.classList.add('hidden')
  homeButton.classList.remove('hidden')
  newRandomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

function viewSavedCovers(){
  savedView.classList.remove('hidden')
  homeView.classList.add('hidden')
  createForm.classList.add('hidden')
  newRandomButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')

  renderSavedCovers()
}

function goHome(){
  homeView.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  newRandomButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  createForm.classList.add('hidden')
  savedView.classList.add('hidden')
  homeButton.classList.add('hidden')
}

function addData(){
  covers.push(userCover.value)
  titles.push(userTitle.value)
  descriptors.push(userDesc1.value)
  descriptors.push(userDesc2.value)
}

function renderCover(e){
  currentCover.cover = userCover.value
  currentCover.title = userTitle.value
  currentCover.tagline1 = userDesc1.value
  currentCover.tagline2 = userDesc2.value

  mainCover.src = userCover.value
  mainTitle.innerText = userTitle.value
  mainTag1.innerText = userDesc1.value
  mainTag2.innerText = userDesc2.value
  e.preventDefault()

  goHome()
}

function saveCover(){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
    resetForm()
}

function resetForm(){
  userCover.value = ''
  userTitle.value = ''
  userDesc1.value = ''
  userDesc2.value = ''
}

renderSavedCovers(){
  
}

//generate a new instance of a Cover every time the page loads.
//generate a new instance of a Cover every time you click the show random button
//

generateRandomCover();