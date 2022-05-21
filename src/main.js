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
newBook.addEventListener("click", createNewCover);
// // userCover.addEventListener("input", createCover);
// descriptorOne.addEventListener("input", createCover);
// descriptorTwo.addEventListener("input", createCover);
// userTitle.addEventListener("input", createCover);

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
function displayFormView(){
  formView.classList.remove('hidden');
  newRandom.classList.add('hidden');
  saveCover.classList.add('hidden');
  homeView.classList.add('hidden');
  goHome.classList.remove('hidden');
  savedView.classList.add('hidden');
}
function displayHomeView(event){
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
function createCover(){
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeView.classList.remove('hidden');
  newBook.classList.remove('hidden');
}
function createNewCover(){
  event.preventDefault();
  this.cover = getCoverData();
  addCoverItemsToArray(this.cover.cover, this.cover.title, this.cover.descriptor, this.cover.descriptor)
  showNewCover(this.cover);

  // currentCover.src = userCover.value;
  // currentCover.innerText = userTitle.value;
  // currentCover.innerText = descriptorOne.value;
  // currentCover.innerText = descriptorTwo.value;
  // //
  // mainCover.src = userCover.value;
  // mainTitle.innerText = userTitle.value;
  // mainTag1.innerText = descriptorOne.value;
  // mainTag2.innerText = descriptorTwo.value;
}

function addCoverItemsToArray (cover, title, descriptor, descriptor2){
  covers.push(cover);
  titles.push(title);
  descriptors.push(descriptor, descriptor2)
}

function getCoverData(){
  var userCover = document.querySelector('.user-cover').value;
  var descriptorOne = document.querySelector('.user-desc1').value;
  var descriptorTwo = document.querySelector('.user-desc2').value;
  var userTitle = document.querySelector('.user-title').value;
  currentCover = new Cover (userCover, userTitle, descriptorOne, descriptorTwo);
  return currentCover;
}
function showNewCover(cover){
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeView.classList.remove('hidden');
  newBook.classList.remove('hidden');
  mainCover.src = cover.cover;
  mainTitle.innerText = cover.title;
  mainTag1.innerText = cover.tagline1;
  mainTag2.innerText = cover.tagline2;
}


//create a button for "save cover",create an event listener to perform
//on "click" to save the current cover to the "savedcovers" array (above)
//will save to the saved covers array.

generateRandomCover();
