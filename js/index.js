// Your code goes here

const funBusImg = document.querySelector('.intro img');

// 1 dblclick
funBusImg.addEventListener('dblclick', function(e) {
  e.target.src = `http://placekitten.com/800/400`;
  e.stopPropagation();
});

const text = document.querySelectorAll('p');

text.forEach(para => {
  // 2 mouseover 
  para.addEventListener('mouseover', function (e) {
    e.target.style.color = 'blue';
    // 3 mouseout
    para.addEventListener('mouseout', function () {
      e.target.style.color = 'black';
    })
  });
});

const destinationImg = document.querySelector('.content-destination img');

// 4 drag
destinationImg.addEventListener('drag', function(e) {
  e.target.style.display = 'none';
});


const body = document.querySelector('body');
// 5 copy
body.addEventListener('copy', function(e) {
  e.target.style.backgroundColor = 'pink';
});

// 6 keydown
body.addEventListener('keydown', function(e) {
  if(e.code === "Space") body.style.display = 'none';
});

// 7 wheel
body.addEventListener('wheel', function(e) {
  body.style.backgroundColor = 'lightgrey';
});

// dbclick
body.addEventListener('dblclick', function(e) {
  body.style.backgroundColor = 'white';
});

// 8 resize
window.addEventListener('resize', function(e) {
  body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)}, ${Math.floor(Math.random() * 250)})`;
})

// 9 cut
const headers = [ Array.from(document.querySelectorAll('h1')), Array.from(document.querySelectorAll('h2')), Array.from(document.querySelectorAll('h4'))].flat();

headers.forEach(function(header) {
  header.addEventListener('cut', function(e) {
    e.target.style.fontSize = '8rem';
  });
});

// 10 contextmenu

const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.addEventListener('contextmenu', function(e) {
    e.target.style.visibility = 'hidden';
  });
});



// Add event listener to remove default action
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(e => {
  e.addEventListener('click', e => e.preventDefault());
});
