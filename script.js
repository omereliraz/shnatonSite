const clickable = document.querySelector(".site-header-title");
const target = document.querySelector(".site-content-page-header");

clickable.addEventListener("click", () => {
    target.classList.toggle("drop-down");
});


// let frame = 0;
//     const totalFrames = 5;
//     const box = document.querySelector(".site-content-page-header-body-0");

//     function advanceFrame() {
//       frame = (frame + 1) % (totalFrames + 1); // Loop
//       const progress = frame / totalFrames;
//       box.style.animationDelay = `-${progress}s`; // Negative delay jumps forward
//     }

//     let scrollTimeout;
//     window.addEventListener('scroll', () => {
//       // Debounce to avoid flooding on fast scrolls
//       if (!scrollTimeout) {
//         scrollTimeout = setTimeout(() => {
//           advanceFrame();
//           scrollTimeout = null;
//         }, 50);
//       }
//     });

const box0 = document.querySelector(".site-content-page-header-body-0");
let progress0 = 0; // between 0 and 1
const duration0 = 40; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction0 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress0 += direction0 * 0.0001;
    if (progress0 > 1) progress0 -= 100;
    if (progress0 < 0) progress0 += 100;

    // Set animation position using negative delay
    box0.style.animationDelay = `-${progress0 * duration0}s`;
}, { passive: true });


const box1 = document.querySelector(".site-content-page-header-body-1");
let progress1 = 0; // between 0 and 1
const duration1 = 45; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction1 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress1 += direction1 * 0.0001;
    if (progress1 > 1) progress1 -= 100;
    if (progress1 < 0) progress1 += 100;

    // Set animation position using negative delay
    box1.style.animationDelay = `-${progress1 * duration1}s`;
}, { passive: true });



const box2 = document.querySelector(".site-content-page-header-body-2");
let progress2 = 0; // between 0 and 1
const duration2 = 50; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction2 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress2 += direction2 * 0.0001;
    if (progress2 > 1) progress2 -= 100;
    if (progress2 < 0) progress2 += 100;

    // Set animation position using negative delay
    box2.style.animationDelay = `-${progress2 * duration2}s`;
}, { passive: true });



const box3 = document.querySelector(".site-content-page-header-body-3");
let progress3 = 0; // between 0 and 1
const duration3 = 36; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction3 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress3 += direction3 * 0.0001;
    if (progress3 > 1) progress3 -= 100;
    if (progress3 < 0) progress3 += 100;

    // Set animation position using negative delay
    box3.style.animationDelay = `-${progress3 * duration3}s`;
}, { passive: true });



const box4 = document.querySelector(".site-content-page-header-body-4");
let progress4 = 0; // between 0 and 1
const duration4 = 25; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction4 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress4 += direction4 * 0.0001;
    if (progress4 > 1) progress4 -= 100;
    if (progress4 < 0) progress4 += 100;

    // Set animation position using negative delay
    box4.style.animationDelay = `-${progress4 * duration4}s`;
}, { passive: true });



const box5 = document.querySelector(".site-content-page-header-body-5");
let progress5 = 0; // between 0 and 1
const duration5 = 30; // animation duration in seconds

window.addEventListener('wheel', (event) => {
    const direction5 = event.deltaY > 0 ? 1 : -1;

    // Scroll sensitivity
    progress5 += direction5 * 0.0001;
    if (progress5 > 1) progress5 -= 100;
    if (progress5 < 0) progress5 += 100;

    // Set animation position using negative delay
    box5.style.animationDelay = `-${progress5 * duration5}s`;
}, { passive: true });

