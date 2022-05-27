var loader
// here is the code for the apply button

function applyNow() {
  alert('You want a admission in this college')
  window.location.href = 'https://admissions.cgc.ac.in/'
}

//here is the code for the loader
function loadNow(opacity) {
  if (opacity <= 0) {
    displayContent()
  } else {
    loader.style.opacity = opacity
    window.setTimeout(function () {
      loadNow(opacity - 0.05)
    }, 50)
  }
}

function displayContent() {
  loader.style.display = 'none'
  document.getElementById('content').style.display = 'block'
}

document.addEventListener('DOMContentLoaded', function () {
  loader = document.getElementById('loader')
  loadNow(1)
})

// function collapseMenu() {
//     var x = document.getElementById('myLinks');
//     if (x.style.display === 'block') {
//         x.style.display = 'none';
//     } else {
//         x.style.display = 'block';
//     }
// }
