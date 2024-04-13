// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const aHearts = document.querySelectorAll(".like-glyph");

function like(e) {
  const heart = e.target;
  mimicServerCall("Url")
    .then(() =>{
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        heart.className = "liked";
      } else {
        heart.innerText = EMPTY_HEART;
        heart.className = "";
      }
    })
    .catch((error) => {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 2000);
    });
}

for (const glyph of aHearts) {
  glyph.addEventListener("click", like);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
