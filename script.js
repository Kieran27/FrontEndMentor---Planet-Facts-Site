
fetch('data.json')
.then(response => response.json())
.then(data => {
  console.log(data);
  let myArray = [];
  for (let i = 0; i < data.length; i++) {
    const content = template.content.cloneNode(true).children[0];
    content.querySelector('#planet-title').innerText = data[i].name;
    content.querySelector('#planet-content').innerText = data[i].overview.content;
    content.querySelector('#rotation').innerText = data[i].rotation;
    content.querySelector('#revolution').innerText = data[i].revolution;
    content.querySelector('#radius').innerText = data[i].radius;
    content.querySelector('#temp').innerText = data[i].temperature;
    content.querySelector('#img-planet').src = data[i].images.planet;
    content.querySelector('#planet-src').href = data[i].overview.source;
    content.querySelector('#img-geology').src = data[i].images.geology;
    content.querySelector('#img-internal').src = data[i].images.internal;
    content.querySelector('#planet-overview').innerText = data[i].overview.content;
    content.querySelector('#planet-internal').innerText = data[i].structure.content;
    content.querySelector('#planet-geology').innerText = data[i].geology.content;
    content.querySelector('#overview-src').href = data[i].overview.source;
    content.querySelector('#structure-src').href = data[i].structure.source;
    content.querySelector('#geology-src').href = data[i].geology.source;
    myArray.push(content);
  }
    document.querySelector('main').appendChild(myArray[2]);
    document.querySelector('#earth').classList.add('link-border');
    document.querySelector('.link-border').style.borderColor = 'var(--Earth)'
    individualImageAdjustments(myArray);

  document.querySelectorAll('[data-link]').forEach(element => {
    element.addEventListener('click', function(event)  {
      const target = event.target;
      if (target.id === 'mercury' || target.id ==='mercury-btn') {
        document.querySelector('main').innerHTML = "";
        document.querySelector('main').appendChild(myArray[0]);
        planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'venus' || target.id ==='venus-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[1]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'earth' || target.id ==='earth-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[2]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'mars' || target.id ==='mars-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[3]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'jupiter' || target.id ==='jupiter-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[4]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'saturn' || target.id ==='saturn-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[5]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'uranus' || target.id ==='uranus-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[6]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }

    } else if (target.id === 'neptune' || target.id ==='neptune-btn') {
      document.querySelector('main').innerHTML = "";
      document.querySelector('main').appendChild(myArray[7]);
      planetChosen();
        if (target.parentElement === pullOutContent) {
        pullOut.classList.toggle('toggled');
      }
      }
      else {
        return ("How did that happen?")
      }
    })
  })
});

const hamburger = document.querySelector('.hamburger-menu');
const pullOut = document.querySelector('.mobile-pullout-nav');
const pullOutContent = document.querySelector('.mobile-pullout-content');
const template = document.querySelector('template');
const nav = document.querySelector('.planetary-nav');

hamburger.addEventListener('click', function() {
  pullOut.classList.toggle('toggled');
  console.log(planetTitle)
})

function planetChosen() {

  elements = document.getElementsByClassName('link-border')
  for (element of elements) {
  element.classList.remove('link-border');
    }

  let planetTitle = document.querySelector('.planet-title h2').textContent;
  document.querySelectorAll('.border').forEach(border => {
    border.style.background=`var(--${planetTitle})`;
    document.querySelector('.border-active').style.background = `var(--${planetTitle})`;
  })

  document.getElementsByClassName(`${planetTitle}-dsk`)[0].classList.add('link-border');
  document.querySelector('.link-border').style.borderColor = `var(--${planetTitle})`;

  document.querySelector('.active').style.background = `var(--${planetTitle})`;
}


function overviewFunction() {
  removeToggle();
  hideImages();
  removeBorders();

  document.querySelectorAll('.toggle')[0].classList.add('active');
  document.querySelector('#img-planet').style.display = 'block';
  document.querySelector('#planet-content').innerText = document.querySelector('#planet-overview').innerText;
  document.querySelector('#planet-src').href = document.querySelector('#overview-src').href;
  document.querySelector('#overview').classList.toggle('border-active');
  changeToggleColour()
}

function structureFunction() {
  removeToggle();
  hideImages();
  removeBorders();

  document.querySelectorAll('.toggle')[1].classList.add('active');
  document.querySelector('#img-internal').style.display = 'block';
  document.querySelector('#planet-content').innerText = document.querySelector('#planet-internal').innerText;
  document.querySelector('#planet-src').href = document.querySelector('#structure-src').href;
  document.querySelector('#structure').classList.toggle('border-active');
  changeToggleColour()
}

function geologyFunction() {
  removeToggle();
  hideImages();
  removeBorders();

  document.querySelectorAll('.toggle')[2].classList.toggle('active');
  document.querySelector('#img-planet').style.display = 'block';
  document.querySelector('#img-geology').style.display = 'block';
  document.querySelector('#planet-content').innerText = document.querySelector('#planet-geology').innerText;
  document.querySelector('#planet-src').href = document.querySelector('#geology-src').href;
  document.querySelector('#geology').classList.toggle('border-active');
  changeToggleColour()
}

function removeToggle() {
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.classList.remove('active');
    toggle.style.background = 'var(--PrimaryBlack)'
    // toggle.classList.toggle('toggle-no-bg');
  })
}

function removeBorders()  {
  document.querySelectorAll('.border-active').forEach(active => {
    active.classList.toggle('border-active');
  })
}

function hideImages() {
  let imgSelector = document.querySelector('.planet-img');
  imgSelector.querySelectorAll('img').forEach(img => {
    img.style.display = 'none';
  })
}

function changeToggleColour() {
  document.querySelectorAll('.active').forEach(active => {
    let planetTitle = document.querySelector('.planet-title h2').textContent;
    active.style.background = `var(--${planetTitle})`;
  })
}



function individualImageAdjustments(myArray) {
  myArray[0].querySelector('.planet-img').classList.toggle('small-planet-padding');
  myArray[3].querySelector('.planet-img').classList.toggle('small-planet-padding');

  myArray[1].querySelector('.planet-img').classList.toggle('medium-planet-padding');
  myArray[2].querySelector('.planet-img').classList.toggle('medium-planet-padding');
  myArray[6].querySelector('.planet-img').classList.toggle('medium-planet-padding');
  myArray[7].querySelector('.planet-img').classList.toggle('medium-planet-padding');

  myArray[0].querySelector('.planet-img').classList.toggle('mercury-container');
  myArray[1].querySelector('.planet-img').classList.toggle('venus-container');
  myArray[2].querySelector('.planet-img').classList.toggle('earth-container');
  myArray[3].querySelector('.planet-img').classList.toggle('mars-container');
  myArray[4].querySelector('.planet-img').classList.toggle('jupiter-container');
  myArray[5].querySelector('.planet-img').classList.toggle('saturn-container');
  myArray[6].querySelector('.planet-img').classList.toggle('uranus-container');
  myArray[7].querySelector('.planet-img').classList.toggle('neptune-container');

  myArray[0].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-small');
  myArray[3].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-small');

  myArray[1].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-medium');
  myArray[2].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-medium');
  myArray[6].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-medium');
  myArray[7].querySelector('.planet-img-geology').classList.toggle('planet-img-geology-medium');
}



// function mercuryChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[0]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Mercury)';
//   })
//   document.getElementsByClassName('mercury-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Mercury)'
// }
//
// function venusChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[1]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Venus)';
//   })
//   document.getElementsByClassName('venus-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Venus)'
// }

// function earthChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[2]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Earth)';
//   })
//   document.getElementsByClassName('earth-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Earth)'
// }
//
// function marsChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[3]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Mars)';
//   })
//   document.getElementsByClassName('mars-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Mars)'
// }
//
// function jupiterChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[4]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Jupiter)';
//   })
//   document.getElementsByClassName('jupiter-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Jupiter)'
// }
//
// function saturnChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[5]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Saturn)';
//   })
//   document.getElementsByClassName('saturn-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Saturn)'
// }
//
// function uranusChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[6]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Uranus)';
//   })
//   document.getElementsByClassName('uranus-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Uranus)'
// }
//
// function neptuneChosen(myArray)  {
//   document.querySelector('main').innerHTML = "";
//   document.querySelector('main').appendChild(myArray[7]);
//   document.querySelectorAll('.border').forEach(border => {
//     border.style.background='var(--Neptune)';
//   })
//   document.getElementsByClassName('neptune-dsk')[0].classList.add('link-border');
//   document.querySelector('.link-border').style.borderColor = 'var(--Neptune)'
// }
