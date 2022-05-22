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
var savedGrid = document.querySelector('.saved-covers-section')


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
savedGrid.addEventListener("dblclick", deleteCover)

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
  if (userCover.value === "" || userTitle.value === "" || userDesc1.value === "" || userDesc2.value === "") {
    return alert `you need romanace, baby`
  }
    currentCover.cover = userCover.value
    currentCover.title = userTitle.value
    currentCover.tagline1 = userDesc1.value
    currentCover.tagline2 = userDesc2.value

    mainCover.src = userCover.value
    mainTitle.innerText = userTitle.value
    mainTag1.innerText = userDesc1.value
    mainTag2.innerText = userDesc2.value
    e.preventDefault()
    resetForm()
    goHome()
}

function resetForm(){
  userCover.value = ''
  userTitle.value = ''
  userDesc1.value = ''
  userDesc2.value = ''
}

function saveCover(){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    renderSavedCovers()
    resetForm()
  }
    resetForm()
}

function renderSavedCovers() {
  savedGrid.innerHTML = ""
  for (let i = 0; i < savedCovers.length; i++) {
    savedGrid.innerHTML += 
    `<article class="mini-cover">
        <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
    </article>`  
  }
}

function deleteCover(e){
  for (let i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == e.target.id) {
      savedCovers.splice(i,1)
      renderSavedCovers()
    }
  }
}

generateRandomCover();