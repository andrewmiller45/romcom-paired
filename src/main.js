// Create variables targetting the relevant DOM elements here 👇
var newRandom = document.querySelector('.random-cover-button')
var saveCover = document.querySelector('.save-cover-button')
var viewSaved = document.querySelector('.view-saved-button')
var makeCover = document.querySelector('.make-new-button')
var mainCover = document.querySelector('.cover-image')
var mainTitle = document.querySelector('.cover-title')
var mainTag1 = document.querySelector('.tagline-1')
var mainTag2 = document.querySelector('.tagline-2')
var formView = document.querySelector('.form-view')
var homeView = document.querySelector('.home-view')
var goHome = document.querySelector('.home-button')
var savedView = document.querySelector('.saved-view')
var newBook = document.querySelector('.create-new-book-button')
var userCover = document.querySelector('.user-cover');
var descriptorOne = document.querySelector('.user-desc1')
var descriptorTwo = document.querySelector('.user-desc2')
var userTitle = document.querySelector('.user-title')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
newRandom.addEventListener("click", generateRandomCover);
makeCover.addEventListener("click", displayFormView);
goHome.addEventListener("click", displayHomeView);
viewSaved.addEventListener("click", displaySavedView);
newBook.addEventListener("click", newCoverView);
userCover.addEventListener("input", createCover);
descriptorOne.addEventListener("input", createCover);
descriptorTwo.addEventListener("input", createCover);
userTitle.addEventListener("input", createCover);

// Create your event handlers and other functions here 👇
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover(){
  currentCover = new Cover(covers[getRandomIndex(covers)],
  titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)],
  descriptors[getRandomIndex(descriptors)])

  pageLoadRandom()
}

function pageLoadRandom(){
  mainCover.src = currentCover.cover
  mainTitle.innerText = currentCover.title
  mainTag1.innerText = currentCover.tagline1
  mainTag2.innerText = currentCover.tagline2
}
function displayFormView(event){
  event.preventDefault();
  formView.classList.remove('hidden');
  newRandom.classList.add('hidden');
  saveCover.classList.add('hidden');
  homeView.classList.add('hidden');
  goHome.classList.remove('hidden');
  savedView.classList.add('hidden');
}
function displayHomeView(){
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  goHome.classList.add('hidden');
  newRandom.classList.remove('hidden');
  saveCover.classList.remove('hidden');
  savedView.classList.add('hidden')
}

//view saved covers button clicks to switch page display to
//saved view & initiate the function associated,
//show random cover and save cover buttons should be hidden

function displaySavedView(){
  homeView.classList.add('hidden');
  newRandom.classList.add('hidden');
  saveCover.classList.add('hidden');
  savedView.classList.remove('hidden');
  goHome.classList.remove('hidden');
  formView.classList.add('hidden');
}
function newCoverView(){
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeView.classList.remove('hidden');
  newBook.classList.remove('hidden');
  makeNewCover();
  event.preventDefault(newRandom);
}
function makeNewCover(){
  mainCover.src = makeNewCover.userCover
  mainTitle.innerText = makeNewCover.userTitle
  mainTag1.innerText = makeNewCover.descriptorOne
  mainTag2.innerText = makeNewCover.descriptorTwo
  event.preventDefault(newRandom);
}

//**find a way to ensure toggle is controlled
// (i.e. the ViewSavedCovers & MakeYourOwnCover are currently being swapped dependant upon which order clicked)
// preventDefault(displayFormView(), displayHomeView(), displaySavedView());
generateRandomCover();
