const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

// we could use dblclick in eventlistner, but we created own function to define when we have a double click:
loveMe.addEventListener("click", (e) => {
  // that checks single click time
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    console.log(clickTime);
    // we check the time between the clicks it its below 800ms then it is trigerring the action
  } else {
    if (new Date().getTime() - clickTime < 800) {
      // we call createHeart function and we reset time to zero.
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});
// Overall, this function createHeart is intended to create a new heart-shaped icon (<i class="fas fa-heart"></i>) at the position where the mouse was double-clicked (as the event e is likely a double-click event). The function logs the X and Y coordinates of the mouse pointer relative to the viewport when called, but it doesn't yet append the newly created heart icon to the document or perform any other action with it.
const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //These lines retrieve the X and Y coordinates of the mouse pointer at the time the event (e) occurred.
  const x = e.clientX;
  const y = e.clientY;

  // we check what is offset value
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  // increment the number of times clicked and add this to times html.
  times.innerHTML = ++timesClicked;

  // remove the added element to html aftern 1s (1000)in the browser, as everytime we click -> browser adding the heart icon in.

  setTimeout(() => heart.remove(), 1000);
};
